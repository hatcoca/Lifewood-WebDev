const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send an email
 * @param {Object} options - { to, subject, html, attachments }
 */
const sendEmail = async ({ to, subject, html, attachments = [] }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Lifewood Data Technology" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
      attachments,
    });
    console.log("Email sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

/**
 * Generate standard HTML Email Template
 */
const getEmailTemplate = (title, content) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 0;">
  <div style="width: 100%; padding: 60px 0; background-color: #f8fafc; display: flex; justify-content: center;">
    <div style="max-width: 600px; width: 100%; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.06); border: 1px solid #f1f5f9;">
      
      <!-- Premium Header -->
      <div style="background-color: #ffffff; padding: 40px; text-align: center; border-top: 6px solid #193226; border-bottom: 4px solid #fca13f; border-top-left-radius: 16px; border-top-right-radius: 16px;">
        <img src="cid:lifewoodlogo" alt="Lifewood Logo" style="height: 48px; width: auto; display: block; margin: 0 auto; object-fit: contain;" />
      </div>
      
      <!-- Body -->
      <div style="padding: 48px 40px; color: #334155; line-height: 1.7; font-size: 15px;">
        <h2 style="font-size: 22px; font-weight: 800; color: #193226; margin-top: 0; margin-bottom: 28px;">${title}</h2>
        ${content}
      </div>
      
      <!-- Footer: Matching Brand Look -->
      <div style="background-color: #f8fafc; padding: 32px 40px; text-align: center; color: #64748b; font-size: 13px; border-top: 1px solid #f1f5f9;">
        &copy; ${new Date().getFullYear()} <strong style="color: #193226;">Lifewood</strong>. All rights reserved.<br>
        <span style="font-size: 11px; color: #94a3b8; margin-top: 12px; display: block; letter-spacing: 0.5px;">THIS IS AN AUTOMATED MESSAGE, PLEASE DO NOT REPLY.</span>
      </div>

    </div>
  </div>
</body>
</html>
`;

/**
 * Send confirmation email to user/applicant
 */
const sendConfirmationEmail = async (email, name, type) => {
  const subject = type === 'contact'
    ? "We've received your message - Lifewood"
    : "Application Received - Lifewood Careers";

  const title = type === 'contact' ? "Thanks for reaching out!" : "Application Received";

  const content = type === 'contact'
    ? `<p>Hi ${name},</p><p>Thank you for contacting Lifewood. We have successfully received your message and our team will get back to you shortly.</p>`
    : `<p>Hi ${name},</p><p>Thank you for applying to Lifewood! We've received your application and resume successfully.</p><p>Our talent acquisition team will review your profile to see if it's a match for the position you applied for. If we see a potential fit, we will reach out to schedule an interview.</p><p>Best regards,<br/>The Lifewood Team</p>`;

  return sendEmail({
    to: email,
    subject,
    html: getEmailTemplate(title, content),
    attachments: [
      {
        filename: 'logo.png',
        path: require('path').join(__dirname, '../assets/logo.png'),
        cid: 'lifewoodlogo' // same cid value as in the html img src
      }
    ]
  });
};

/**
 * Notify admin of new submission
 */
const notifyAdmin = async (data, type) => {
  const subject = type === 'contact'
    ? `New Contact Form: ${data.subject}`
    : `New Application: ${data.position}`;

  const title = type === 'contact' ? "New Visitor Message" : "New Career Application";

  const rows = Object.entries(data).map(([key, value]) => {
    let displayValue = value || "<i>Not provided</i>";

    // Format the resumeURL to look like a clean download link instead of raw text
    if (key === 'resumeURL' && value) {
      // Assuming your site is hosted at localhost:3000 during dev, or a real domain in production
      // We'll use the backend's URL to access the file directly
      const fileUrl = `http://localhost:5000${value}`;
      displayValue = `<a href="${fileUrl}" style="color: #0ea5e9; text-decoration: none; font-weight: 600;">📁 View File</a>`;
    }

    return `
    <tr>
      <td style="padding: 16px; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #193226; width: 35%; font-size: 13px; background-color: rgba(25, 50, 38, 0.03); letter-spacing: 0.5px;">${key.toUpperCase()}</td>
      <td style="padding: 16px; border-bottom: 1px solid #f1f5f9; color: #475569; word-break: break-word; font-weight: 500;">${displayValue}</td>
    </tr>
  `;
  }).join('');

  const content = `
        <p style="margin-bottom: 24px; color: #64748b; font-size: 15px;">A new submission has been received from the website. Here are the details:</p>
          <div style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); margin-top: 20px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left; background-color: #ffffff;">
              ${rows}
            </table>
          </div>
      `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject,
    html: getEmailTemplate(title, content),
    attachments: [
      {
        filename: 'logo.png',
        path: require('path').join(__dirname, '../assets/logo.png'),
        cid: 'lifewoodlogo' // same cid value as in the html img src
      }
    ]
  });
};

module.exports = { sendEmail, sendConfirmationEmail, notifyAdmin, getEmailTemplate };
