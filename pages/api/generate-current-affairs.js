import fs from 'fs';
import path from 'path';
import { generateCurrentAffairs } from '../../utils/gemini';

const DATA_FILE = path.join(process.cwd(), 'data', 'ai-generated-articles.json');

// Helper to read existing AI-generated articles
function readGeneratedArticles() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const raw = fs.readFileSync(DATA_FILE, 'utf-8');
            return JSON.parse(raw);
        }
    } catch (e) {
        console.error('Error reading AI articles file:', e);
    }
    return [];
}

// Helper to save AI-generated articles
function saveGeneratedArticles(articles) {
    try {
        const dir = path.dirname(DATA_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(DATA_FILE, JSON.stringify(articles, null, 2), 'utf-8');
    } catch (e) {
        console.error('Error saving AI articles:', e);
        throw e;
    }
}

export default async function handler(req, res) {
    // Allow GET for fetching, POST for generating
    if (req.method === 'GET') {
        try {
            const articles = readGeneratedArticles();
            return res.status(200).json({ success: true, articles });
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
    }

    if (req.method === 'POST') {
        try {
            const { date, secret } = req.body;

            // Simple secret check for manual triggers (optional protection)
            if (secret && secret !== process.env.CRON_SECRET) {
                return res.status(401).json({ success: false, error: 'Unauthorized' });
            }

            // Determine which date to generate for
            const targetDate = date || getLocalISODate();

            // Check if article already exists for this date
            const existingArticles = readGeneratedArticles();
            const alreadyExists = existingArticles.find(a => a.publish_date === targetDate);
            
            if (alreadyExists) {
                return res.status(200).json({
                    success: true,
                    message: `Article for ${targetDate} already exists`,
                    article: alreadyExists,
                    cached: true
                });
            }

            // Generate new article using Gemini AI
            console.log(`[Gemini] Generating current affairs for ${targetDate}...`);
            const article = await generateCurrentAffairs(targetDate);

            // Save to file
            existingArticles.unshift(article); // Add to front (newest first)
            
            // Keep only last 90 days of generated articles
            const trimmed = existingArticles.slice(0, 90);
            saveGeneratedArticles(trimmed);

            console.log(`[Gemini] Successfully generated article for ${targetDate}`);
            
            return res.status(200).json({
                success: true,
                message: `Generated current affairs for ${targetDate}`,
                article,
                cached: false
            });
        } catch (error) {
            console.error('[Gemini] Generation error:', error);
            return res.status(500).json({
                success: false,
                error: error.message || 'Failed to generate current affairs'
            });
        }
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
}

function getLocalISODate() {
    // Use IST timezone for India
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(now.getTime() + istOffset);
    return istTime.toISOString().substring(0, 10);
}
