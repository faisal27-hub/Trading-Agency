import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { ConsultationRequest } from '../types';

const DATA_DIR = path.resolve(__dirname, '../../data');
const DATA_FILE = path.join(DATA_DIR, 'consultations.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure consultation file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
}

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

    // Simple validation
    if (!fullName || !email || !whatsappNumber || !preferredDate || !preferredTime || !investmentBudget) {
      res.status(400).json({
        status: 'error',
        message: 'All fields (Full Name, Email, WhatsApp, Date, Time, Budget) are required.',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        status: 'error',
        message: 'Invalid email address format.',
      });
      return;
    }

    const newBooking: ConsultationRequest = {
      fullName,
      email,
      whatsappNumber,
      preferredDate,
      preferredTime,
      investmentBudget,
      message: message || '',
      createdAt: new Date().toISOString(),
    };

    // Load existing, append and save
    const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
    const bookings = JSON.parse(fileContent) as ConsultationRequest[];
    bookings.push(newBooking);

    fs.writeFileSync(DATA_FILE, JSON.stringify(bookings, null, 2), 'utf-8');

    console.log(`[Consultation Booked] Name: ${fullName}, Email: ${email}, WhatsApp: ${whatsappNumber}, Budget: ${investmentBudget}`);

    res.status(201).json({
      status: 'success',
      message: 'Consultation successfully scheduled! Our premium trading advisors will contact you via WhatsApp and email within 2 hours.',
      data: {
        bookingId: Math.random().toString(36).substring(2, 11).toUpperCase(),
        preferredDate,
        preferredTime,
      },
    });
  } catch (error) {
    next(error);
  }
};
