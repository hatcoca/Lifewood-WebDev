const express = require('express');
const router = express.Router();
const { sendEmail, getEmailTemplate } = require('../services/emailService');

/**
 * Send custom email from admin to user/applicant
 */
router.post('/send-email', async (req, res) => {
    try {
        const { to, subject, message } = req.body;

        if (!to || !subject || !message) {
            return res.status(400).json({ error: "Required fields missing" });
        }

        const formattedMessage = `<p>${message.replace(/\n/g, '<br/>')}</p><br><p>Best regards,<br/><b>The Lifewood Team</b></p>`;

        await sendEmail({
            to,
            subject,
            html: getEmailTemplate(subject, formattedMessage),
            attachments: [
                {
                    filename: 'logo.png',
                    path: require('path').join(__dirname, '../assets/logo.png'),
                    cid: 'lifewoodlogo'
                }
            ]
        });

        res.json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending admin email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

module.exports = router;
