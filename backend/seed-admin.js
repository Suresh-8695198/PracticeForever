require('dotenv').config();
const pool = require('./config/db');
const bcrypt = require('bcryptjs');

async function seedAdmin() {
    try {
        console.log('--- Initializing Admin Credentials ---');
        
        // 1. Create Roles if they don't exist
        await pool.query('INSERT INTO roles (id, name) VALUES (1, $1), (2, $2) ON CONFLICT (id) DO NOTHING', ['Super Admin', 'Editor']);
        
        // 2. Setup your details
        const name = "Suresh Admin";
        const email = "admin@careerplatform.com";
        const password = "adminpassword123"; // CHANGE THIS LATER!
        
        // 3. Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 4. Insert Admin
        const query = `
            INSERT INTO admins (name, email, password_hash, role_id)
            VALUES ($1, $2, $3, 1)
            ON CONFLICT (email) DO UPDATE SET password_hash = $3;
        `;
        
        await pool.query(query, [name, email, hashedPassword]);

        console.log('✅ SUCCESS: Admin User Registered');
        console.log(`📧 Email: ${email}`);
        console.log(`🔑 Password: ${password}`);
        process.exit(0);
    } catch (err) {
        console.error('❌ ERROR seeding admin:', err);
        process.exit(1);
    }
}

seedAdmin();
