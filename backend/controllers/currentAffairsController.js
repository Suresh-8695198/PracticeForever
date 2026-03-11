const pool = require('../config/db');

// Create Current Affairs
exports.createCurrentAffairs = async (req, res) => {
    const { title, content, category, publish_date, tags, featured_image } = req.body;
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    try {
        const query = `
            INSERT INTO current_affairs (title, slug, content, category, publish_date, tags, featured_image)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
        `;
        const values = [title, slug, content, category, publish_date, tags, featured_image];
        const result = await pool.query(query, values);
        res.status(201).json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Get All Current Affairs (with pagination)
exports.getAllCurrentAffairs = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    try {
        const result = await pool.query('SELECT * FROM current_affairs ORDER BY publish_date DESC LIMIT $1 OFFSET $2', [limit, offset]);
        const countResult = await pool.query('SELECT COUNT(*) FROM current_affairs');
        
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

// Update Current Affairs
exports.updateCurrentAffairs = async (req, res) => {
    const { id } = req.params;
    const { title, content, category, publish_date, tags, featured_image } = req.body;
    const slug = title ? title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') : undefined;

    try {
        // Build dynamic update query
        let query = 'UPDATE current_affairs SET ';
        const values = [];
        let count = 1;

        if (title) { query += `title = $${count}, slug = $${count+1}, `; values.push(title, slug); count += 2; }
        if (content) { query += `content = $${count}, `; values.push(content); count++; }
        if (category) { query += `category = $${count}, `; values.push(category); count++; }
        if (publish_date) { query += `publish_date = $${count}, `; values.push(publish_date); count++; }
        if (tags) { query += `tags = $${count}, `; values.push(tags); count++; }
        if (featured_image) { query += `featured_image = $${count}, `; values.push(featured_image); count++; }

        // Remove trailing comma and space
        query = query.slice(0, -2);
        query += ` WHERE id = $${count} RETURNING *`;
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
