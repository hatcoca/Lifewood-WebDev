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
const BG_COLOR = "#f0f4f8"; // Premium light grey-blue

export function getEmailTemplate(title: string, content: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap" rel="stylesheet">
      <title>${title}</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Manrope', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: ${BG_COLOR}; color: #333;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
        <tr>
          <td align="center" style="padding: 50px 10px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.08);">
              <!-- Logo Header (White for visibility) -->
              <tr>
                <td style="padding: 30px 40px; text-align: center; background-color: #ffffff;">
                  <img src="${LOGO_URL}" alt="Lifewood" width="180" style="display: inline-block;">
                </td>
              </tr>
              
              <!-- Color Accent Bar -->
              <tr>
                <td style="padding: 40px 40px 30px 40px; background: linear-gradient(135deg, ${BRAND_COLOR} 0%, #00695c 100%); text-align: left;">
                  <h1 style="margin: 0; font-size: 32px; font-weight: 800; color: #ffffff; line-height: 1.1; letter-spacing: -0.03em;">
                    ${title}
                  </h1>
                  <div style="height: 4px; width: 60px; background-color: ${ACCENT_COLOR}; margin-top: 15px; border-radius: 2px;"></div>
                </td>
              </tr>

              <!-- Content Body -->
              <tr>
                <td style="padding: 40px;">
                  <div style="font-size: 16px; line-height: 1.8; color: #4b5563;">
                    ${content}
                  </div>
                </td>
              </tr>

              <!-- Modern Footer -->
              <tr>
                <td style="padding: 50px 40px; background-color: #1a202c; text-align: center;">
                  <img src="${LOGO_URL}" alt="Lifewood" width="120" style="display: inline-block; margin-bottom: 25px; filter: brightness(0) invert(1);">
                  <p style="margin: 0; font-size: 12px; font-weight: 600; color: #a0aec0; text-transform: uppercase; letter-spacing: 0.1em;">
                    The world's leading data solution provider
                  </p>
                  <p style="margin: 15px 0 30px 0; font-size: 14px; color: #718096; line-height: 1.6;">
                    Providing high-quality datasets and AI training data<br/>
                    to global technology leaders since 2004.
                  </p>
                  
                  <div style="padding-top: 30px; border-top: 1px solid #2d3748;">
                    <p style="margin: 0; font-size: 11px; color: #4a5568;">
                      © ${new Date().getFullYear()} Lifewood Data Technology. All rights reserved.<br/>
                      This is an automated notification. Please do not reply directly to this address.
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
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
    <p style="font-size: 18px; color: #1a202c; font-weight: 600; margin-bottom: 25px;">Hello Team,</p>
    <p style="margin-bottom: 30px;">You have received a new inquiry through the website. Here are the submission details:</p>

    <div style="background-color: #f7fafc; border-radius: 16px; padding: 30px; margin-bottom: 40px; border: 1px solid #e2e8f0;">
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; color: #718096; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;" width="100">Sender</td>
          <td style="padding: 12px 0; color: #2d3748; font-weight: 700; font-size: 16px;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-top: 1px solid #edf2f7; color: #718096; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
          <td style="padding: 12px 0; border-top: 1px solid #edf2f7; color: #2d3748; font-weight: 700; font-size: 16px;">
            <a href="mailto:${data.email}" style="color: ${BRAND_COLOR}; text-decoration: none;">${data.email}</a>
          </td>
        </tr>
        ${data.company ? `
        <tr>
          <td style="padding: 12px 0; border-top: 1px solid #edf2f7; color: #718096; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Company</td>
          <td style="padding: 12px 0; border-top: 1px solid #edf2f7; color: #2d3748; font-weight: 700; font-size: 16px;">${data.company}</td>
        </tr>` : ""}
        <tr>
          <td style="padding: 12px 0; border-top: 1px solid #edf2f7; color: #718096; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
          <td style="padding: 12px 0; border-top: 1px solid #edf2f7; color: #2d3748; font-weight: 700; font-size: 16px;">${data.subject}</td>
        </tr>
      </table>
    </div>
    
    <div style="background-color: #ffffff; border: 2px solid ${BG_COLOR}; padding: 30px; border-radius: 16px; position: relative; margin-bottom: 40px;">
      <div style="position: absolute; top: -15px; left: 20px; background-color: #ffffff; padding: 0 10px; color: ${BRAND_COLOR}; font-weight: 800; font-size: 12px; text-transform: uppercase;">Message Content</div>
      <p style="margin: 0; color: #4a5568; line-height: 1.8; font-size: 16px; font-style: italic;">
        "${data.message}"
      </p>
    </div>
    
    <div style="text-align: center;">
      <a href="mailto:${data.email}" style="background-color: ${BRAND_COLOR}; color: #ffffff; padding: 20px 40px; text-decoration: none; border-radius: 50px; font-weight: 800; font-size: 16px; display: inline-block; box-shadow: 0 10px 20px rgba(0, 77, 64, 0.15); transition: all 0.3s ease;">
        REPLY TO THIS INQUIRY
      </a>
    </div>
  `;

  const mailOptions = {
    from: `"${data.name} via Lifewood" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    replyTo: data.email,
    subject: `Inbox: ${data.subject} - ${data.name}`,
    html: getEmailTemplate("New Website Inquiry", htmlContent),
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
  resumeFile?: {
    buffer: Buffer;
    filename: string;
    contentType: string;
  };
}) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

  const htmlContent = `
    <p style="font-size: 18px; color: #1a202c; font-weight: 600; margin-bottom: 25px;">Hello Talent Team,</p>
    <p style="margin-bottom: 30px;">A new candidate has applied for a position. Here are the application details:</p>

    <div style="background-color: #f7fafc; border-radius: 16px; padding: 30px; margin-bottom: 40px; border: 1px solid #e2e8f0;">
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; color: #718096; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;" width="120">Candidate</td>
          <td style="padding: 12px 0; color: #2d3748; font-weight: 700; font-size: 16px;">${data.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-top: 1px solid #edf2f7; color: #718096; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
          <td style="padding: 12px 0; border-top: 1px solid #edf2f7; color: #2d3748; font-weight: 700; font-size: 16px;">
            <a href="mailto:${data.email}" style="color: ${BRAND_COLOR}; text-decoration: none;">${data.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-top: 1px solid #edf2f7; color: #718096; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Position</td>
          <td style="padding: 12px 0; border-top: 1px solid #edf2f7; color: #2d3748; font-weight: 700; font-size: 16px;">
            <span style="background-color: ${BRAND_COLOR}; color: #ffffff; padding: 4px 12px; border-radius: 6px; font-size: 12px; letter-spacing: 0.05em;">${data.position}</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-top: 1px solid #edf2f7; color: #718096; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Experience</td>
          <td style="padding: 12px 0; border-top: 1px solid #edf2f7; color: #2d3748; font-weight: 700; font-size: 16px;">${data.experience}</td>
        </tr>
      </table>
    </div>
    
    ${data.coverLetter ? `
    <div style="background-color: #ffffff; border: 2px solid ${BG_COLOR}; padding: 30px; border-radius: 16px; position: relative; margin-bottom: 40px;">
      <div style="position: absolute; top: -15px; left: 20px; background-color: #ffffff; padding: 0 10px; color: ${BRAND_COLOR}; font-weight: 800; font-size: 12px; text-transform: uppercase;">Cover Letter</div>
      <p style="margin: 0; color: #4a5568; line-height: 1.8; font-size: 15px;">${data.coverLetter}</p>
    </div>` : ""}
    
    <div style="text-align: center;">
      ${data.resumeUrl ? `
      <a href="${data.resumeUrl}" style="background-color: ${BRAND_COLOR}; color: #ffffff; padding: 18px 30px; text-decoration: none; border-radius: 50px; font-weight: 800; font-size: 15px; display: inline-block; margin: 0 10px 10px 10px; box-shadow: 0 8px 16px rgba(0, 77, 64, 0.15);">
        VIEW RESUME
      </a>
      ` : ""}
      <a href="mailto:${data.email}" style="border: 2px solid ${BRAND_COLOR}; color: ${BRAND_COLOR}; padding: 16px 30px; text-decoration: none; border-radius: 50px; font-weight: 800; font-size: 15px; display: inline-block; margin: 0 10px 10px 10px;">
        CONTACT CANDIDATE
      </a>
    </div>
  `;

  const mailOptions: any = {
    from: `"${data.fullName} via Careers" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    replyTo: data.email,
    subject: `Application: ${data.position} - ${data.fullName}`,
    html: getEmailTemplate("New Career Application", htmlContent),
  };

  if (data.resumeFile) {
    mailOptions.attachments = [
      {
        filename: data.resumeFile.filename,
        content: data.resumeFile.buffer,
        contentType: data.resumeFile.contentType || 'application/pdf'
      }
    ];
  }

  await transporter.sendMail(mailOptions);
}

export async function sendAdminEmail(data: {
  to: string;
  subject: string;
  message: string;
  name?: string;
}) {
  const firstName = data.name ? data.name.split(' ')[0] : '';
  const greeting = firstName ? `Hello ${firstName},` : "Hello,";

  const formattedMessage = `
    <div style="color: #2d3748; line-height: 2;">
      <p style="font-size: 18px; font-weight: 700; color: #1a202c; margin-bottom: 25px;">${greeting}</p>
      <div style="font-size: 16px; color: #4a5568; margin-bottom: 40px; white-space: pre-wrap;">${data.message}</div>
      
      <div style="padding: 30px; background-color: #f7fafc; border-radius: 16px; border-left: 6px solid ${BRAND_COLOR};">
        <p style="margin: 0; font-weight: 800; color: ${BRAND_COLOR}; font-size: 16px;">The Lifewood Team</p>
        <p style="margin: 5px 0 0 0; font-size: 13px; color: #718096; text-transform: uppercase; letter-spacing: 0.05em;">Empowering intelligence through human-centric data.</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Lifewood Support" <${process.env.EMAIL_USER}>`,
    to: data.to,
    subject: data.subject,
    html: getEmailTemplate("Official Response", formattedMessage),
  };
  await transporter.sendMail(mailOptions);
}

