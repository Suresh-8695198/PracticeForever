// Gemini AI Utility for generating Daily Current Affairs
const { GoogleGenerativeAI } = require('@google/generative-ai');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

let genAI = null;

function getGenAI() {
    if (!genAI && GEMINI_API_KEY) {
        genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    }
    return genAI;
}

/**
 * Generate daily current affairs content using Gemini AI
 * @param {string} dateStr - Date in YYYY-MM-DD format
 * @returns {Object} Article object matching the existing data format
 */
async function generateCurrentAffairs(dateStr) {
    const ai = getGenAI();
    if (!ai) throw new Error('Gemini API key not configured');

    // Try models in order of preference (fallback if quota exceeded)
    const modelsToTry = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-1.5-flash-8b'];
    let lastError = null;

    for (const modelName of modelsToTry) {
        try {
            const model = ai.getGenerativeModel({ model: modelName });

    const dateObj = new Date(dateStr + 'T00:00:00');
    const displayDate = dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    const dayNum = dateObj.getDate();
    const monthName = dateObj.toLocaleDateString('en-US', { month: 'long' });
    const year = dateObj.getFullYear();

    const prompt = `You are a high-level current affairs analyst for elite competitive exam preparation (UPSC, SSC, Banking, TNPSC). Generate a deep-dive Daily Current Affairs article for ${displayDate}.

CRITICAL: Do NOT generate generic or repetitive news. Focus on REAL, specific events happening around ${displayDate}. If no specific news is found for a category, use the most recent significant development with a "Follow-up" perspective.

Structure the response as EXACTLY 5 high-value news sections:
1. National / Polity: Focus on Legislative changes, SC judgements, or major policy shifts.
2. International: Focus on Geopolitics, Summits, or Bilateral agreements (avoid generic "Conflict" unless specific).
3. Economy: Focus on RBI policies, GDP data, specific SEBI/FinMin announcements.
4. Science & Tech: Focus on specific ISRO/NASA missions, AI breakthroughs, or new species discoveries.
5. Environment/State: Focus on Climate reports or specific Tamil Nadu state schemes/appointments.

For EACH section, follow this EXACT HTML format:

<div class="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-8 border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-12 mb-12">
    <div class="space-y-6">
        <strong class="section-title">[NUMBER]. [SPECIFIC & UNIQUE TITLE]</strong>
        <strong class="sub-title">Context & Significance</strong>
        <p>[Provide a deep 2-3 sentence context on why this matters for the nation/world]</p>
        <strong class="sub-title">Key Analytical Points</strong>
        <ul>
            <li>[Detailed point 1 with <strong>specific data/names</strong>]</li>
            <li>[Detailed point 2 explaining <strong>structural impact</strong>]</li>
            <li>[Detailed point 3 with <strong>comparative analysis</strong> or history]</li>
        </ul>
        <div class="editorial-box [COLOR]">
            <strong>Exam Insight (Prelims + Mains)</strong>
            <p>[A deep 2-3 sentence analysis on how this can be asked in exams, focusing on conceptual depth.]</p>
        </div>
    </div>
</div>

Use color classes: rose, emerald, blue, green, amber.

After all 5 sections, add:

<h4>Quick Revision Points</h4>
<ul>
    <li>[10 crisp one-line points. Ensure they are NOT repetitive from previous days.]</li>
</ul>

<h4>Practice MCQ Quiz</h4>
<p><strong>Q1. [Tough conceptual question about Section 1]</strong></p>
<ul>
    <li>A. [Option 1]</li>
    <li>B. [Option 2]</li>
    <li>C. [Option 3]</li>
    <li>D. [Option 4]</li>
</ul>
<p>Correct Answer: [Letter (A/B/C/D)] - [Brief reason]</p>

<p><strong>Q2. [Data-driven question about Section 3]</strong></p>
<ul>
    <li>A. [Option 1]</li>
    <li>B. [Option 2]</li>
    <li>C. [Option 3]</li>
    <li>D. [Option 4]</li>
</ul>
<p>Correct Answer: [Letter (A/B/C/D)] - [Brief reason]</p>

<p><strong>Q3. [Geographic/Map-based question about Section 2]</strong></p>
<ul>
    <li>A. [Option 1]</li>
    <li>B. [Option 2]</li>
    <li>C. [Option 3]</li>
    <li>D. [Option 4]</li>
</ul>
<p>Correct Answer: [Letter (A/B/C/D)] - [Brief reason]</p>

CRITICAL RULES:
- Output ONLY the HTML content inside a <div class="news-feed-content">
- Use REAL names of officials, specific bill numbers, and exact percentage figures.
- Bold important keywords with <strong>.
- Ensure the tone is academic and authoritative (Vision IAS/Drishti IAS style).
- AVOID generic phrases like "Oil prices fluctuate" or "Global market uncertainty" without specific reasoning.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let content = response.text();

    // Clean up any markdown artifacts
    content = content.replace(/```html\n?/g, '').replace(/```\n?/g, '').trim();

    // Ensure it's wrapped properly
    if (!content.startsWith('<div class="news-feed-content">')) {
        content = `<div class="news-feed-content">\n${content}\n</div>`;
    }

    // Generate a unique numeric ID from date
    const id = parseInt(`${dayNum}${String(dateObj.getMonth() + 1).padStart(2, '0')}${year}`);

    return {
        id,
        title: `Daily Current Affairs – ${dayNum} ${monthName} ${year}`,
        publish_date: dateStr,
        category: 'daily',
        content,
        generated_by: 'gemini-ai',
        generated_at: new Date().toISOString()
    };

        } catch (err) {
            console.warn(`[Gemini] Model ${modelName} failed:`, err.message?.substring(0, 100));
            lastError = err;
            // If it's a quota error, try the next model
            if (err.message?.includes('429') || err.message?.includes('quota') || err.message?.includes('rate')) {
                continue;
            }
            // For other errors, throw immediately
            throw new Error(`AI generation failed: ${err.message?.substring(0, 150) || 'Unknown error'}`);
        }
    }

    // All models exhausted
    throw new Error('API quota exceeded for all models. Please try again later or check your Gemini API billing.');
}

module.exports = { generateCurrentAffairs };
