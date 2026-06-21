import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';
import nodemailer from 'nodemailer';

// This API route acts as a cron job to generate new content automatically
// You can set this up with Vercel Cron or a similar service.
// Endpoint: POST /api/auto-update-content

export default async function handler(req, res) {
  // Simple security check (replace with a real cron secret in production)
  const authHeader = req.headers.authorization;
  const isDev = process.env.NODE_ENV === 'development';
  if (!isDev && process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      return res.status(500).json({ message: 'GEMINI_API_KEY is not configured.' });
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    // Determine what to generate (we can analyze leads to pick popular topics, or just pick random)
    // For this example, we generate a high-value "Question of the Day" with deep explanations
    
    const prompt = `Generate a highly engaging, difficult "Question of the Day" for Quantitative Aptitude.
Provide the response as a raw JSON object (NO markdown backticks).
Format:
{
  "id": "[generate a unique timestamp-based ID string]",
  "date": "[Today's date in YYYY-MM-DD]",
  "topic": "Quantitative Aptitude",
  "text": "[The question text]",
  "options": [
    { "id": "A", "text": "Option 1" },
    { "id": "B", "text": "Option 2" },
    { "id": "C", "text": "Option 3" },
    { "id": "D", "text": "Option 4" }
  ],
  "answer": "[A, B, C, or D]",
  "explanation": "[A detailed, step-by-step markdown explanation teaching how to solve it.]"
}`;

    const modelsToTry = [
      'gemini-3.5-flash',
      'gemini-3.1-flash-lite',
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-2.0-flash-lite',
      'gemini-flash-latest'
    ];
    let result = null;
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
        console.log(`Attempting content generation with model: ${modelName}`);
        const model = genAI.getGenerativeModel({ 
          model: modelName,
          generationConfig: { responseMimeType: 'application/json' }
        });
        result = await model.generateContent(prompt);
        console.log(`Successfully generated content using model: ${modelName}`);
        break;
      } catch (err) {
        console.warn(`[Gemini] Model ${modelName} failed:`, err.message);
        lastError = err;
      }
    }

    if (!result) {
      throw new Error(`AI generation failed on all models. Last error: ${lastError ? lastError.message : 'Unknown'}`);
    }
    let text = result.response.text().trim();
    
    // Clean up markdown
    text = text.replace(/^```json/, '').replace(/```$/, '').trim();
    
    const newContent = JSON.parse(text);

    // Save to daily-questions.json
    const dataDir = path.join(process.cwd(), 'data');
    const dataFile = path.join(dataDir, 'daily-questions.json');

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let dailyQuestions = [];
    if (fs.existsSync(dataFile)) {
      const fileContent = fs.readFileSync(dataFile, 'utf8');
      if (fileContent) {
        dailyQuestions = JSON.parse(fileContent);
      }
    }

    // Prepend new question
    dailyQuestions.unshift({
      ...newContent,
      generatedAt: new Date().toISOString()
    });

    fs.writeFileSync(dataFile, JSON.stringify(dailyQuestions, null, 2));

    // Send Email Notification
    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'suresh169073@gmail.com',
          subject: '🚀 PracticeForever: Automated Content Updated!',
          html: `
            <h2>PracticeForever Automated Update</h2>
            <p>The system has successfully generated new content via the Gemini API.</p>
            <h3>New Question of the Day:</h3>
            <p><strong>Topic:</strong> ${newContent.topic}</p>
            <p><strong>Question:</strong> ${newContent.text}</p>
            <p><strong>Correct Answer:</strong> ${newContent.answer}</p>
            <br/>
            <p><em>This is an automated notification from your Vercel deployment.</em></p>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Notification email sent successfully.');
      } catch (emailError) {
        console.error('Failed to send notification email:', emailError);
      }
    } else {
      console.warn('EMAIL_USER or EMAIL_APP_PASSWORD not set. Skipping email notification.');
    }

    return res.status(200).json({ 
      message: 'Successfully generated new content and sent email notification', 
      content: newContent 
    });

  } catch (error) {
    console.error('Content auto-update error:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.toString() });
  }
}
