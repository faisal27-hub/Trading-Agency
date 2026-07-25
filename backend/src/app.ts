import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config';
import apiRouter from './routes';
import { errorHandler } from './middleware/errorHandler';
import { apiRateLimiter } from './middleware/rateLimiter';

const app = express();

// Security Headers
app.use(helmet());

// Bulletproof CORS config for Vercel & Production
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);


// Morgan Logger
app.use(morgan(config.nodeEnv === 'production' ? 'combined' : 'dev'));

// Rate Limiting
app.use('/api', apiRateLimiter);

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing API
app.use('/api', apiRouter);

// Base route
app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'Welcome to Aurex Capital Premium Forex & Investment API.',
    version: '1.0.0',
    documentation: 'See API details on frontend dashboard integrations.',
  });
});

// Error handling middleware
app.use(errorHandler);

export default app;
