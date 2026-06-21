const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');

// Load environment variables from .env.local or .env
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("Please set GEMINI_API_KEY in your .env or .env.local file");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const DATA_DIR = path.join(__dirname, '../data/aptitude');

async function generateTheory(topicName) {
  const prompt = `You are an expert aptitude trainer. Provide a comprehensive "Theory & Concepts" guide for the topic "${topicName}". 
This will be shown to students preparing for competitive exams (like SSC, Banking, Campus Placements).
Provide the response as a valid JSON array of OBJECTS. Do NOT wrap it in backticks, just output raw JSON.

Each object must follow this structure:
{
  "title": "Main Concept or Section Title",
  "description": "Detailed explanation of the concept (can include Markdown)...",
  "formulas": [  // Optional, only if providing formulas
    { "label": "Speed Formula", "value": "S = D / T" }
  ]
}

Ensure the content is deep, high-value, and SEO-friendly.
`;
  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim().replace(/^```json/, '').replace(/```$/, '').trim();
    return JSON.parse(text);
  } catch (error) {
    console.error(`Failed to generate theory for ${topicName}:`, error);
    return [];
  }
}

async function enrichExplanation(questionText, options, answer, oldExplanation) {
  const prompt = `You are an expert aptitude tutor. A student is stuck on the following question:
Question: ${questionText}
Options: ${JSON.stringify(options)}
Correct Answer: ${answer}
Current Explanation: ${oldExplanation}

Please provide a highly detailed, step-by-step explanation that teaches the student HOW to solve this. Use Markdown for formatting. Do NOT wrap the output in JSON or backticks, just return the raw markdown string.`;
  
  try {
    const result = await model.generateContent(prompt);
    return result.response.text().trim();
  } catch (error) {
    console.error("Failed to generate explanation:", error);
    return oldExplanation;
  }
}

// Simple regex parser to extract questions array from JS file
function extractQuestions(content) {
  try {
    const match = content.match(/export const questions = (\[.*\]);/s);
    if (match && match[1]) {
      // Be careful: this relies on the array being valid JSON, which JS objects might not be if they lack quotes around keys.
      // We will use Function constructor to parse it safely.
      const func = new Function(`return ${match[1]}`);
      return func();
    }
  } catch (e) {
    console.error("Regex extraction failed", e);
  }
  return null;
}

async function processFile(filename) {
  console.log(`Processing ${filename}...`);
  const filePath = path.join(DATA_DIR, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const questions = extractQuestions(content);
  if (!questions) {
    console.log(`Skipping ${filename} - could not parse questions array.`);
    return;
  }

  const topicName = filename.replace('.js', '').replace(/-/g, ' ');
  
  console.log(`Generating theory for ${topicName}...`);
  const theory = await generateTheory(topicName);

  // For safety and speed, let's just enrich the first 2 questions as a proof-of-concept
  // In production, you would loop through all of them.
  console.log(`Enriching explanations for ${topicName}...`);
  for (let i = 0; i < Math.min(2, questions.length); i++) {
    const q = questions[i];
    if (q.explanation && q.explanation.length < 100) { // If explanation is thin
      console.log(`Enriching Q${q.id}...`);
      q.explanation = await enrichExplanation(q.text, q.options, q.answer, q.explanation);
      // add a small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // Reconstruct the file content
  const newContent = `export const theory = ${JSON.stringify(theory, null, 2)};\n\nexport const questions = ${JSON.stringify(questions, null, 2)};\n`;
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Successfully updated ${filename}`);
}

async function main() {
  const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.js') && f !== 'index.js');
  
  // We'll process just one file for now to demonstrate
  if (files.length > 0) {
    await processFile(files[0]);
    console.log("\\nDone! You can run this script for all files by modifying the main() loop.");
  }
}

main().catch(console.error);
