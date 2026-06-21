import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { email, interest, source } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    const payload = {
      email,
      interest,
      source,
      timestamp: new Date().toISOString()
    };

    // If a Google Sheets Webhook URL is provided, send the data there
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (webhookError) {
        console.error('Failed to send to Google Sheets webhook:', webhookError);
        // Continue to local save fallback
      }
    }

    // Try to save locally (This will fail on Vercel's read-only filesystem, so we catch it silently)
    try {
      const dataDir = path.join(process.cwd(), 'data');
      const leadsFile = path.join(dataDir, 'leads.json');

      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let leads = [];
      if (fs.existsSync(leadsFile)) {
        const fileContent = fs.readFileSync(leadsFile, 'utf8');
        leads = JSON.parse(fileContent);
      }

      if (!leads.find(l => l.email === email)) {
        leads.push(payload);
        fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
      }
    } catch (fsError) {
      console.warn('Local fs write skipped (expected on serverless env):', fsError.message);
    }

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Lead capture error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
