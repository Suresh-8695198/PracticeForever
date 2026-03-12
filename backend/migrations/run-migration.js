// Run this script to add new columns to the current_affairs table
require('dotenv').config();
const { Client } = require('pg');

async function migrate() {
    const client = new Client({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME || 'career_platform',
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT || 5432,
    });

    try {
        await client.connect();
        console.log('Connected to database. Running migration...');

        // Add source column
        await client.query(`
            DO $$
            BEGIN
                IF NOT EXISTS (
                    SELECT 1 FROM information_schema.columns
                    WHERE table_name = 'current_affairs' AND column_name = 'source'
                ) THEN
                    ALTER TABLE current_affairs ADD COLUMN source VARCHAR(255) DEFAULT '';
                    RAISE NOTICE 'Added source column';
                ELSE
                    RAISE NOTICE 'source column already exists';
                END IF;
            END $$;
        `);

        // Add importance column
        await client.query(`
            DO $$
            BEGIN
                IF NOT EXISTS (
                    SELECT 1 FROM information_schema.columns
                    WHERE table_name = 'current_affairs' AND column_name = 'importance'
                ) THEN
                    ALTER TABLE current_affairs ADD COLUMN importance VARCHAR(20) DEFAULT 'normal';
                    RAISE NOTICE 'Added importance column';
                ELSE
                    RAISE NOTICE 'importance column already exists';
                END IF;
            END $$;
        `);

        console.log('✅ Migration complete!');
        await client.end();
        process.exit(0);
    } catch (err) {
        console.error('❌ Migration error:', err.message);
        process.exit(1);
    }
}

migrate();
