const express = require('express');
const router = express.Router();
const currentAffairsController = require('../controllers/currentAffairsController');
const { verifyToken } = require('../middleware/authMiddleware');
const { upload, uploadDoc } = require('../middleware/upload');

// Public route to get current affairs
router.get('/', currentAffairsController.getAllCurrentAffairs);

// Public route to get single current affair by slug
router.get('/slug/:slug', currentAffairsController.getBySlug);

// Admin routes (Protected)
router.post('/', verifyToken, currentAffairsController.createCurrentAffairs);
router.put('/:id', verifyToken, currentAffairsController.updateCurrentAffairs);
router.delete('/:id', verifyToken, currentAffairsController.deleteCurrentAffairs);

// Image upload route (Protected)
router.post('/upload-image', verifyToken, upload.single('image'), currentAffairsController.uploadImage);

// Document content extraction route (Protected)
router.post('/extract-document', verifyToken, uploadDoc.single('document'), currentAffairsController.extractDocument);

module.exports = router;
