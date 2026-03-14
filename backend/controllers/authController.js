const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find admin by email
        const result = await pool.query('SELECT admins.*, roles.name as role_name FROM admins JOIN roles ON admins.role_id = roles.id WHERE email = $1', [email]);
        
        if (result.rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const admin = result.rows[0];

        // Check password
        const isMatch = await bcrypt.compare(password, admin.password_hash);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Create JWT
        const token = jwt.sign(
            { id: admin.id, role: admin.role_name },
            process.env.JWT_SECRET || 'fallback_secret_key_for_dev_only',
            { expiresIn: '12h' }
        );

        res.json({
            success: true,
            token,
            admin: {
                id: admin.id,
                name: admin.name,
                email: admin.email,
                role: admin.role_name
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.googleSync = async (req, res) => {
    const { name, email, image, googleId } = req.body;

    try {
        let user = await User.findOne({ where: { email } });

        if (user) {
            // Update existing user
            user.googleId = googleId;
            user.image = image;
            await user.save();
        } else {
            // Create new user
            user = await User.create({
                name,
                email,
                image,
                googleId,
                title: 'Student'
            });
        }

        res.json({
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error during sync' });
    }
};

exports.logout = (req, res) => {
    // In JWT, logout is usually handled by the client removing the token
    res.json({ success: true, message: 'Logged out successfully' });
};
