const express = require('express');
const router = express.Router();
const aptitudeController = require('../controllers/aptitudeController');
const { verifyToken } = require('../middleware/authMiddleware');

// Get questions (Admin/Public Practice)
router.get('/', aptitudeController.getQuestions);

// Admin mutations
router.post('/', verifyToken, aptitudeController.createQuestion);
router.put('/:id', verifyToken, aptitudeController.updateQuestion);
router.delete('/:id', verifyToken, aptitudeController.deleteQuestion);

module.exports = router;
