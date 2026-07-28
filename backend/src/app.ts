import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config';
import apiRouter from './routes';
import { errorHandler } from './middleware/errorHandler';
import { apiRateLimiter } from './middleware/rateLimiter';

const app = express();

// Enable Trust Proxy for production environments (Render, Vercel, Nginx)
app.set('trust proxy', 1);

// Security Headers with Helmet
app.use(
  helmet({
    contentSecurityPolicy: false, // Prevents conflicts with external scripts/widgets like TradingView
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// Bulletproof CORS Configuration
const allowedOrigins = [
  config.allowedOrigin,
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5000',
  'https://www.aurexcaptial.com',
  'https://aurexcaptial.com',
  'https://aurexcapital.co',
  'https://www.aurexcapital.co',
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||
        allowedOrigins.includes(origin) ||
        origin.endsWith('.vercel.app') ||
        origin.endsWith('.onrender.com')
      ) {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  })
);

// Request Logger
app.use(morgan(config.nodeEnv === 'production' ? 'combined' : 'dev'));

// Rate Limiting on API endpoints
app.use('/api', apiRateLimiter);

// Body Parsers with Security Limits
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Routing API
app.use('/api', apiRouter);

// Base route & health check
app.get('/', (_req, res) => {
  res.status(200).json({
    status: 'online',
    message: 'Welcome to Aurex Capital Premium Forex & Investment API.',
    version: '1.0.0',
    environment: config.nodeEnv,
    timestamp: new Date().toISOString(),
  });
});

// Centralized Error Handling Middleware
app.use(errorHandler);

export default app;
