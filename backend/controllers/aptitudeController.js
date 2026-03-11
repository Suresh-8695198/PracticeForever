const pool = require('../config/db');

// Create Aptitude Question
exports.createQuestion = async (req, res) => {
    const { question, option_a, option_b, option_c, option_d, correct_answer, explanation, difficulty, category_id } = req.body;
    
    try {
        const query = `
            INSERT INTO questions (question, option_a, option_b, option_c, option_d, correct_answer, explanation, difficulty, category_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;
        `;
        const values = [question, option_a, option_b, option_c, option_d, correct_answer, explanation, difficulty, category_id];
        const result = await pool.query(query, values);
        res.status(201).json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Get Questions (Support filtering by category/difficulty)
exports.getQuestions = async (req, res) => {
    const { category_id, difficulty, limit = 10, page = 1 } = req.query;
    const offset = (page - 1) * limit;

    try {
        let query = 'SELECT q.*, c.name as category_name FROM questions q LEFT JOIN categories c ON q.category_id = c.id WHERE 1=1';
        const values = [];
        let count = 1;

        if (category_id) {
            query += ` AND q.category_id = $${count}`;
            values.push(category_id);
            count++;
        }
        if (difficulty) {
            query += ` AND q.difficulty = $${count}`;
            values.push(difficulty);
            count++;
        }

        query += ` ORDER BY q.created_at DESC LIMIT $${count} OFFSET $${count + 1}`;
        values.push(limit, offset);

        const result = await pool.query(query, values);
        res.json({ success: true, data: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Update Question
exports.updateQuestion = async (req, res) => {
    const { id } = req.params;
    const fields = req.body;

    try {
        let query = 'UPDATE questions SET ';
        const values = [];
        let count = 1;

        for (const [key, value] of Object.entries(fields)) {
            if (['question', 'option_a', 'option_b', 'option_c', 'option_d', 'correct_answer', 'explanation', 'difficulty', 'category_id'].includes(key)) {
                query += `${key} = $${count}, `;
                values.push(value);
                count++;
            }
        }

        query = query.slice(0, -2);
        query += ` WHERE id = $${count} RETURNING *`;
        values.push(id);

        const result = await pool.query(query, values);
        if (result.rows.length === 0) return res.status(404).json({ success: false, message: 'Question not found' });
        res.json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Delete Question
exports.deleteQuestion = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM questions WHERE id = $1', [id]);
        res.json({ success: true, message: 'Question deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};
