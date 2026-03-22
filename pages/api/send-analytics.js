import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { selectedDate, duration, timeSpent, actionType, value, userInfo, deviceInfo, resolution, timestamp } = req.body;

    // ── SMTP CONFIGURATION (ZOHO / EXTERNAL) ──
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.zoho.in',
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
            user: process.env.SMTP_USER || 'contact@practiceforever.app',
            pass: process.env.SMTP_PASS || 'your-pass'
        }
    });

    const userEntry = userInfo 
        ? `<tr>
            <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase;">User Info</td>
            <td style="padding: 10px 0; color: #1e293b; font-size: 14px; text-align: right;"><strong>${userInfo.name}</strong><br/><span style="color:#64748b; font-size:12px;">${userInfo.email}</span></td>
           </tr>`
        : `<tr>
            <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase;">User Info</td>
            <td style="padding: 10px 0; color: #64748b; font-size: 14px; text-align: right; font-style: italic;">Anonymous Guest</td>
           </tr>`;

    const mailOptions = {
        from: `"PracticeForever Analytics" <${process.env.SMTP_USER || 'contact@practiceforever.app'}>`,
        to: 'suresh169073@gmail.com',
        subject: `[ANALYTICS] ${actionType} - ${selectedDate}`,
        html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
                <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #f1f5f9;">
                    <h2 style="color: #ef4444; margin-bottom: 5px;">Current Affairs Analytics</h2>
                    <p style="color: #64748b; font-size: 14px; margin-top: 0;">Session Insight Report</p>
                </div>
                
                <div style="padding: 20px 0;">
                    <table style="width: 100%; border-collapse: collapse;">
                        ${userEntry}
                        <tr>
                            <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase;">Article Date</td>
                            <td style="padding: 10px 0; color: #1e293b; font-size: 15px; font-weight: bold; text-align: right;">${selectedDate}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase;">Time Spent</td>
                            <td style="padding: 10px 0; color: #059669; font-size: 15px; font-weight: bold; text-align: right;">${duration}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase;">User Action</td>
                            <td style="padding: 10px 0; color: #1e293b; font-size: 15px; font-weight: bold; text-align: right;">${actionType}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase;">Selection/Value</td>
                            <td style="padding: 10px 0; color: #2563eb; font-size: 15px; font-weight: bold; text-align: right;">${value}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase;">Timestamp</td>
                            <td style="padding: 10px 0; color: #64748b; font-size: 13px; text-align: right;">${timestamp}</td>
                        </tr>
                    </table>
                </div>

                <div style="padding: 15px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6; margin-top: 10px;">
                    <h4 style="margin: 0 0 8px 0; color: #1e293b; font-size: 14px;">Technicals</h4>
                    <p style="margin: 0; color: #64748b; font-size: 12px;"><strong>Device:</strong> ${deviceInfo}</p>
                    <p style="margin: 5px 0 0 0; color: #64748b; font-size: 12px;"><strong>Res:</strong> ${resolution}</p>
                </div>

                <div style="text-align: center; padding-top: 20px; color: #94a3b8; font-size: 11px;">
                    Sent via Career Platform Behavioral Analytics Node.
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        
        console.log("-----------------------------------------");
        console.log("ANALYTICS DISPATCHED VIA ZOHO:", process.env.SMTP_USER);
        console.log("TO:", 'suresh169073@gmail.com');
        console.log("ACTION:", actionType);
        console.log("-----------------------------------------");

        return res.status(200).json({ success: true, message: 'Analytics report sent successfully' });
    } catch (error) {
        console.error('SMTP Delivery Error:', error);
        return res.status(500).json({ success: false, message: 'Failed to deliver analytics', error: error.message });
    }
}
