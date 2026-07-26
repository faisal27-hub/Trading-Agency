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
    `;

    const subject = `[New Contact Query] ${service || 'Strategy Desk Query'} - ${name.trim()}`;

    // STRATEGY 1: Resend HTTP REST API (Port 443 - 100% Unblocked on Render)
    if (config.resendApiKey) {
      console.log('[Contact Form] Attempting delivery via Resend HTTP REST API (Port 443)...');
      try {
        // Resend free tier requires recipient to match account email (aurexcapitalone@gmail.com)
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
          throw new Error(resData.message || resData.error || 'Resend HTTP API returned error status ' + response.status);
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
        // Fallthrough to next strategies if Resend fails
      }
    }

    // STRATEGY 2: Brevo HTTP REST API (Port 443 - 100% Unblocked on Render)
    if (config.brevoApiKey) {
      console.log('[Contact Form] Attempting delivery via Brevo HTTP REST API (Port 443)...');
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
        throw new Error(resData.message || 'Brevo HTTP API returned error status ' + response.status);
      }

      console.log('[Contact Form SUCCESS] Email sent via Brevo API! ID:', resData.messageId);
      res.status(200).json({
        status: 'success',
        message: 'Your message has been sent successfully to our inbox!',
        data: { messageId: resData.messageId, provider: 'Brevo HTTP API' },
      });
      return;
    }

    // STRATEGY 3: Nodemailer SMTP (Port 465 SSL -> Port 587 STARTTLS Fallback with Strict IPv4 resolution)
    const user = config.emailUser;
    const pass = config.emailPass;

    if (!user || !pass) {
      const serverErr = 'Email service missing configuration. Please set EMAIL_USER & EMAIL_PASS (Gmail App Password) or RESEND_API_KEY in backend .env file.';
      console.error(`[Contact Form ERROR] ${serverErr}`);
      res.status(500).json({ status: 'error', message: serverErr });
      return;
    }

    const mailOptions = {
      from: `"Aurex Capital Contact Desk" <${user.trim()}>`,
      to: recipient.trim(),
      replyTo: email.trim(),
      subject,
      html: htmlTemplate,
    };

    console.log('[Contact Form] Initializing Nodemailer SMTP transport...');

    let sendResult: any = null;
    let lastSmtpError: any = null;

    // Strict IPv4 DNS Lookup function
    const ipv4Lookup = (hostname: string, _options: any, callback: any) => {
      dns.lookup(hostname, { family: 4 }, callback);
    };

    // Attempt 1: Port 465 SSL/TLS Direct with Strict IPv4
    try {
      console.log('[Contact Form] Attempt 1: Transmitting via Gmail SMTP Port 465 (SSL/TLS - IPv4)...');
      const transporter465 = nodemailer.createTransport({
        service: 'gmail',
        host: config.smtpHost || 'smtp.gmail.com',
        port: config.smtpPort || 465,
        secure: true,
        auth: {
          user: user.trim(),
          pass: pass.trim(),
        },
        family: 4,
        lookup: ipv4Lookup,
        connectionTimeout: 7000,
        socketTimeout: 10000,
        tls: {
          rejectUnauthorized: false,
        },
      } as any);

      sendResult = await transporter465.sendMail(mailOptions);
    } catch (err1: any) {
      lastSmtpError = err1;
      console.warn('[Contact Form WARNING] SMTP Port 465 failed/timed out:', err1.message || err1);
      console.log('[Contact Form] Attempt 2: Retrying via Gmail SMTP Port 587 (STARTTLS - IPv4)...');

      // Attempt 2: Port 587 STARTTLS Fallback with Strict IPv4
      try {
        const transporter587 = nodemailer.createTransport({
          host: config.smtpHost || 'smtp.gmail.com',
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            user: user.trim(),
            pass: pass.trim(),
          },
          family: 4,
          lookup: ipv4Lookup,
          connectionTimeout: 8000,
          socketTimeout: 10000,
          tls: {
            rejectUnauthorized: false,
          },
        } as any);

        sendResult = await transporter587.sendMail(mailOptions);
      } catch (err2: any) {
        lastSmtpError = err2;
        console.error('[Contact Form ERROR] SMTP Port 587 also failed:', err2.message || err2);
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

    // STRATEGY 4: HTTPS REST API Fallback (Port 443 - Bypasses Render SMTP Blocking 100%)
    console.warn('[Contact Form] SMTP ports 465/587 timed out (Render Cloud SMTP blocking detected).');
    console.log('[Contact Form] Executing STRATEGY 4: Transmitting via HTTPS REST API (Port 443)...');

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
        console.log('[Contact Form SUCCESS] Email delivered via HTTPS REST API Gateway! (Port 443)');
        res.status(200).json({
          status: 'success',
          message: 'Your message has been sent successfully to our inbox!',
          data: { provider: 'HTTPS REST Gateway (Port 443)' },
        });
        return;
      }
    } catch (fsErr: any) {
      console.error('[Contact Form ERROR] HTTPS REST API fallback failed:', fsErr.message || fsErr);
    }

    throw lastSmtpError || new Error('Connection timeout to SMTP server.');
  } catch (err: any) {
    console.error('[Contact Form ERROR] Critical failure during email execution:', err);
    let errorDetail = err.message || String(err);
    if (
      errorDetail.includes('Connection timeout') ||
      errorDetail.includes('ETIMEDOUT') ||
      errorDetail.includes('ECONNREFUSED') ||
      errorDetail.includes('ENETUNREACH') ||
      errorDetail.includes('2607:f8b0')
    ) {
      errorDetail = 'Render Cloud blocks outbound SMTP ports (465/587) & IPv6 socket connection! Please add RESEND_API_KEY in Render Environment Variables (Get a free key from resend.com in 1 min).';
    }
    res.status(500).json({
      status: 'error',
      message: `Failed to deliver email: ${errorDetail}`,
    });
  }
};
