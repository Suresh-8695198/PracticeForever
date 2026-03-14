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
    questionId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    topic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    attempts: {
        type: DataTypes.TEXT, // JSON array of selected options
        get() {
            const val = this.getDataValue('attempts');
            return val ? JSON.parse(val) : [];
        },
        set(val) {
            this.setDataValue('attempts', JSON.stringify(val));
        }
    },
    isSolved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Progress;
