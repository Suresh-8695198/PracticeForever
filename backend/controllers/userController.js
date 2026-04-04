const User = require('../models/userModel');

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Public (for now)
const getUserProfile = async (req, res) => {
    try {
        // For demonstration, we'll return a static/seeded user or create one if empty
        // In a real app, this would get req.user.id from auth middleware
        
        let user = await User.findOne({ email: 'suresh@example.com' });

        if (!user) {
            // Seed a default user if none exists
            user = await User.create({
                name: 'Suresh G',
                email: 'suresh@example.com',
                title: 'Student',
                progress: {
                    dsa: {
                        total: 998,
                        solved: 67,
                        easy: { solved: 39, total: 306 },
                        medium: { solved: 24, total: 438 },
                        hard: { solved: 4, total: 254 }
                    }
                },
                // Mock submissions for the heatmap
                submissions: Array.from({ length: 20 }).map((_, i) => ({
                    date: new Date(new Date().setDate(new Date().getDate() - i)).toISOString().split('T')[0],
                    count: Math.floor(Math.random() * 5)
                }))
            });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get leaderboard (all users ranked by points)
// @route   GET /api/users/leaderboard
// @access  Public
const getLeaderboard = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'image', 'points', 'level'],
            order: [['points', 'DESC']],
            limit: 50
        });
        
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getUserProfile, getLeaderboard };
