import fs from 'fs';
import path from 'path';
import { generateCurrentAffairs } from '../../../utils/gemini';

const DATA_FILE = path.join(process.cwd(), 'data', 'ai-generated-articles.json');

function readGeneratedArticles() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
        }
    } catch (e) {
        console.error('Error reading AI articles:', e);
    }
    return [];
}

function saveGeneratedArticles(articles) {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(articles, null, 2), 'utf-8');
}

/**
 * CRON Endpoint — Call this at 6:00 AM IST daily
 * 
 * Usage with Vercel Cron:
 *   In vercel.json, add:
 *   { "crons": [{ "path": "/api/cron/generate-daily-ca", "schedule": "30 0 * * *" }] }
 *   (0:30 UTC = 6:00 AM IST)
 * 
 * Usage with external cron (cron-job.org, GitHub Actions, etc.):
 *   GET https://your-domain.com/api/cron/generate-daily-ca?secret=YOUR_CRON_SECRET
 */
export default async function handler(req, res) {
    try {
        // Optional: Verify cron secret for security
        const { secret } = req.query;
        if (process.env.CRON_SECRET && secret !== process.env.CRON_SECRET) {
            // Also check Vercel's cron header
            const authHeader = req.headers['authorization'];
            if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
                return res.status(401).json({ success: false, error: 'Unauthorized' });
            }
        }

        // Calculate today's date in IST
        const now = new Date();
        const istOffset = 5.5 * 60 * 60 * 1000;
        const istTime = new Date(now.getTime() + istOffset);
        const todayIST = istTime.toISOString().substring(0, 10);

        console.log(`[CRON] Daily CA generation triggered for ${todayIST}`);

        // Check if already generated today
        const existingArticles = readGeneratedArticles();
        const alreadyExists = existingArticles.find(a => a.publish_date === todayIST);

        if (alreadyExists) {
            console.log(`[CRON] Article for ${todayIST} already exists, skipping.`);
            return res.status(200).json({
                success: true,
                message: `Article for ${todayIST} already exists`,
                cached: true
            });
        }

        // Generate via Gemini
        const article = await generateCurrentAffairs(todayIST);

        // Save
        existingArticles.unshift(article);
        const trimmed = existingArticles.slice(0, 90);
        saveGeneratedArticles(trimmed);

        console.log(`[CRON] Successfully generated CA for ${todayIST}`);

        return res.status(200).json({
            success: true,
            message: `Generated current affairs for ${todayIST}`,
            date: todayIST,
            cached: false
        });
    } catch (error) {
        console.error('[CRON] Error:', error);
        return res.status(500).json({
            success: false,
            error: error.message || 'Cron generation failed'
        });
    }
}
