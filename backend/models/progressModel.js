const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Progress = sequelize.define('Progress', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    taskId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    difficulty: {
        type: DataTypes.STRING
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isRevision: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    note: {
        type: DataTypes.TEXT
    }
});

module.exports = Progress;
