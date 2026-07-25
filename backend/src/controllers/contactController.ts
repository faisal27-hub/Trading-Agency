import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { config } from '../config';

export interface ContactRequestPayload {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  budget: string;
  message: string;
}

export const handleContactSubmission = async (
  req: Request,
  res: Response
): Promise<void> => {
  const timestamp = new Date().toISOString();
  const formattedTime = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  console.log('====================================================');
  console.log(`[Contact Form] 1. New incoming contact form submission at ${timestamp}`);
  console.log('[Contact Form] Request Payload:', JSON.stringify(req.body, null, 2));

  try {
    const { name, email, phone, company, service, budget, message } = req.body as Partial<ContactRequestPayload>;

    // Step 2: Field Validation
    console.log('[Contact Form] 2. Validating required form fields...');
    if (!name || !name.trim()) {
      console.warn('[Contact Form] Validation failed: Name is missing');
      res.status(400).json({ status: 'error', message: 'Full Name is required.' });
      return;
    }

    if (!email || !email.trim()) {
      console.warn('[Contact Form] Validation failed: Email is missing');
      res.status(400).json({ status: 'error', message: 'Email address is required.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      console.warn(`[Contact Form] Validation failed: Invalid email format (${email})`);
      res.status(400).json({ status: 'error', message: 'Please provide a valid email address.' });
      return;
    }

    if (!phone || !phone.trim()) {
      console.warn('[Contact Form] Validation failed: Phone number is missing');
      res.status(400).json({ status: 'error', message: 'Phone number is required.' });
      return;
    }

    if (!budget || !budget.trim()) {
      console.warn('[Contact Form] Validation failed: Investment Budget is missing');
      res.status(400).json({ status: 'error', message: 'Investment budget selection is required.' });
      return;
    }

    if (!message || !message.trim()) {
      console.warn('[Contact Form] Validation failed: Detailed Message is missing');
      res.status(400).json({ status: 'error', message: 'Detailed Message is required.' });
      return;
    }

    console.log('[Contact Form] Validation check PASSED for all required fields.');

    // Step 3: Verify Environment Variables
    console.log('[Contact Form] 3. Checking Nodemailer SMTP environment configuration...');
    const user = config.emailUser;
    const pass = config.emailPass;
    const recipient = config.emailTo || user;

    const safeUser = user ? (user.length > 5 ? `${user.substring(0, 3)}***${user.substring(user.indexOf('@'))}` : '***') : 'NOT CONFIGURED';
    const isPassConfigured = Boolean(pass && pass.length > 0);

    console.log(`[Contact Form] EMAIL_USER (Sender Account): ${safeUser}`);
    console.log(`[Contact Form] EMAIL_PASS (App Password): ${isPassConfigured ? `CONFIGURED (${pass.length} chars)` : 'MISSING'}`);
    console.log(`[Contact Form] EMAIL_TO (Destination Inbox): ${recipient || 'SAME AS SENDER'}`);

    if (!user || !pass) {
      const missing = [];
      if (!user) missing.push('EMAIL_USER');
      if (!pass) missing.push('EMAIL_PASS');

      const serverErr = `SMTP Server Configuration Incomplete. Missing Render Environment Variables: ${missing.join(', ')}. Please set EMAIL_USER and EMAIL_PASS in Render environment settings.`;
      console.error(`[Contact Form ERROR] ${serverErr}`);
      res.status(500).json({
        status: 'error',
        message: serverErr,
      });
      return;
    }

    // Step 4: Create Nodemailer Gmail Transporter
    console.log('[Contact Form] 4. Initializing Nodemailer transporter for Gmail SMTP...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user.trim(),
        pass: pass.trim(),
      },
    });

    // Step 5: Verify SMTP Transporter Connection
    console.log('[Contact Form] 5. Verifying connection to Gmail SMTP servers...');
    try {
      await transporter.verify();
      console.log('[Contact Form] Transporter verification SUCCESSFUL. Gmail SMTP is ready.');
    } catch (verifyErr: any) {
      console.error('[Contact Form ERROR] Transporter connection verification FAILED:', verifyErr);
      res.status(500).json({
        status: 'error',
        message: `Gmail SMTP authentication/connection failed: ${verifyErr.message || verifyErr}. Please verify EMAIL_USER and Gmail App Password (EMAIL_PASS).`,
      });
      return;
    }

    // Step 6: Build Email Payload
    console.log('[Contact Form] 6. Constructing HTML email template with form data...');
    const mailOptions = {
      from: `"Aurex Capital Contact Desk" <${user.trim()}>`,
      to: recipient.trim(),
      replyTo: email.trim(),
      subject: `[New Contact Query] ${service || 'Strategy Desk Query'} - ${name.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 650px; margin: 0 auto; border: 1px solid #d4af37; border-radius: 12px; padding: 24px; background-color: #ffffff;">
          <div style="background-color: #0b0b0b; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
            <h2 style="color: #d4af37; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">Aurex Capital - Strategy Desk</h2>
            <p style="color: #a1a1aa; margin: 5px 0 0 0; font-size: 12px;">New Contact Form Enquiry Received</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
            <tr style="border-bottom: 1px solid #eeeeee;">
              <td style="padding: 10px; font-weight: bold; color: #555; width: 35%;">Submission Time:</td>
              <td style="padding: 10px; color: #111; font-weight: 600;">${formattedTime} (${timestamp})</td>
            </tr>
            <tr style="border-bottom: 1px solid #eeeeee; background-color: #fcfcfc;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Full Name:</td>
              <td style="padding: 10px; color: #111; font-weight: 600;">${name.trim()}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eeeeee;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Email Address:</td>
              <td style="padding: 10px;"><a href="mailto:${email.trim()}" style="color: #d4af37; font-weight: bold; text-decoration: none;">${email.trim()}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eeeeee; background-color: #fcfcfc;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Phone Number:</td>
              <td style="padding: 10px;"><a href="tel:${phone.trim()}" style="color: #111; font-weight: 600; text-decoration: none;">${phone.trim()}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eeeeee;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Company / Organization:</td>
              <td style="padding: 10px; color: #111; font-weight: 600;">${company && company.trim() ? company.trim() : 'N/A (Individual Investor)'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eeeeee; background-color: #fcfcfc;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Service Category:</td>
              <td style="padding: 10px; color: #d4af37; font-weight: bold;">${service && service.trim() ? service.trim() : 'General Enquiry'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eeeeee;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Investment Budget:</td>
              <td style="padding: 10px; color: #111; font-weight: 600;">${budget.trim()}</td>
            </tr>
          </table>

          <div style="margin-top: 25px; padding: 18px; background-color: #fafafa; border-left: 4px solid #d4af37; border-radius: 6px;">
            <h4 style="margin: 0 0 10px 0; color: #111; font-size: 13px; text-transform: uppercase;">Detailed Message:</h4>
            <p style="white-space: pre-wrap; margin: 0; color: #333; font-size: 14px; line-height: 1.6;">${message.trim()}</p>
          </div>

          <p style="font-size: 11px; color: #888; margin-top: 25px; text-align: center; border-top: 1px solid #eeeeee; padding-top: 15px;">
            Sent automatically via Aurex Capital Production Web Gateway.
          </p>
        </div>
      `,
    };

    // Step 7: Send Email
    console.log(`[Contact Form] 7. Transmitting email to Gmail inbox [${recipient.trim()}]...`);
    const info = await transporter.sendMail(mailOptions);

    if (!info || !info.messageId) {
      throw new Error('Nodemailer sendMail executed but returned no messageId.');
    }

    console.log('[Contact Form SUCCESS] Email sent successfully to Gmail!');
    console.log(`[Contact Form] Message ID: ${info.messageId}`);
    console.log(`[Contact Form] Server Response: ${info.response}`);
    console.log('====================================================');

    res.status(200).json({
      status: 'success',
      message: 'Your message has been sent successfully to our inbox!',
      data: {
        messageId: info.messageId,
        timestamp,
      },
    });
  } catch (err: any) {
    console.error('[Contact Form ERROR] Critical failure during sendMail execution:', err);
    console.log('====================================================');
    res.status(500).json({
      status: 'error',
      message: `Failed to deliver email: ${err.message || err}`,
    });
  }
};
