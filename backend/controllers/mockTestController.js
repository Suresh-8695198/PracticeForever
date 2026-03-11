const pool = require('../config/db');

// Create Mock Test
exports.createMockTest = async (req, res) => {
    const { title, exam_type, duration, total_questions, question_ids } = req.body;
    
    const client = await pool.pool.connect();
    try {
        await client.query('BEGIN');
        
        // 1. Insert into mock_tests
        const testQuery = `
            INSERT INTO mock_tests (title, exam_type, duration, total_questions, status)
            VALUES ($1, $2, $3, $4, 'published') RETURNING id;
        `;
        const testResult = await client.query(testQuery, [title, exam_type, duration, total_questions]);
        const testId = testResult.rows[0].id;

        // 2. Insert questions links into mock_test_questions
        if (question_ids && question_ids.length > 0) {
            for (let i = 0; i < question_ids.length; i++) {
                await client.query(
                    'INSERT INTO mock_test_questions (test_id, question_id, question_order) VALUES ($1, $2, $3)',
                    [testId, question_ids[i], i + 1]
                );
            }
        }

        await client.query('COMMIT');
        res.status(201).json({ success: true, test_id: testId });
    } catch (err) {
        await client.query('ROLLBACK');
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    } finally {
        client.release();
    }
};

// Get All Mock Tests
exports.getAllMockTests = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM mock_tests ORDER BY created_at DESC');
        res.json({ success: true, data: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Get Single Mock Test with its questions
exports.getMockTestDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const testResult = await pool.query('SELECT * FROM mock_tests WHERE id = $1', [id]);
        if (testResult.rows.length === 0) return res.status(404).json({ success: false, message: 'Test not found' });

        const questionsResult = await pool.query(`
            SELECT q.* 
            FROM questions q
            JOIN mock_test_questions mtq ON q.id = mtq.question_id
            WHERE mtq.test_id = $1
            ORDER BY mtq.question_order ASC
        `, [id]);

        res.json({
            success: true,
            test: testResult.rows[0],
            questions: questionsResult.rows
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Delete Mock Test
exports.deleteMockTest = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM mock_tests WHERE id = $1', [id]);
        res.json({ success: true, message: 'Test deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};
