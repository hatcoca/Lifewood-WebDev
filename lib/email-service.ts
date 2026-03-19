import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const LOGO_URL = "https://lifewood-web-dev-nine.vercel.app/logo.png";
const BRAND_COLOR = "#004d40"; // Lifewood Dark Green
const ACCENT_COLOR = "#f5c542"; // Logo Yellow

export function getEmailTemplate(title: string, content: string) {
  return `
    <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9f9f9; padding: 40px 0;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
        <!-- Header -->
        <tr>
          <td style="background-color: ${BRAND_COLOR}; padding: 30px; text-align: center;">
            <img src="${LOGO_URL}" alt="Lifewood Logo" width="180" style="display: block; margin: 0 auto; filter: brightness(1.2);">
          </td>
        </tr>
        
        <!-- Decoration Bar -->
        <tr>
          <td style="height: 4px; background-color: ${ACCENT_COLOR};"></td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding: 40px 30px;">
            <h1 style="color: ${BRAND_COLOR}; font-size: 24px; margin-top: 0; margin-bottom: 20px;">${title}</h1>
            <div style="color: #444; line-height: 1.7; font-size: 16px;">
              ${content}
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color: #f4f4f4; padding: 25px; text-align: center;">
            <p style="margin: 0; color: #777; font-size: 13px;">
              <strong>Lifewood Data Technology</strong><br/>
              The world's leading data solution provider
            </p>
            <div style="margin-top: 15px; border-top: 1px solid #ddd; padding-top: 15px;">
              <p style="margin: 0; color: #999; font-size: 11px;">
                © ${new Date().getFullYear()} Lifewood. All rights reserved.
              </p>
            </div>
          </td>
        </tr>
      </table>
    </div>
  `;
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

  const htmlContent = `
    <p style="font-size: 18px; font-weight: 600; color: #333; margin-bottom: 10px;">Contact Inquiry Details</p>
    <table width="100%" cellpadding="5" cellspacing="0" style="border-collapse: collapse; margin-bottom: 25px; background-color: #fcfcfc; border-radius: 6px; border: 1px solid #eee;">
      <tr><td width="30%" style="color: #777; padding: 10px;"><strong>Name</strong></td><td style="padding: 10px;">${data.name}</td></tr>
      <tr><td style="color: #777; padding: 10px;"><strong>Email</strong></td><td style="padding: 10px;"><a href="mailto:${data.email}" style="color: ${BRAND_COLOR};">${data.email}</a></td></tr>
      ${data.company ? `<tr><td style="color: #777; padding: 10px;"><strong>Company</strong></td><td style="padding: 10px;">${data.company}</td></tr>` : ""}
      <tr><td style="color: #777; padding: 10px;"><strong>Subject</strong></td><td style="padding: 10px;">${data.subject}</td></tr>
    </table>
    
    <div style="background-color: #f7fbf8; border-left: 4px solid ${BRAND_COLOR}; padding: 20px; border-radius: 4px;">
      <p style="margin: 0; color: #555; font-style: italic;">"${data.message}"</p>
    </div>
    
    <div style="margin-top: 30px; text-align: center;">
      <a href="mailto:${data.email}" style="background-color: ${BRAND_COLOR}; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-block;">Reply Directly to ${data.name.split(' ')[0]}</a>
    </div>
  `;

  const mailOptions = {
    // We use display name to show the sender, but authenticated email to avoid spam filters
    from: `"${data.name} via Lifewood Web" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    replyTo: data.email, // This makes "Reply" work in Gmail automatically
    subject: `Inbox: ${data.subject} - ${data.name}`,
    html: getEmailTemplate("New Inquiry from Website", htmlContent),
  };

  await transporter.sendMail(mailOptions);
}

export async function sendApplicationNotification(data: {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter?: string;
  resumeUrl?: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

  const htmlContent = `
    <p style="font-size: 18px; font-weight: 600; color: #333; margin-bottom: 10px;">Job Application Details</p>
    <table width="100%" cellpadding="5" cellspacing="0" style="border-collapse: collapse; margin-bottom: 25px; background-color: #fcfcfc; border-radius: 6px; border: 1px solid #eee;">
      <tr><td width="30%" style="color: #777; padding: 10px;"><strong>Full Name</strong></td><td style="padding: 10px;">${data.fullName}</td></tr>
      <tr><td style="color: #777; padding: 10px;"><strong>Email</strong></td><td style="padding: 10px;"><a href="mailto:${data.email}" style="color: ${BRAND_COLOR};">${data.email}</a></td></tr>
      <tr><td style="color: #777; padding: 10px;"><strong>Position</strong></td><td style="padding: 10px;">${data.position}</td></tr>
      <tr><td style="color: #777; padding: 10px;"><strong>Experience</strong></td><td style="padding: 10px;">${data.experience}</td></tr>
    </table>
    
    ${data.coverLetter ? `
    <p style="font-weight: 600; margin-bottom: 5px;">Cover Letter:</p>
    <div style="background-color: #f7fbf8; border-left: 4px solid ${BRAND_COLOR}; padding: 20px; border-radius: 4px; margin-bottom: 25px;">
      <p style="margin: 0; color: #555;">${data.coverLetter}</p>
    </div>` : ""}
    
    <div style="margin-top: 30px; text-align: center;">
      ${data.resumeUrl ? `
      <a href="${data.resumeUrl}" style="background-color: ${BRAND_COLOR}; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-block; margin-right: 10px;">Download Resume</a>
      ` : ""}
      <a href="mailto:${data.email}" style="border: 1px solid ${BRAND_COLOR}; color: ${BRAND_COLOR}; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-block;">Reply to Applicant</a>
    </div>
  `;

  const mailOptions = {
    from: `"${data.fullName} (Job Applicant)" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    replyTo: data.email,
    subject: `Application: ${data.position} - ${data.fullName}`,
    html: getEmailTemplate("New Job Application", htmlContent),
  };

  await transporter.sendMail(mailOptions);
}

export async function sendAdminEmail(data: {
  to: string;
  subject: string;
  message: string;
}) {
  const formattedMessage = `
    <p>Dear Valued User,</p>
    <p>${data.message.replace(/\n/g, '<br/>')}</p>
    <p>Best regards,<br/><strong>The Lifewood Team</strong></p>
  `;

  const mailOptions = {
    from: `"Lifewood Support" <${process.env.EMAIL_USER}>`,
    to: data.to,
    subject: data.subject,
    html: getEmailTemplate(data.subject, formattedMessage),
  };
  await transporter.sendMail(mailOptions);
}
