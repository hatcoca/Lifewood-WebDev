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

export async function sendApplicationNotification(data: {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter?: string;
  resumeUrl?: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: adminEmail,
    subject: `New application for ${data.position}`,
    html: `
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Position:</strong> ${data.position}</p>
      <p><strong>Experience:</strong> ${data.experience}</p>
      ${data.coverLetter ? `<p><strong>Cover Letter:</strong><br/>${data.coverLetter}</p>` : ""}
      ${data.resumeUrl ? `<p><strong>Resume:</strong> <a href="${data.resumeUrl}" target="_blank">Download Resume</a></p>` : ""}
    `,
  };
  await transporter.sendMail(mailOptions);
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: adminEmail,
    subject: `New Contact Form: ${data.subject}`,
    html: `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    `,
  };
  await transporter.sendMail(mailOptions);
}

export function getEmailTemplate(title: string, message: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #004d40; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">${title}</h1>
      </div>
      <div style="padding: 30px; line-height: 1.6; color: #333;">
        ${message}
      </div>
      <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666;">
        <p>© ${new Date().getFullYear()} Lifewood Data Technology. All rights reserved.</p>
      </div>
    </div>
  `;
}

export async function sendAdminEmail(data: {
  to: string;
  subject: string;
  message: string;
}) {
  const formattedMessage = `<p>${data.message.replace(/\n/g, '<br/>')}</p><br><p>Best regards,<br/><b>The Lifewood Team</b></p>`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.to,
    subject: data.subject,
    html: getEmailTemplate(data.subject, formattedMessage),
  };
  await transporter.sendMail(mailOptions);
}
