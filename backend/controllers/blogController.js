const pool = require('../config/db');

// Create Blog Post
exports.createBlog = async (req, res) => {
    const { title, content, category_id, tags, featured_image, published_date } = req.body;
    const author_id = req.user.id;
    const slug = title.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '') + '-' + Date.now().toString().slice(-4);

    try {
        const query = `
            INSERT INTO blog_posts (title, slug, content, category_id, tags, featured_image, author_id, published_date)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;
        `;
        const values = [title, slug, content, category_id, tags, featured_image, author_id, published_date];
        const result = await pool.query(query, values);
        res.status(201).json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Get All Blogs (Public)
exports.getAllBlogs = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    try {
        const query = `
            SELECT b.*, c.name as category_name, a.name as author_name 
            FROM blog_posts b
            LEFT JOIN categories c ON b.category_id = c.id
            LEFT JOIN admins a ON b.author_id = a.id
            ORDER BY b.published_date DESC LIMIT $1 OFFSET $2
        `;
        const result = await pool.query(query, [limit, offset]);
        const countResult = await pool.query('SELECT COUNT(*) FROM blog_posts');
        
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

// Update Blog Post
exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, content, category_id, tags, featured_image, published_date } = req.body;

    try {
        let query = 'UPDATE blog_posts SET ';
        const values = [];
        let count = 1;

        if (title) { 
            const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            query += `title = $${count}, slug = $${count+1}, `; 
            values.push(title, slug); 
            count += 2; 
        }
        if (content) { query += `content = $${count}, `; values.push(content); count++; }
        if (category_id) { query += `category_id = $${count}, `; values.push(category_id); count++; }
        if (tags) { query += `tags = $${count}, `; values.push(tags); count++; }
        if (featured_image) { query += `featured_image = $${count}, `; values.push(featured_image); count++; }
        if (published_date) { query += `published_date = $${count}, `; values.push(published_date); count++; }

        query = query.slice(0, -2);
        query += ` WHERE id = $${count} RETURNING *`;
        values.push(id);

        const result = await pool.query(query, values);
        if (result.rows.length === 0) return res.status(404).json({ success: false, message: 'Blog post not found' });
        
        res.json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Delete Blog Post
exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM blog_posts WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) return res.status(404).json({ success: false, message: 'Blog post not found' });
        res.json({ success: true, message: 'Blog post deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};
