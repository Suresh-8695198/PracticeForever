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

    // In a real application, you would save this to a database (MongoDB, PostgreSQL, etc.)
    // For this implementation, we will append it to a local JSON file in the data directory.
    const dataDir = path.join(process.cwd(), 'data');
    const leadsFile = path.join(dataDir, 'leads.json');

    // Ensure directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let leads = [];
    if (fs.existsSync(leadsFile)) {
      const fileContent = fs.readFileSync(leadsFile, 'utf8');
      leads = JSON.parse(fileContent);
    }

    // Check if email already exists
    if (leads.find(l => l.email === email)) {
      return res.status(200).json({ message: 'Already subscribed' });
    }

    leads.push({
      email,
      interest,
      source,
      timestamp: new Date().toISOString()
    });

    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Lead capture error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
