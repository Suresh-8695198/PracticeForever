const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const Progress = require('../models/progressModel');
const { protect } = require('../middleware/authMiddleware');

// Get Profile for Logged In User
router.get('/profile', protect, async (req, res) => {
    try {
        const user = req.user;
        const progress = await Progress.findAll({ where: { userId: user.id } });

        const completedTasks = progress.filter(p => p.isCompleted);
        const easy = completedTasks.filter(p => p.difficulty === 'easy').length;
        const medium = completedTasks.filter(p => p.difficulty === 'medium').length;
        const hard = completedTasks.filter(p => p.difficulty === 'hard').length;
        
        // Group submissions by date
        const submissionsMap = {};
        completedTasks.forEach(p => {
             const date = p.updatedAt.toISOString().split('T')[0];
             submissionsMap[date] = (submissionsMap[date] || 0) + 1;
        });
        const submissions = Object.keys(submissionsMap).map(date => ({
            date,
            count: submissionsMap[date]
        }));

        res.json({
            name: user.name,
            title: user.title,
            progress: {
                dsa: {
                    total: 998,
                    solved: completedTasks.length,
                    easy: { solved: easy, total: 306 },
                    medium: { solved: medium, total: 438 },
                    hard: { solved: hard, total: 254 }
                },
                sheet: 'No sheet progress available'
            },
            submissions,
            skills: user.skills || []
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/users/progress (Sync)
router.get('/progress', protect, async (req, res) => {
    try {
        const allProgress = await Progress.findAll({ where: { userId: req.user.id } });
        
        const completedTasks = allProgress.filter(p => p.isCompleted).map(p => p.taskId);
        const markedForRevision = allProgress.filter(p => p.isRevision).map(p => p.taskId);
        const taskNotes = {};
        allProgress.filter(p => p.note).forEach(p => taskNotes[p.taskId] = p.note);
        
        res.json({ completedTasks, markedForRevision, taskNotes });
    } catch(err) {
        res.status(500).json({error: err.message});
    }
});

// POST /api/users/sync
router.post('/sync', protect, async (req, res) => {
    const { taskId, action, value, difficulty } = req.body;
    
    try {
        let entry = await Progress.findOne({ where: { userId: req.user.id, taskId } });
        
        if (!entry) {
            entry = await Progress.create({ 
                userId: req.user.id, 
                taskId, 
                difficulty 
            });
        }
        
        if (action === 'toggleComplete') {
            entry.isCompleted = !entry.isCompleted;
        } else if (action === 'toggleRevision') {
            entry.isRevision = !entry.isRevision;
        } else if (action === 'updateNote') {
            entry.note = value;
        }
        
        if (difficulty && !entry.difficulty) {
            entry.difficulty = difficulty;
        }
        
        await entry.save();
        res.json({ success: true, entry });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
