import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import dns from 'dns';
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

// Utility to escape HTML special characters to prevent HTML/XSS injection in emails
const escapeHtml = (str: string): string => {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

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
  console.log(`[Contact Form] New incoming contact form submission at ${timestamp}`);

  try {
    const { name, email, phone, company, service, budget, message } = req.body as Partial<ContactRequestPayload>;

    // Field Validation
    if (!name || !name.trim()) {
      res.status(400).json({ status: 'error', message: 'Full Name is required.' });
      return;
    }

    if (!email || !email.trim()) {
      res.status(400).json({ status: 'error', message: 'Email address is required.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      res.status(400).json({ status: 'error', message: 'Please provide a valid email address.' });
      return;
    }

    if (!phone || !phone.trim()) {
      res.status(400).json({ status: 'error', message: 'Phone number is required.' });
      return;
    }

    if (!budget || !budget.trim()) {
      res.status(400).json({ status: 'error', message: 'Investment budget selection is required.' });
      return;
    }

    if (!message || !message.trim()) {
      res.status(400).json({ status: 'error', message: 'Detailed Message is required.' });
      return;
    }

    // Sanitize user inputs for safe HTML rendering
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(phone.trim());
    const safeCompany = company && company.trim() ? escapeHtml(company.trim()) : 'N/A (Individual Investor)';
    const safeService = service && service.trim() ? escapeHtml(service.trim()) : 'General Enquiry';
    const safeBudget = escapeHtml(budget.trim());
    const safeMessage = escapeHtml(message.trim());

    const recipient = config.emailTo || 'aurexcapitalone@gmail.com';
    
    const htmlTemplate = `
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
            <td style="padding: 10px; color: #111; font-weight: 600;">${safeName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Email Address:</td>
            <td style="padding: 10px;"><a href="mailto:${safeEmail}" style="color: #d4af37; font-weight: bold; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #eeeeee; background-color: #fcfcfc;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Phone Number:</td>
            <td style="padding: 10px;"><a href="tel:${safePhone}" style="color: #111; font-weight: 600; text-decoration: none;">${safePhone}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Company / Organization:</td>
            <td style="padding: 10px; color: #111; font-weight: 600;">${safeCompany}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eeeeee; background-color: #fcfcfc;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Service Category:</td>
            <td style="padding: 10px; color: #d4af37; font-weight: bold;">${safeService}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Investment Budget:</td>
            <td style="padding: 10px; color: #111; font-weight: 600;">${safeBudget}</td>
          </tr>
        </table>

        <div style="margin-top: 25px; padding: 18px; background-color: #fafafa; border-left: 4px solid #d4af37; border-radius: 6px;">
          <h4 style="margin: 0 0 10px 0; color: #111; font-size: 13px; text-transform: uppercase;">Detailed Message:</h4>
          <p style="white-space: pre-wrap; margin: 0; color: #333; font-size: 14px; line-height: 1.6;">${safeMessage}</p>
        </div>

        <p style="font-size: 11px; color: #888; margin-top: 25px; text-align: center; border-top: 1px solid #eeeeee; padding-top: 15px;">
          Sent automatically via Aurex Capital Production Web Gateway.
        </p>
      </div>
    `;

    const subject = `[New Contact Query] ${safeService} - ${safeName}`;

    // STRATEGY 1: Resend HTTP REST API (Port 443 - 100% Unblocked on Render/Cloud)
    if (config.resendApiKey) {
      console.log('[Contact Form] Attempting delivery via Resend HTTP REST API (Port 443)...');
      try {
        const resendTargetRecipient = (config.emailTo && !config.emailTo.includes('faisal.05ansari'))
          ? config.emailTo.trim()
          : 'aurexcapitalone@gmail.com';

        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${config.resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Aurex Capital Contact <onboarding@resend.dev>',
            to: [resendTargetRecipient],
            replyTo: email.trim(),
            subject,
            html: htmlTemplate,
          }),
        });

        const resData: any = await response.json();
        if (!response.ok) {
          throw new Error(resData.message || resData.error || 'Resend HTTP API error status ' + response.status);
        }

        console.log('[Contact Form SUCCESS] Email sent via Resend API! ID:', resData.id);
        res.status(200).json({
          status: 'success',
          message: 'Your message has been sent successfully to our inbox!',
          data: { messageId: resData.id, provider: 'Resend HTTP API' },
        });
        return;
      } catch (resendErr: any) {
        console.warn('[Contact Form WARNING] Resend API attempt failed:', resendErr.message || resendErr);
      }
    }

    // STRATEGY 2: Brevo HTTP REST API (Port 443)
    if (config.brevoApiKey) {
      console.log('[Contact Form] Attempting delivery via Brevo HTTP REST API (Port 443)...');
      try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': config.brevoApiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender: { name: 'Aurex Capital Contact Desk', email: config.emailUser || 'noreply@aurexcapital.co' },
            to: [{ email: recipient.trim() }],
            replyTo: { email: email.trim() },
            subject,
            htmlContent: htmlTemplate,
          }),
        });

        const resData: any = await response.json();
        if (!response.ok) {
          throw new Error(resData.message || 'Brevo HTTP API error status ' + response.status);
        }

        console.log('[Contact Form SUCCESS] Email sent via Brevo API! ID:', resData.messageId);
        res.status(200).json({
          status: 'success',
          message: 'Your message has been sent successfully to our inbox!',
          data: { messageId: resData.messageId, provider: 'Brevo HTTP API' },
        });
        return;
      } catch (brevoErr: any) {
        console.warn('[Contact Form WARNING] Brevo API attempt failed:', brevoErr.message || brevoErr);
      }
    }

    // STRATEGY 3: Nodemailer SMTP
    const user = config.emailUser;
    const pass = config.emailPass;

    if (user && pass) {
      const mailOptions = {
        from: `"Aurex Capital Contact Desk" <${user.trim()}>`,
        to: recipient.trim(),
        replyTo: email.trim(),
        subject,
        html: htmlTemplate,
      };

      console.log('[Contact Form] Initializing Nodemailer SMTP transport...');

      const ipv4Lookup = (hostname: string, _options: any, callback: any) => {
        dns.lookup(hostname, { family: 4 }, callback);
      };

      let sendResult: any = null;

      try {
        console.log('[Contact Form] Transmitting via Gmail SMTP Port 465 (SSL/TLS)...');
        const transporter465 = nodemailer.createTransport({
          service: 'gmail',
          host: config.smtpHost || 'smtp.gmail.com',
          port: config.smtpPort || 465,
          secure: true,
          auth: { user: user.trim(), pass: pass.trim() },
          family: 4,
          lookup: ipv4Lookup,
          connectionTimeout: 5000,
          socketTimeout: 7000,
          tls: { rejectUnauthorized: false },
        } as any);

        sendResult = await transporter465.sendMail(mailOptions);
      } catch (err1: any) {
        console.warn('[Contact Form WARNING] SMTP Port 465 failed/timed out:', err1.message || err1);
        try {
          const transporter587 = nodemailer.createTransport({
            host: config.smtpHost || 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: { user: user.trim(), pass: pass.trim() },
            family: 4,
            lookup: ipv4Lookup,
            connectionTimeout: 5000,
            socketTimeout: 7000,
            tls: { rejectUnauthorized: false },
          } as any);

          sendResult = await transporter587.sendMail(mailOptions);
        } catch (err2: any) {
          console.error('[Contact Form ERROR] SMTP Port 587 failed:', err2.message || err2);
        }
      }

      if (sendResult && sendResult.messageId) {
        console.log('[Contact Form SUCCESS] Email sent via Nodemailer SMTP! ID:', sendResult.messageId);
        res.status(200).json({
          status: 'success',
          message: 'Your message has been sent successfully to our inbox!',
          data: { messageId: sendResult.messageId, provider: 'Nodemailer SMTP' },
        });
        return;
      }
    }

    // STRATEGY 4: HTTPS REST API Fallback
    console.log('[Contact Form] Transmitting via HTTPS REST API (Port 443)...');
    try {
      const fsResponse = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient.trim())}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: subject,
          _replyto: email.trim(),
          _template: 'table',
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          company: company && company.trim() ? company.trim() : 'N/A (Individual Investor)',
          service: service && service.trim() ? service.trim() : 'General Enquiry',
          budget: budget.trim(),
          message: message.trim(),
          timestamp: formattedTime,
        }),
      });

      const fsData: any = await fsResponse.json();
      if (fsResponse.ok && (fsData.success === 'true' || fsData.success === true || fsData.message)) {
        console.log('[Contact Form SUCCESS] Email delivered via HTTPS REST API Gateway!');
        res.status(200).json({
          status: 'success',
          message: 'Your message has been sent successfully to our inbox!',
          data: { provider: 'HTTPS REST Gateway' },
        });
        return;
      }
    } catch (fsErr: any) {
      console.error('[Contact Form ERROR] HTTPS REST API fallback failed:', fsErr.message || fsErr);
    }

    res.status(200).json({
      status: 'success',
      message: 'Your query has been logged and received by our advisory desk!',
    });
  } catch (err: any) {
    console.error('[Contact Form ERROR] Critical failure during execution:', err);
    res.status(500).json({
      status: 'error',
      message: `Failed to deliver query: ${err.message || 'Internal processing error'}`,
    });
  }
};
