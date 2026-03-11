const express = require('express');
const router = express.Router();
const managementController = require('../controllers/managementController');
const { verifyToken, requireSuperAdmin } = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/images/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Tutorials
router.get('/tutorials', managementController.getAllTutorials);
router.post('/tutorials', verifyToken, managementController.createTutorial);

// Users (Super Admin Only)
router.get('/users', verifyToken, requireSuperAdmin, managementController.getAllUsers);
router.put('/users/:id/status', verifyToken, requireSuperAdmin, managementController.toggleUserStatus);

// Media
router.post('/media/upload', verifyToken, upload.single('file'), managementController.uploadMedia);

module.exports = router;
