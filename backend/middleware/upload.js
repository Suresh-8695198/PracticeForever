const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure upload directories exist
const currentAffairsDir = path.join(__dirname, '..', 'uploads', 'current-affairs');
const tempDocsDir = path.join(__dirname, '..', 'uploads', 'temp-docs');

[currentAffairsDir, tempDocsDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Storage config for images
const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, currentAffairsDir);
    },
    filename: (req, file, cb) => {
        const date = new Date().toISOString().slice(0, 10);
        const ext = path.extname(file.originalname).toLowerCase();
        const baseName = path.basename(file.originalname, ext)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
            .slice(0, 40);
        const unique = Date.now().toString(36);
        const finalName = `ca-${date}-${baseName}-${unique}${ext}`;
        cb(null, finalName);
    }
});

// Storage config for documents
const docStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tempDocsDir);
    },
    filename: (req, file, cb) => {
        const unique = Date.now().toString(36);
        cb(null, `extract-${unique}-${file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_')}`);
    }
});

// File filter for images
const imageFilter = (req, file, cb) => {
    const allowed = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed'), false);
    }
};

// File filter for docs
const docFilter = (req, file, cb) => {
    const allowed = ['.docx', '.pdf'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error('Only Word (.docx) and PDF files are allowed'), false);
    }
};

const upload = multer({
    storage: imageStorage,
    fileFilter: imageFilter,
    limits: { fileSize: 10 * 1024 * 1024 }
});

const uploadDoc = multer({
    storage: docStorage,
    fileFilter: docFilter,
    limits: { fileSize: 20 * 1024 * 1024 } // 20MB max for docs
});

module.exports = { upload, uploadDoc };
