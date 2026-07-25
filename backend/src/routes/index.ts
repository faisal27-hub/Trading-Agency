import { Router } from 'express';
import { bookConsultation } from '../controllers/consultationController';
import { handleContactSubmission } from '../controllers/contactController';
import { getMetrics } from '../controllers/metricsController';
import { bookingRateLimiter } from '../middleware/rateLimiter';

const router = Router();

// Health Check
router.get('/health', (_req, res) => {
  res.status(200).json({ status: 'OK', message: 'API is healthy and online.' });
});

// Performance metrics route (cached or dynamic)
router.get('/metrics', getMetrics);

// Consultation booking route with rate limit protection
router.post('/consultations', bookingRateLimiter, bookConsultation);

// Contact form email submission route
router.post('/contact', bookingRateLimiter, handleContactSubmission);

export default router;
