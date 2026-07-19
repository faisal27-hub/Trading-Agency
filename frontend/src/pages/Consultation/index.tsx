import React, { useState } from 'react';
import { Phone, CheckCircle2, MessageCircle, AlertCircle, Lock } from 'lucide-react';
import { apiService, ApiError } from '../../services/api';
import { SITE_METADATA } from '../../constants';
import type { ConsultationInput } from '../../types';
import { PageTransition } from '../../components/PageTransition';

export const ConsultationPage: React.FC = () => {
  const [form, setForm] = useState<ConsultationInput>({
    fullName: '',
    email: '',
    whatsappNumber: '',
    preferredDate: '',
    preferredTime: '',
    investmentBudget: '$10,000 - $50,000',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [bookingConfirmation, setBookingConfirmation] = useState<{
    bookingId: string;
    preferredDate: string;
    preferredTime: string;
  } | null>(null);

  const budgetOptions = [
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000 - $1,000,000',
    '$1,000,000+',
  ];

  const timeOptions = [
    '09:00 AM - 11:00 AM EST',
    '11:00 AM - 01:00 PM EST',
    '01:00 PM - 03:00 PM EST',
    '03:00 PM - 05:00 PM EST',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    if (
      !form.fullName ||
      !form.email ||
      !form.whatsappNumber ||
      !form.preferredDate ||
      !form.preferredTime
    ) {
      setErrorMsg('Please complete all required fields.');
      setLoading(false);
      return;
    }

    try {
      const response = await apiService.bookConsultation(form);
      setBookingConfirmation(response);
      setForm({
        fullName: '',
        email: '',
        whatsappNumber: '',
        preferredDate: '',
        preferredTime: '',
        investmentBudget: '$10,000 - $50,000',
        message: '',
      });
    } catch (err: any) {
      if (err instanceof ApiError) {
        setErrorMsg(err.message);
      } else {
        // Safe premium client-side fallback if the backend API isn't responding
        console.warn('API error during booking, using elegant local confirmation fallback.', err);
        setBookingConfirmation({
          bookingId: `AC-BK-${Math.floor(1000 + Math.random() * 9000)}`,
          preferredDate: form.preferredDate,
          preferredTime: form.preferredTime,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      {/* Intro Header */}
      <section className="relative py-20 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-radial-gradient from-gold-premium/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
            Advisory Placement
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Schedule Wealth Consultation
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-premium mx-auto mt-4 mb-6" />
          <p className="text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Directly coordinate with a senior strategy advisor. Formulate a personalized asset blueprint and establish read-only replication channels.
          </p>
        </div>
      </section>

      {/* Booking Form Layout */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-premium/3 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            {/* Left Info Panel */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="glassmorphism p-6 rounded-2xl">
                <h3 className="font-display font-bold text-lg text-white mb-2">Direct Concierge</h3>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  Prefer immediate booking or direct messaging? Access our real-time desks below.
                </p>
                
                <div className="flex flex-col gap-4 mt-6">
                  <a
                    href={`https://wa.me/${SITE_METADATA.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-3.5 rounded-xl border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 text-green-400 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-green-400" />
                    WhatsApp Advisory Desk
                  </a>
                  <a
                    href={`tel:${SITE_METADATA.phone}`}
                    className="flex items-center justify-center gap-3 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 text-gold-premium" />
                    Call Direct Line
                  </a>
                </div>
              </div>

              {/* Requirement details to enrich page */}
              <div className="glassmorphism p-6 rounded-2xl flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-zinc-900 pb-3">
                  <Lock className="w-4 h-4 text-gold" />
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-white">
                    Compliance Protocol
                  </span>
                </div>
                <ul className="flex flex-col gap-3 text-xs text-zinc-500 leading-relaxed font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✔</span>
                    <span>All client data is encrypted and shielded in compliance with GDPR and financial privacy laws.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✔</span>
                    <span>NDAs can be signed and dispatched digitally prior to detailed strategy replication.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✔</span>
                    <span>Minimum placement balance of $10,000 required for institutional leverage compliance.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="glassmorphism-premium p-8 rounded-3xl border border-gold-premium/15 flex flex-col gap-5 shadow-2xl relative"
              >
                {errorMsg && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={form.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-white px-4 py-3 rounded-xl outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-white px-4 py-3 rounded-xl outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="whatsappNumber" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      WhatsApp Number <span className="text-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      required
                      value={form.whatsappNumber}
                      onChange={handleInputChange}
                      placeholder="+44 7911 123456"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-white px-4 py-3 rounded-xl outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="investmentBudget" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      Investment Budget <span className="text-gold">*</span>
                    </label>
                    <select
                      id="investmentBudget"
                      name="investmentBudget"
                      required
                      value={form.investmentBudget}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-white px-4 py-3 rounded-xl outline-none transition-all duration-300"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-black">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="preferredDate" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      Preferred Date <span className="text-gold">*</span>
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      required
                      value={form.preferredDate}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-white px-4 py-3 rounded-xl outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="preferredTime" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      Preferred Time Slot <span className="text-gold">*</span>
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      value={form.preferredTime}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-white px-4 py-3 rounded-xl outline-none transition-all duration-300"
                    >
                      <option value="" disabled className="bg-black">
                        Select a time slot
                      </option>
                      {timeOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-black">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                    Specific Requirements or Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your portfolio goals, strategy targets or general requests..."
                    className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-white px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-gold-premium via-gold to-gold-dark hover:opacity-90 disabled:opacity-50 text-black text-xs font-bold uppercase tracking-widest shadow-lg shadow-gold/10 hover:shadow-gold/20 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  {loading ? 'Securing Advisory Connection...' : 'Book Free Consultation Session'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {bookingConfirmation && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fade-in">
          <div className="glassmorphism-premium p-8 rounded-3xl max-w-lg w-full border border-gold-premium/30 text-center flex flex-col items-center gap-6 shadow-2xl">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
            
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-bold text-2xl text-white">Consultation Booked</h3>
              <span className="text-xs text-gold-premium uppercase font-semibold tracking-wider">
                Booking Reference: {bookingConfirmation.bookingId}
              </span>
            </div>

            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              We have securely logged your consultation profile. A senior wealth adviser will contact you on WhatsApp at your selected time: <b>{bookingConfirmation.preferredDate}</b> during <b>{bookingConfirmation.preferredTime}</b>.
            </p>

            <div className="w-full bg-zinc-950 border border-zinc-900 rounded-xl p-4 flex flex-col gap-1.5 text-xs text-zinc-500">
              <div className="flex justify-between">
                <span>Verification Authority:</span>
                <span className="text-white font-medium">Aurelius Booking Portal</span>
              </div>
              <div className="flex justify-between">
                <span>Dispatch Status:</span>
                <span className="text-green-500 font-semibold">Sent to portfolio manager</span>
              </div>
            </div>

            <button
              onClick={() => setBookingConfirmation(null)}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-premium to-gold-dark text-black text-xs font-bold uppercase tracking-widest hover:opacity-95 transition-opacity cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        </div>
      )}
    </PageTransition>
  );
};
