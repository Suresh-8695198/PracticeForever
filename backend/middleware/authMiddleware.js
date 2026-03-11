const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (!bearerHeader) {
        return res.status(403).json({ success: false, message: 'A token is required for authentication' });
    }

    try {
        const token = bearerHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_key_for_dev_only');
        req.user = decoded;
    } catch (err) {
        return res.status(401).json({ success: false, message: 'Invalid Token' });
    }
    return next();
};

const requireSuperAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'Super Admin') {
        return next();
    }
    return res.status(403).json({ success: false, message: 'Super Admin privileges required.' });
};

module.exports = {
    verifyToken,
    requireSuperAdmin
};
