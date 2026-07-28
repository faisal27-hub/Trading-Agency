import React, { useState, useEffect } from 'react';
import { Mail, Clock, ShieldAlert, ArrowUp, Phone, X, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_METADATA } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  const quickLinksColumn1 = [
    { label: 'Home', path: '/' },
    { label: 'Our Services', path: '/services' },
    { label: 'Certifications', path: '/certifications' },
  ];

  const quickLinksColumn2 = [
    { label: 'About Us', path: '/about' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Funding Policy', path: '/funding-policy' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const whatsappUrl = `https://wa.me/${SITE_METADATA.whatsappNumber}?text=${encodeURIComponent(SITE_METADATA.whatsappMessage)}`;

  return (
    <>
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
                Aurex Capital is a registered service mark. Institutional advisory & wealth management solutions.
              </span>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveModal('privacy')}
                className="hover:text-gold transition-colors cursor-pointer bg-transparent border-none p-0 text-xs font-light text-zinc-400"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveModal('terms')}
                className="hover:text-gold transition-colors cursor-pointer bg-transparent border-none p-0 text-xs font-light text-zinc-400"
              >
                Terms & Conditions
              </button>
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

      {/* LUXURY LEGAL MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
          {/* Backdrop click listener */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setActiveModal(null)} 
            aria-label="Close modal backdrop"
          />

          <div className="glassmorphism-premium border border-gold-premium/30 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl relative z-10 overflow-hidden my-auto transform transition-all duration-300 scale-100">
            
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-zinc-900 bg-black/60 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-premium/10 border border-gold-premium/30 flex items-center justify-center text-gold">
                  {activeModal === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                  </h3>
                  <span className="text-[11px] text-gold-premium font-mono uppercase tracking-wider block">
                    Aurex Capital Legal Governance
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActiveModal(null)}
                className="p-2.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-gold hover:border-gold-premium transition-all duration-300 cursor-pointer shadow-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              {activeModal === 'privacy' ? (
                <>
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      1. Information We Collect
                    </h4>
                    <p>
                      We collect personal identification data (such as full name, email address, phone number) provided during consultation requests or contact inquiries, as well as account placement parameters shared during onboarding interviews. Additionally, technical and usage analytics (IP addresses, browser type, device information, and interaction logs) are gathered automatically when navigating our platform.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      2. How We Use Your Information
                    </h4>
                    <p>
                      Your information is used to deliver, manage, and optimize institutional advisory services and strategy replication setups; verify client identity and ensure compliance with anti-fraud protocols; communicate important service updates, performance statements, and account notifications; and continuously refine platform functionality.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      3. Data Security
                    </h4>
                    <p>
                      Aurex Capital implements enterprise-grade encryption protocols (TLS/SSL) for all data transmissions. Access to client data is strictly restricted to authorized personnel operating under non-disclosure obligations. Storage systems utilize redundant, firewalled servers with continuous security monitoring.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      4. Confidentiality
                    </h4>
                    <p>
                      We adhere to rigorous corporate confidentiality standards. Client records, financial disclosures, and strategy preferences are never sold, rented, or commercialized to third parties under any circumstances.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      5. Cookies
                    </h4>
                    <p>
                      Our web platform utilizes essential and analytical cookies to remember user preferences, maintain session stability, and measure site performance. Users may modify browser settings to decline non-essential cookies without affecting core site accessibility.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      6. Third-Party Services
                    </h4>
                    <p>
                      We may integrate trusted third-party service providers (such as secure communication APIs or infrastructure analytics tools) under strict confidentiality agreements. Third-party services operate under their respective privacy policies, which we encourage users to review.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      7. User Rights
                    </h4>
                    <p>
                      Clients maintain the right to request access to, correction of, or deletion of their personal information held by Aurex Capital. Inquiries regarding personal data preferences or opt-out requests can be directed to our data protection desk.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      8. Contact Information
                    </h4>
                    <p>
                      For any privacy-related inquiries, data requests, or concerns, please contact our legal desk at <strong className="text-white">{SITE_METADATA.email}</strong> or via WhatsApp at <strong className="text-white">{SITE_METADATA.phone}</strong>.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      1. Acceptance of Terms
                    </h4>
                    <p>
                      By accessing or using the Aurex Capital website and services, you agree to be bound by these Terms & Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you must refrain from using our platform and services.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      2. Description of Services
                    </h4>
                    <p>
                      Aurex Capital provides institutional-grade trading advisory, strategy replication guidance, and market analytics services. Services are provided on an advisory and strategy allocation basis; original capital remains under client custody in designated brokerage accounts.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      3. Client Responsibilities
                    </h4>
                    <p>
                      Clients must provide accurate, complete, and truthful information during consultation and onboarding. Clients are responsible for maintaining the security of their account credentials and reviewing all funding procedures and risk disclosures prior to initiating any transaction.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      4. Payment Terms
                    </h4>
                    <p>
                      Approved funding methods include UPI (for amounts up to ₹50,000) and USDT via Trust Wallet (TRC20 network for amounts above ₹50,000). Performance fees are calculated on a high-water mark net profit-sharing model (80% Client Share / 20% Aurex Capital Performance Fee) as detailed in our Funding & Service Policy. Official payment instructions are provided solely through verified Aurex Capital channels.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      5. Intellectual Property
                    </h4>
                    <p>
                      All content, trademarks, service marks, logo designs, proprietary strategy models, and website architecture are the exclusive property of Aurex Capital Global Markets. Unauthorized copying, reproduction, or redistribution of site assets or proprietary material is strictly prohibited.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      6. Limitation of Liability
                    </h4>
                    <p>
                      Financial trading involves inherent market risk. Aurex Capital is not liable for market losses resulting from global economic events, volatility, slippage, liquidity anomalies, or client-side execution errors. Aurex Capital is not responsible for funds sent to unverified or incorrect third-party wallet addresses or bank accounts.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      7. Service Modifications
                    </h4>
                    <p>
                      Aurex Capital reserves the right to modify, suspend, or update any aspect of its services, site content, or policy terms at any time to reflect operational or regulatory changes.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      8. Termination of Services
                    </h4>
                    <p>
                      Either party may terminate the advisory relationship in accordance with agreed service terms. Upon termination, active strategy links will be safely disconnected.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      9. Governing Law
                    </h4>
                    <p>
                      These Terms & Conditions shall be governed by and construed in accordance with applicable commercial and financial service laws.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-white text-sm sm:text-base text-gold uppercase tracking-wider">
                      10. Contact Information
                    </h4>
                    <p>
                      For questions regarding these Terms & Conditions or general compliance matters, contact our corporate desk at <strong className="text-white">{SITE_METADATA.email}</strong> or <strong className="text-white">{SITE_METADATA.phone}</strong>.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-zinc-900 bg-black/80 flex items-center justify-between shrink-0">
              <span className="text-[10px] text-zinc-500 font-mono">
                Last Updated: July 2026
              </span>
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-gold-premium to-gold-dark hover:from-gold hover:to-gold-premium text-black text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md transition-all duration-300"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
