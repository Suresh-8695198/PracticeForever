const pool = require('../config/db');
const path = require('path');
const fs = require('fs');
const mammoth = require('mammoth');
const pdf = require('pdf-parse');

// Upload Image — returns the URL path
exports.uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No image file provided' });
        }
        const imageUrl = `/uploads/current-affairs/${req.file.filename}`;
        res.json({ 
            success: true, 
            data: { 
                url: imageUrl,
                filename: req.file.filename,
                size: req.file.size
            } 
        });
    } catch (err) {
        console.error('Image upload error:', err);
        res.status(500).json({ success: false, message: 'Image upload failed' });
    }
};

// Extract Content from Document (Word/PDF)
exports.extractDocument = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No document file provided' });
        }

        const filePath = req.file.path;
        const ext = path.extname(req.file.originalname).toLowerCase();
        let htmlContent = '';
        let title = '';

        if (ext === '.docx') {
            const result = await mammoth.convertToHtml({ path: filePath });
            htmlContent = result.value;
            // Attempt to extract title from first line of text
            const textResult = await mammoth.extractRawText({ path: filePath });
            title = textResult.value.split('\n')[0].trim();
        } else if (ext === '.pdf') {
            const dataBuffer = fs.readFileSync(filePath);
            const data = await pdf(dataBuffer);
            // Convert plain text to simple HTML paragraphs
            htmlContent = data.text
                .split('\n\n')
                .map(p => p.trim() ? `<p>${p.trim()}</p>` : '')
                .join('');
            title = data.text.split('\n')[0].trim().slice(0, 100);
        }

        // Clean up temp file
        fs.unlink(filePath, (err) => {
            if (err) console.error('Failed to delete temp doc:', err);
        });

        res.json({
            success: true,
            data: {
                content: htmlContent,
                title: title,
                fileName: req.file.originalname
            }
        });
    } catch (err) {
        console.error('Document extraction error:', err);
        res.status(500).json({ success: false, message: 'Failed to extract document content' });
    }
};

// Create Current Affairs
exports.createCurrentAffairs = async (req, res) => {
    const { title, content, category, publish_date, tags, featured_image, source, importance } = req.body;
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    try {
        const query = `
            INSERT INTO current_affairs (title, slug, content, category, publish_date, tags, featured_image, source, importance)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;
        `;
        const values = [title, slug, content, category, publish_date, tags, featured_image, source || '', importance || 'normal'];
        const result = await pool.query(query, values);
        res.status(201).json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error(err);
        if (err.message && err.message.includes('column')) {
            try {
                const query = `
                    INSERT INTO current_affairs (title, slug, content, category, publish_date, tags, featured_image)
                    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
                `;
                const values = [title, slug, content, category, publish_date, tags, featured_image];
                const result = await pool.query(query, values);
                return res.status(201).json({ success: true, data: result.rows[0] });
            } catch (fallbackErr) {
                console.error(fallbackErr);
            }
        }
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Get All Current Affairs
exports.getAllCurrentAffairs = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const offset = (page - 1) * limit;
    const { category, date } = req.query;

    try {
        let whereClause = '';
        const params = [];
        let paramCount = 0;

        if (category) {
            paramCount++;
            whereClause += ` WHERE category = $${paramCount}`;
            params.push(category);
        }

        if (date) {
            paramCount++;
            whereClause += whereClause ? ` AND publish_date = $${paramCount}` : ` WHERE publish_date = $${paramCount}`;
            params.push(date);
        }

        paramCount++;
        params.push(limit);
        paramCount++;
        params.push(offset);

        const result = await pool.query(
            `SELECT * FROM current_affairs${whereClause} ORDER BY publish_date DESC, created_at DESC LIMIT $${paramCount - 1} OFFSET $${paramCount}`,
            params
        );

        const countParams = params.slice(0, params.length - 2);
        const countResult = await pool.query(
            `SELECT COUNT(*) FROM current_affairs${whereClause}`,
            countParams
        );
        
        res.json({
            success: true,
            data: result.rows,
            pagination: {
                total: parseInt(countResult.rows[0].count),
                page,
                limit
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Get Single Current Affair by slug
exports.getBySlug = async (req, res) => {
    const { slug } = req.params;
    try {
        const result = await pool.query('SELECT * FROM current_affairs WHERE slug = $1', [slug]);
        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Not found' });
        }
        res.json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Update Current Affairs
exports.updateCurrentAffairs = async (req, res) => {
    const { id } = req.params;
    const { title, content, category, publish_date, tags, featured_image, source, importance } = req.body;
    const slug = title ? title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') : undefined;

    try {
        let query = 'UPDATE current_affairs SET ';
        const values = [];
        let count = 1;

        if (title) { query += `title = $${count}, slug = $${count+1}, `; values.push(title, slug); count += 2; }
        if (content) { query += `content = $${count}, `; values.push(content); count++; }
        if (category) { query += `category = $${count}, `; values.push(category); count++; }
        if (publish_date) { query += `publish_date = $${count}, `; values.push(publish_date); count++; }
        if (tags !== undefined) { query += `tags = $${count}, `; values.push(tags); count++; }
        if (featured_image !== undefined) { query += `featured_image = $${count}, `; values.push(featured_image); count++; }
        if (source !== undefined) { query += `source = $${count}, `; values.push(source); count++; }
        if (importance !== undefined) { query += `importance = $${count}, `; values.push(importance); count++; }

        query += `updated_at = CURRENT_TIMESTAMP `;
        query += `WHERE id = $${count} RETURNING *`;
        values.push(id);

        const result = await pool.query(query, values);
        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Not found' });
        }
        res.json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Delete Current Affairs
exports.deleteCurrentAffairs = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM current_affairs WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Not found' });
        }
        res.json({ success: true, message: 'Deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};
