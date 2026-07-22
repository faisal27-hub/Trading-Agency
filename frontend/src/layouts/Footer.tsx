import React from 'react';
import { Mail, Clock, ShieldAlert, ArrowUp, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_METADATA } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const quickLinksColumn1 = [
    { label: 'Home', path: '/' },
    { label: 'Our Services', path: '/services' },
    { label: 'Certifications', path: '/certifications' },
  ];

  const quickLinksColumn2 = [
    { label: 'About Us', path: '/about' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const whatsappUrl = `https://wa.me/${SITE_METADATA.whatsappNumber}?text=${encodeURIComponent(SITE_METADATA.whatsappMessage)}`;

  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8 text-zinc-400 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-premium/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-dark/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Identity */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/logo.svg" 
                alt="Aurex Capital Logo" 
                className="h-8 md:h-9 w-auto object-contain select-none"
              />
            </Link>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-light">
              Elite institutional-grade brokerage advisory and currency wealth solutions designed for sophisticated private clients and corporate funds.
            </p>

            {/* Premium Gold Outline Social Media Icons */}
            <div className="flex items-center gap-3 mt-1">
              {/* Instagram */}
              <a
                href={SITE_METADATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-950/80 border border-gold-premium/30 flex items-center justify-center text-gold-premium hover:text-gold hover:border-gold hover:bg-gold-premium/15 hover:shadow-[0_0_16px_rgba(197,160,89,0.35)] hover:-translate-y-1 transition-all duration-300 group"
                aria-label="Follow Aurex Capital on Instagram"
              >
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={SITE_METADATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-950/80 border border-gold-premium/30 flex items-center justify-center text-gold-premium hover:text-gold hover:border-gold hover:bg-gold-premium/15 hover:shadow-[0_0_16px_rgba(197,160,89,0.35)] hover:-translate-y-1 transition-all duration-300 group"
                aria-label="Follow Aurex Capital on Facebook"
              >
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-950/80 border border-gold-premium/30 flex items-center justify-center text-gold-premium hover:text-gold hover:border-gold hover:bg-gold-premium/15 hover:shadow-[0_0_16px_rgba(197,160,89,0.35)] hover:-translate-y-1 transition-all duration-300 group"
                aria-label="Chat with Aurex Capital on WhatsApp"
              >
                <svg 
                  className="w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-110" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs sm:text-sm">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 text-xs sm:text-sm">
              <div className="flex flex-col gap-3.5">
                {quickLinksColumn1.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex items-center gap-2 text-zinc-400 hover:text-gold transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-premium/40 group-hover:bg-gold group-hover:scale-125 transition-all duration-300 shrink-0" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300 whitespace-nowrap">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-3.5">
                {quickLinksColumn2.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex items-center gap-2 text-zinc-400 hover:text-gold transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-premium/40 group-hover:bg-gold group-hover:scale-125 transition-all duration-300 shrink-0" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300 whitespace-nowrap">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Corporate Desk */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs sm:text-sm">
              Corporate Desk
            </h4>
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm font-light">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-premium shrink-0" />
                <a href={`mailto:${SITE_METADATA.email}`} className="hover:text-gold text-zinc-500 transition-colors">
                  {SITE_METADATA.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-premium shrink-0" />
                <a href={`tel:${SITE_METADATA.phone}`} className="hover:text-gold text-zinc-500 transition-colors">
                  {SITE_METADATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-premium shrink-0" />
                <span className="text-zinc-500">{SITE_METADATA.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Risk Disclaimer Summary */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-gold" />
              Risk Notice
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed font-light">
              Forex trading and leveraged investment products carry high risk to your capital. Absolute market volatility, slippage, and execution anomalies can lead to losses exceeding initial deposits. Aurex Capital enforces stringent risk thresholds, but past outcomes do not secure future positive yields. Trade prudently.
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-zinc-900 my-8" />

        {/* Copyright, Regulatory Disclaimer & Terms */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-600 font-light">
          <div className="flex flex-col gap-1 sm:items-start text-center sm:text-left">
            <span>&copy; {currentYear} {SITE_METADATA.name} Global Markets. All rights reserved.</span>
            <span className="text-[10px] text-zinc-700">
              Authorized and regulated under registration number GFMA-2024-AC. Aurex Capital is a registered service mark.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <button
              onClick={handleScrollTop}
              className="p-2.5 rounded-full bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-gold hover:border-gold-premium transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
