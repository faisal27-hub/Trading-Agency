import React, { useState } from 'react';
import { Mail, Clock, Send, CheckCircle, MessageSquare, Phone, AlertCircle } from 'lucide-react';
import { SITE_METADATA } from '../../constants';
import { PageTransition } from '../../components/PageTransition';

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Account Management / Trade Replication',
    budget: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const apiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/$/, '');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);

    try {
      console.log('[Frontend] Submitting contact form to backend:', `${apiUrl}/contact`);
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();
      console.log('[Frontend] Contact API Response:', response.status, data);

      if (!response.ok || data.status !== 'success') {
        throw new Error(data.message || `Email delivery failed (Status ${response.status})`);
      }

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Account Management / Trade Replication',
        budget: '',
        message: '',
      });
    } catch (err: any) {
      clearTimeout(timeoutId);
      console.error('[Frontend ERROR] Contact Form Submission Failed:', err);
      if (err.name === 'AbortError') {
        setError('Server request timed out. Render backend was waking up — please click Transmit Message again now!');
      } else {
        setError(err.message || 'Failed to connect to email gateway server.');
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
          <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3 animate-pulse">
            Get In Touch
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Contact Our Strategy Desk
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-premium mx-auto mt-4 mb-6" />
          <p className="text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Connect with our strategy or technical desks for partnership, API replication integrations, or custody advice.
          </p>
        </div>
      </section>

      {/* Main Grid: Form and Info */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-premium/3 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="glassmorphism p-8 rounded-2xl flex flex-col gap-6 border border-zinc-900">
                <h3 className="font-display font-bold text-xl text-white">Contact Information</h3>
                
                <div className="flex flex-col gap-5 text-xs sm:text-sm font-light">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gold-premium shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block uppercase tracking-wider text-[10px] mb-1">Email Correspondence</span>
                      <a href={`mailto:${SITE_METADATA.email}`} className="text-zinc-400 hover:text-gold transition-colors">
                        {SITE_METADATA.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-gold-premium shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block uppercase tracking-wider text-[10px] mb-1">Direct Desk Line</span>
                      <a href={`tel:${SITE_METADATA.phone}`} className="text-zinc-400 hover:text-gold transition-colors">
                        {SITE_METADATA.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-gold-premium shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block uppercase tracking-wider text-[10px] mb-1">Business Hours</span>
                      <span className="text-zinc-400">{SITE_METADATA.businessHours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advisory Dispatch Guidelines */}
              <div className="glassmorphism p-6 rounded-2xl border border-zinc-900 text-zinc-500 text-xs font-light leading-relaxed flex flex-col gap-3">
                <span className="font-semibold text-white uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-gold-premium" />
                  Response Times Notice
                </span>
                <p>✔ Strategy Desk responds to whitelisted API requests within 2 business hours.</p>
                <p>✔ Partner integrations can request dedicated developer coordination Slack channels.</p>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              {success ? (
                <div className="glassmorphism p-12 rounded-3xl border border-gold-premium/25 text-center flex flex-col items-center gap-5">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h3 className="font-display font-bold text-2xl text-white">Message Dispatched</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-md">
                    Thank you! Your message has been sent successfully to our inbox via secure SMTP protocol. Our desk will contact you via email shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-premium to-gold-dark text-black text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all duration-300 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glassmorphism-premium p-8 rounded-3xl border border-gold-premium/15 flex flex-col gap-5 shadow-2xl animate-fade-in"
                >
                  {error && (
                    <div className="p-4 rounded-xl bg-red-950/60 border border-red-800/60 text-red-200 text-xs flex items-start gap-3 animate-fade-in">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-red-300">Email Delivery Failed</span>
                        <span>{error}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-white px-4 py-3 rounded-xl outline-none transition-all duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        Your Email *
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
                      <label htmlFor="phone" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 0199"
                        className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-white px-4 py-3 rounded-xl outline-none transition-all duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleInputChange}
                        placeholder="Optional (e.g. Apex Holdings)"
                        className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-white px-4 py-3 rounded-xl outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        Requested Service *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-zinc-300 focus:text-white px-4 py-3.5 rounded-xl outline-none transition-all duration-300 cursor-pointer"
                      >
                        <option value="Account Management / Trade Replication">Account Management / Trade Replication</option>
                        <option value="Institutional Advisory & Prop Trading">Institutional Advisory & Prop Trading</option>
                        <option value="API Trading Integration">API Trading Integration</option>
                        <option value="General Strategic Enquiry">General Strategic Enquiry</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="budget" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        Investment Budget *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={form.budget}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-zinc-400 focus:text-white px-4 py-3.5 rounded-xl outline-none transition-all duration-300 cursor-pointer"
                      >
                        <option value="" disabled>Select Budget...</option>
                        <option value="$500 - $1,000">$500 – $1,000</option>
                        <option value="$1,000 - $1,500">$1,000 – $1,500</option>
                        <option value="$1,500 - $2,000">$1,500 – $2,000</option>
                        <option value="$2,000+">$2,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      Detailed Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleInputChange}
                      placeholder="Specify your enquiry or details here..."
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-premium/45 focus:ring-1 focus:ring-gold-premium/45 text-sm text-white px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-gold-premium via-gold to-gold-dark hover:opacity-90 disabled:opacity-50 text-black text-xs font-bold uppercase tracking-widest shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {loading ? 'Transmitting Message...' : 'Transmit Message Securely'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
