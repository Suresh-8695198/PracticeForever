const express = require('express');
const router = express.Router();
const Progress = require('../models/progressModel');

// Get progress for a user on a specific topic
router.get('/:userId/:topic', async (req, res) => {
    try {
        const { userId, topic } = req.params;
        const progress = await Progress.findAll({
            where: { userId, topic }
        });
        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Save or update progress
router.post('/', async (req, res) => {
    try {
        const { userId, questionId, topic, attempts, isSolved } = req.body;
        
        let progress = await Progress.findOne({
            where: { userId, questionId }
        });

        if (progress) {
            progress.attempts = attempts;
            progress.isSolved = isSolved;
            await progress.save();
        } else {
            progress = await Progress.create({
                userId, questionId, topic, attempts, isSolved
            });
        }

        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Reset progress for a specific topic
router.delete('/:userId/:topic', async (req, res) => {
    try {
        const { userId, topic } = req.params;
        await Progress.destroy({
            where: { userId, topic }
        });
        res.json({ message: 'Progress reset successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Reset ALL progress for a user
router.delete('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        await Progress.destroy({
            where: { userId }
        });
        res.json({ message: 'All progress reset successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
