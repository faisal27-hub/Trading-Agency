import app from './app';
import { config } from './config';

const server = app.listen(config.port, () => {
  console.log(`==================================================`);
  console.log(`  AUREX API SERVER RUNNING IN [${config.nodeEnv}] MODE`);
  console.log(`  Listening on port: http://localhost:${config.port}`);
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
