const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const currentAffairsRoutes = require('./routes/currentAffairsRoutes');
const blogRoutes = require('./routes/blogRoutes');
const aptitudeRoutes = require('./routes/aptitudeRoutes');
const mockTestRoutes = require('./routes/mockTestRoutes');
const userRoutes = require('./routes/userRoutes');
const progressRoutes = require('./routes/progressRoutes');
const managementRoutes = require('./routes/managementRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/admin', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/current-affairs', currentAffairsRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/questions', aptitudeRoutes);
app.use('/api/mock-tests', mockTestRoutes);
app.use('/api/manage', managementRoutes);

// Basic health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Backend is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
