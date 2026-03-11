const express = require('express');
const router = express.Router();
const currentAffairsController = require('../controllers/currentAffairsController');
const { verifyToken } = require('../middleware/authMiddleware');

// Public route to get current affairs
router.get('/', currentAffairsController.getAllCurrentAffairs);

// Admin routes (Protected)
router.post('/', verifyToken, currentAffairsController.createCurrentAffairs);
router.put('/:id', verifyToken, currentAffairsController.updateCurrentAffairs);
router.delete('/:id', verifyToken, currentAffairsController.deleteCurrentAffairs);

module.exports = router;
