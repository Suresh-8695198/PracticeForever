const pool = require('../config/db');

// --- PROGRAMMING TUTORIALS ---
exports.createTutorial = async (req, res) => {
    const { title, content, category_id, tags, publish_date } = req.body;
    const author_id = req.user.id;
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + '-' + Date.now().toString().slice(-4);

    try {
        const query = `
            INSERT INTO tutorials (title, slug, content, category_id, author_id, tags, publish_date)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
        `;
        const result = await pool.query(query, [title, slug, content, category_id, author_id, tags, publish_date]);
        res.status(201).json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

exports.getAllTutorials = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT t.*, c.name as category_name, a.name as author_name 
            FROM tutorials t
            LEFT JOIN categories c ON t.category_id = c.id
            LEFT JOIN admins a ON t.author_id = a.id
            ORDER BY t.created_at DESC
        `);
        res.json({ success: true, data: result.rows });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// --- USER MANAGEMENT ---
exports.getAllUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT id, name, email, status, created_at FROM users ORDER BY created_at DESC');
        res.json({ success: true, data: result.rows });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

exports.toggleUserStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body; // 'active' or 'blocked'
    try {
        await pool.query('UPDATE users SET status = $1 WHERE id = $2', [status, id]);
        res.json({ success: true, message: `User status updated to ${status}` });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// --- MEDIA MANAGEMENT ---
exports.uploadMedia = (req, res) => {
    if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });
    
    // In a real app, save to media_files table here
    res.json({ 
        success: true, 
        file: {
            name: req.file.filename,
            path: `/uploads/images/${req.file.filename}`,
            type: req.file.mimetype
        }
    });
};
