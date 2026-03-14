const { Pool } = require('pg');
const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config();

// PostgreSQL Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
});

pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database.');
});

// Sequelize Instance (using SQLite as fallback or primary for these models)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database.sqlite'),
    logging: false
});

// If Postgres is preferred for Sequelize:
/*
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
});
*/

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool,
    sequelize,
    Sequelize
};

// Export sequelize instance directly as default for models that use require('../config/db')
module.exports = sequelize;
module.exports.pool = pool;
module.exports.query = (text, params) => pool.query(text, params);
module.exports.Sequelize = Sequelize;
