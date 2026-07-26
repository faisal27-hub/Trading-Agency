import dotenv from 'dotenv';
import path from 'path';

// Load env files
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const config = {
  port: parseInt(process.env.PORT || '5000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  allowedOrigin: process.env.ALLOWED_ORIGIN || 'http://localhost:5173',
  emailUser: (process.env.EMAIL_USER || process.env.GMAIL_USER || process.env.SMTP_USER || '').trim(),
  emailPass: (process.env.EMAIL_PASS || process.env.GMAIL_PASS || process.env.SMTP_PASS || '').trim().replace(/\s+/g, ''),
  emailTo: (process.env.EMAIL_TO || process.env.RECEIVER_EMAIL || process.env.EMAIL_USER || process.env.GMAIL_USER || process.env.SMTP_USER || '').trim(),
  smtpHost: (process.env.SMTP_HOST || 'smtp.gmail.com').trim(),
  smtpPort: parseInt(process.env.SMTP_PORT || '465', 10),
  resendApiKey: (process.env.RESEND_API_KEY || '').trim(),
  brevoApiKey: (process.env.BREVO_API_KEY || '').trim(),
};
