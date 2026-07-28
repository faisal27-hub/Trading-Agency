import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { ConsultationRequest } from '../types';

const DATA_DIR = path.resolve(__dirname, '../../data');
const DATA_FILE = path.join(DATA_DIR, 'consultations.json');

// Ensure data directory and file exist asynchronously on startup
const initStorage = async () => {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      await fs.promises.mkdir(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      await fs.promises.writeFile(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('[Storage Init Warning] Failed to initialize consultations file:', err);
  }
};
initStorage();

export const bookConsultation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      fullName,
      email,
      whatsappNumber,
      preferredDate,
      preferredTime,
      investmentBudget,
      message,
    } = req.body as ConsultationRequest;

    // Validation
    if (!fullName || !fullName.trim()) {
      res.status(400).json({ status: 'error', message: 'Full Name is required.' });
      return;
    }

    if (!email || !email.trim()) {
      res.status(400).json({ status: 'error', message: 'Email address is required.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      res.status(400).json({ status: 'error', message: 'Invalid email address format.' });
      return;
    }

    if (!whatsappNumber || !whatsappNumber.trim()) {
      res.status(400).json({ status: 'error', message: 'WhatsApp number is required.' });
      return;
    }

    if (!preferredDate || !preferredTime) {
      res.status(400).json({ status: 'error', message: 'Preferred Date and Time are required.' });
      return;
    }

    if (!investmentBudget) {
      res.status(400).json({ status: 'error', message: 'Investment budget selection is required.' });
      return;
    }

    const newBooking: ConsultationRequest = {
      fullName: fullName.trim(),
      email: email.trim(),
      whatsappNumber: whatsappNumber.trim(),
      preferredDate,
      preferredTime,
      investmentBudget,
      message: message ? message.trim() : '',
      createdAt: new Date().toISOString(),
    };

    // Non-blocking async file read & append
    let bookings: ConsultationRequest[] = [];
    try {
      if (fs.existsSync(DATA_FILE)) {
        const fileContent = await fs.promises.readFile(DATA_FILE, 'utf-8');
        bookings = JSON.parse(fileContent) as ConsultationRequest[];
      }
    } catch (parseErr) {
      console.warn('[Consultation Warning] Could not parse existing bookings file, re-initializing:', parseErr);
      bookings = [];
    }

    bookings.push(newBooking);
    await fs.promises.writeFile(DATA_FILE, JSON.stringify(bookings, null, 2), 'utf-8');

    console.log(`[Consultation Booked] Name: ${fullName.trim()}, Email: ${email.trim()}, WhatsApp: ${whatsappNumber.trim()}`);

    const bookingId = Math.random().toString(36).substring(2, 11).toUpperCase();

    res.status(201).json({
      status: 'success',
      message: 'Consultation successfully scheduled! Our premium trading advisors will contact you via WhatsApp and email within 2 hours.',
      data: {
        bookingId,
        preferredDate,
        preferredTime,
      },
    });
  } catch (error) {
    next(error);
  }
};
