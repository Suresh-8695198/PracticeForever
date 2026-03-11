require('dotenv').config();
const { Client } = require('pg');
const bcrypt = require('bcryptjs');

async function initializeDatabase() {
    const dbConfig = {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    };

    // 1. Connect to default 'postgres' database to create our target DB
    const masterClient = new Client({ ...dbConfig, database: 'postgres' });
    
    try {
        await masterClient.connect();
        console.log('--- Database Initialization Started ---');
        
        // Check if database exists
        const checkDb = await masterClient.query("SELECT 1 FROM pg_database WHERE datname = 'career_platform'");
        if (checkDb.rows.length === 0) {
            console.log('Creating database: career_platform...');
            await masterClient.query('CREATE DATABASE career_platform');
        } else {
            console.log('Database career_platform already exists.');
        }
        await masterClient.end();

        // 2. Connect to the actual target database
        const client = new Client({ ...dbConfig, database: 'career_platform' });
        await client.connect();
        console.log('Connected to career_platform. Building schema...');

        // 3. Define Schema SQL
        const schemaSql = `
            CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

            CREATE TABLE IF NOT EXISTS roles (
                id SERIAL PRIMARY KEY,
                name VARCHAR(50) UNIQUE NOT NULL
            );

            CREATE TABLE IF NOT EXISTS admins (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                name VARCHAR(100) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                role_id INTEGER REFERENCES roles(id),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS categories (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) UNIQUE NOT NULL,
                slug VARCHAR(100) UNIQUE NOT NULL,
                type VARCHAR(50) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS users (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                name VARCHAR(100) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                status VARCHAR(20) DEFAULT 'active',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS current_affairs (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) UNIQUE NOT NULL,
                content TEXT NOT NULL,
                category VARCHAR(50) NOT NULL,
                publish_date DATE NOT NULL,
                featured_image VARCHAR(255),
                tags VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS questions (
                id SERIAL PRIMARY KEY,
                question TEXT NOT NULL,
                option_a VARCHAR(255) NOT NULL,
                option_b VARCHAR(255) NOT NULL,
                option_c VARCHAR(255) NOT NULL,
                option_d VARCHAR(255) NOT NULL,
                correct_answer VARCHAR(10) NOT NULL,
                explanation TEXT,
                difficulty VARCHAR(20) DEFAULT 'medium',
                category_id INTEGER REFERENCES categories(id),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS tutorials (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) UNIQUE NOT NULL,
                content TEXT NOT NULL,
                category_id INTEGER REFERENCES categories(id),
                author_id UUID REFERENCES admins(id),
                tags VARCHAR(255),
                publish_date TIMESTAMP NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS mock_tests (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                exam_type VARCHAR(100) NOT NULL,
                duration INTEGER NOT NULL,
                total_questions INTEGER NOT NULL,
                status VARCHAR(20) DEFAULT 'draft',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS mock_test_questions (
                id SERIAL PRIMARY KEY,
                test_id INTEGER REFERENCES mock_tests(id) ON DELETE CASCADE,
                question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE,
                question_order INTEGER NOT NULL
            );

            CREATE TABLE IF NOT EXISTS blog_posts (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) UNIQUE NOT NULL,
                content TEXT NOT NULL,
                category_id INTEGER REFERENCES categories(id),
                tags VARCHAR(255),
                featured_image VARCHAR(255),
                author_id UUID REFERENCES admins(id),
                published_date TIMESTAMP NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS media_files (
                id SERIAL PRIMARY KEY,
                file_name VARCHAR(255) NOT NULL,
                file_path VARCHAR(500) NOT NULL,
                file_type VARCHAR(50) NOT NULL,
                uploaded_by UUID REFERENCES admins(id),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

        await client.query(schemaSql);
        console.log('✅ Schema created successfully.');

        // 4. Seed Essential Data
        console.log('Seeding roles and categories...');
        await client.query("INSERT INTO roles (id, name) VALUES (1, 'Super Admin'), (2, 'Editor') ON CONFLICT (id) DO NOTHING");
        await client.query("INSERT INTO categories (name, slug, type) VALUES ('General', 'general', 'aptitude'), ('Technology', 'technology', 'blog') ON CONFLICT DO NOTHING");

        // 5. Seed Admin
        const name = "Suresh Admin";
        const email = "admin@careerplatform.com";
        const password = "adminpassword123";
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await client.query(`
            INSERT INTO admins (name, email, password_hash, role_id)
            VALUES ($1, $2, $3, 1)
            ON CONFLICT (email) DO NOTHING;
        `, [name, email, hashedPassword]);

        console.log('✅ Admin user seeded.');
        console.log(`📧 Login Email: ${email}`);
        console.log(`🔑 Login Password: ${password}`);

        await client.end();
        console.log('\n🚀 ALL DONE! You can now start the server.');
        process.exit(0);

    } catch (err) {
        console.error('❌ FATAL ERROR during init:', err);
        process.exit(1);
    }
}

initializeDatabase();
