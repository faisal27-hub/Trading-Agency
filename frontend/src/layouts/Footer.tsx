import React from 'react';
import { Mail, Phone, MapPin, Clock, ShieldAlert, ArrowUp } from 'lucide-react';
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

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8 text-zinc-400 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-premium/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-dark/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Identity */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-premium to-gold flex items-center justify-center shadow-md">
                <span className="font-display font-bold text-black text-lg tracking-tighter">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-md leading-tight tracking-wider text-white">
                  AUREX
                </span>
                <span className="text-[8px] tracking-[0.25em] text-gold-premium uppercase font-medium">
                  CAPITAL
                </span>
              </div>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed font-light">
              Elite institutional-grade brokerage advisory and currency wealth solutions designed for sophisticated private clients and corporate funds.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Telegram', 'Instagram'].map((network) => (
                <a
                  key={network}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-center text-xs hover:text-gold hover:border-gold-premium/45 transition-all duration-300"
                  aria-label={network}
                >
                  {network[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-gold transition-colors duration-200 text-zinc-500 hover:text-zinc-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-sm">
              Corporate Office
            </h4>
            <div className="flex flex-col gap-3.5 text-sm font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-premium shrink-0 mt-0.5" />
                <span className="leading-relaxed text-zinc-500">{SITE_METADATA.officeAddress}</span>
              </div>
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
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-sm flex items-center gap-2">
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