export async function sendApplicationStatusUpdate(data: {
  fullName: string;
  email: string;
  position: string;
  status: "accepted" | "rejected";
}) {
  const isAccepted = data.status === "accepted";
  const title = isAccepted ? "Application Update: Great News!" : "Application Update: Status Update";
  const subject = isAccepted
    ? `Congratulations! Your application for ${data.position} at Lifewood`
    : `Update regarding your application for ${data.position} at Lifewood`;

  const content = isAccepted ? `
    <div style="color: #2d3748; line-height: 1.8;">
      <p style="font-size: 20px; font-weight: 800; color: ${BRAND_COLOR}; margin-bottom: 20px;">Congratulations, ${data.fullName.split(' ')[0]}!</p>
      <p style="font-size: 16px; margin-bottom: 25px;">
        We are thrilled to inform you that after reviewing your application and profile, we have decided to <strong>accept</strong> your application for the <strong>${data.position}</strong> position at Lifewood.
      </p>
      <div style="background-color: #f0fff4; border: 1px solid #c6f6d5; padding: 25px; border-radius: 16px; margin-bottom: 30px;">
        <p style="margin: 0; color: #22543d; font-weight: 700; font-size: 15px;">Next Steps:</p>
        <p style="margin: 10px 0 0 0; color: #276749; font-size: 14px;">
          Our HR team will follow up with you shortly via this email address to discuss the onboarding process, documentation, and your start date. 
        </p>
      </div>
      <p style="font-size: 15px; color: #4a5568; margin-bottom: 35px;">
        Welcome to the team! We are excited about the possibility of having your expertise contribute to our mission of empowering intelligence through human-centric data.
      </p>
    </div>
  ` : `
    <div style="color: #2d3748; line-height: 1.8;">
      <p style="font-size: 18px; font-weight: 700; color: #1a202c; margin-bottom: 20px;">Hello ${data.fullName.split(' ')[0]},</p>
      <p style="font-size: 16px; margin-bottom: 25px;">
        Thank you very much for your interest in the <strong>${data.position}</strong> position at Lifewood and for the time you spent sharing your background with us.
      </p>
      <p style="font-size: 15px; color: #4a5568; margin-bottom: 25px;">
        After careful consideration, we regret to inform you that we will not be moving forward with your application at this time. Our team had many highly qualified candidates, and this was an extremely difficult decision.
      </p>
      <div style="background-color: #fffaf0; border: 1px solid #feebc8; padding: 25px; border-radius: 16px; margin-bottom: 30px;">
        <p style="margin: 0; color: #7b341e; font-weight: 700; font-size: 14px;">
          We will keep your profile in our talent pool and may reach out if a future opening aligns with your unique skills and experience.
        </p>
      </div>
      <p style="font-size: 15px; color: #4a5568; margin-bottom: 35px;">
        We wish you the very best of luck in your current job search and your future professional endeavors.
      </p>
    </div>
  `;

  const footerSignature = `
    <div style="padding: 30px; background-color: #f7fafc; border-radius: 16px; border-left: 6px solid ${isAccepted ? '#38a169' : BRAND_COLOR};">
      <p style="margin: 0; font-weight: 800; color: ${BRAND_COLOR}; font-size: 16px;">The Lifewood Talent Team</p>
      <p style="margin: 5px 0 0 0; font-size: 13px; color: #718096; text-transform: uppercase; letter-spacing: 0.05em;">Human-Centric Data Solutions</p>
    </div>
  `;

  const mailOptions = {
    from: `"Lifewood Careers" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: subject,
    html: getEmailTemplate(title, content + footerSignature),
  };

  await transporter.sendMail(mailOptions);
}


