import app from './app';
import { config } from './config';

const server = app.listen(config.port, () => {
  const isUserSet = Boolean(config.emailUser && config.emailUser.length > 0);
  const isPassSet = Boolean(config.emailPass && config.emailPass.length > 0);

  console.log(`==================================================`);
  console.log(`  AUREX API SERVER RUNNING IN [${config.nodeEnv}] MODE`);
  console.log(`  Listening on port: http://localhost:${config.port}`);
  console.log(`  Email Transporter Service: ${isUserSet && isPassSet ? 'READY (Gmail SMTP)' : 'WARNING: EMAIL_USER or EMAIL_PASS missing'}`);
  if (isUserSet) console.log(`  Sender Inbox: ${config.emailUser}`);
  if (config.emailTo) console.log(`  Recipient Inbox: ${config.emailTo}`);
  console.log(`==================================================`);
});

// Handle graceful shutdowns
const shutdown = () => {
  console.log('Received kill signal, shutting down gracefully...');
  server.close(() => {
    console.log('Closed out remaining connections.');
    process.exit(0);
  });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
