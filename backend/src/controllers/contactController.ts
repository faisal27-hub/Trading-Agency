import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { config } from '../config';

export interface ContactRequestPayload {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}

export const handleContactSubmission = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log('====================================================');
  console.log('[Contact Form] 1. New incoming contact form submission');
  console.log('[Contact Form] Request Payload:', JSON.stringify(req.body, null, 2));

  try {
    const { name, email, phone, budget, message } = req.body as Partial<ContactRequestPayload>;

    // Step 2: Field Validation
    console.log('[Contact Form] 2. Validating required fields...');
    if (!name || !email || !phone || !budget || !message) {
      console.warn('[Contact Form] Validation failed: Missing required fields');
      res.status(400).json({
        status: 'error',
        message: 'All fields (Name, Email, Phone, Budget, Message) are required.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn(`[Contact Form] Validation failed: Invalid email format (${email})`);
      res.status(400).json({
        status: 'error',
        message: 'Invalid email address format.',
      });
      return;
    }

    console.log('[Contact Form] Validation successful.');

    // Step 3: Check and safely log environment variables
    console.log('[Contact Form] 3. Checking email environment variables...');
    const user = config.emailUser;
    const pass = config.emailPass;
    const recipient = config.emailTo || user;

    const safeUser = user ? (user.length > 5 ? `${user.substring(0, 3)}***${user.substring(user.indexOf('@'))}` : '***') : 'NOT SET';
    const isPassConfigured = Boolean(pass && pass.trim().length > 0);
    const passLength = pass ? pass.trim().length : 0;

    console.log(`[Contact Form] EMAIL_USER (Sender): ${safeUser}`);
    console.log(`[Contact Form] EMAIL_PASS Configured: ${isPassConfigured ? `YES (${passLength} chars)` : 'NO (MISSING)'}`);
    console.log(`[Contact Form] Target Admin Recipient: ${recipient}`);

    if (!user || !pass) {
      const missingKeys = [];
      if (!user) missingKeys.push('EMAIL_USER');
      if (!pass) missingKeys.push('EMAIL_PASS');
      const errMsg = `Email service configuration incomplete on server. Missing: ${missingKeys.join(', ')}. Please configure them in Render environment variables.`;
      console.error(`[Contact Form ERROR] ${errMsg}`);
      res.status(500).json({
        status: 'error',
        message: errMsg,
      });
      return;
    }

    // Step 4: Create Nodemailer Transporter
    console.log('[Contact Form] 4. Creating Nodemailer transporter for Gmail SMTP...');
    
    // Using Gmail Service or Host
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user.trim(),
        pass: pass.trim().replace(/\s+/g, ''), // Strip any accidental spaces in App Passwords
      },
    });

    // Step 5: Verify Transporter Connection
    console.log('[Contact Form] 5. Verifying Nodemailer transporter connection to Gmail...');
    try {
      await transporter.verify();
      console.log('[Contact Form] Transporter verification SUCCESSFUL. Ready to send messages.');
    } catch (verifyErr: any) {
      console.error('[Contact Form ERROR] Transporter verification FAILED:', verifyErr);
      res.status(500).json({
        status: 'error',
        message: `SMTP Transporter verification failed: ${verifyErr.message || verifyErr}`,
      });
      return;
    }

    // Step 6: Construct and Send Email
    console.log('[Contact Form] 6. Constructing email message and executing sendMail...');
    const mailOptions = {
      from: `"Aurex Capital Contact Form" <${user.trim()}>`,
      to: recipient.trim(),
      replyTo: email.trim(),
      subject: `[New Contact Submission] Strategy Desk Query from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px;">
          <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 8px;">Aurex Capital - New Contact Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 30%;">Full Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold;">Sender Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px;">${phone}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold;">Investment Budget:</td>
              <td style="padding: 8px;">${budget}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f4f4f4; border-left: 4px solid #d4af37; border-radius: 4px;">
            <h4 style="margin-top: 0; color: #111;">Message / Query:</h4>
            <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #777; margin-top: 25px; text-align: center;">
            Sent automatically via Aurex Capital Backend Gateway.
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('[Contact Form] 7. sendMail Executed Successfully!');
    console.log(`[Contact Form] Message ID: ${info.messageId}`);
    console.log(`[Contact Form] Response: ${info.response}`);
    console.log('====================================================');

    res.status(200).json({
      status: 'success',
      message: 'Message dispatched and sent successfully via email!',
      data: {
        messageId: info.messageId,
      },
    });
  } catch (err: any) {
    console.error('[Contact Form ERROR] Critical failure during sendMail execution:', err);
    console.log('====================================================');
    res.status(500).json({
      status: 'error',
      message: `Failed to send email via SMTP: ${err.message || err}`,
    });
  }
};
