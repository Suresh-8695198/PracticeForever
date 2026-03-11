const express = require('express');
const router = express.Router();
const mockTestController = require('../controllers/mockTestController');
const { verifyToken } = require('../middleware/authMiddleware');

// Get tests
router.get('/', mockTestController.getAllMockTests);
router.get('/:id', mockTestController.getMockTestDetails);

// Admin mutations
router.post('/', verifyToken, mockTestController.createMockTest);
router.delete('/:id', verifyToken, mockTestController.deleteMockTest);

module.exports = router;
