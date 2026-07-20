import React, { useState } from 'react';
import { ShieldCheck, CheckCircle, X, ZoomIn, Award } from 'lucide-react';
import { PageTransition } from '../../components/PageTransition';

export const CertificationsPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const highlights = [
    'Verified Professional Training',
    'Financial Market Education',
    'Risk Management Principles',
    'Trading Strategy Knowledge',
    'Market Analysis Skills',
    'Commitment to Continuous Learning',
  ];

  return (
    <PageTransition>
      {/* Intro Header */}
      <section className="relative py-20 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-radial-gradient from-gold-premium/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3 animate-pulse">
            Professional Credentials
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Accreditations & Verifications
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-premium mx-auto mt-4 mb-6" />
          <p className="text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Aurex Capital believes in absolute transparency. We showcase real, verifiable trading credentials earned by our strategy leaders, reflecting our strict focus on risk limits and capital growth.
          </p>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-premium/3 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Certificate Showcase Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div 
                onClick={() => setLightboxOpen(true)}
                className="glassmorphism p-4 rounded-3xl border border-gold-premium/20 shadow-[0_0_30px_rgba(197,160,89,0.08)] hover:shadow-[0_0_40px_rgba(197,160,89,0.25)] hover:border-gold-premium/45 transition-all duration-500 cursor-pointer group relative overflow-hidden max-w-lg w-full"
              >
                {/* Gold ambient gradient under overlay */}
                <div className="absolute inset-0 bg-radial-gradient from-gold-premium/5 to-transparent pointer-events-none" />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 z-20">
                  <div className="w-12 h-12 rounded-full bg-gold-premium/15 border border-gold-premium/30 flex items-center justify-center text-gold-premium transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-white">
                    View Fullscreen
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-black aspect-[4/3] flex items-center justify-center">
                  <img
                    src="/assets/certs/atlas_funded_certificate.jpg"
                    alt="AtlasFunded Certificate of Achievement"
                    className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
                  />
                </div>

                {/* Footer description on card */}
                <div className="mt-4 flex items-center justify-between text-xs px-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-gold-premium" />
                    <span className="text-zinc-300 font-semibold uppercase tracking-wider text-[10px]">AtlasFunded Verification</span>
                  </div>
                  <span className="text-gold-premium font-bold font-mono text-[10px]">VERIFIED OK</span>
                </div>
              </div>
            </div>

            {/* Right Column: Descriptions & Details */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <div className="flex items-center gap-2 text-gold-premium">
                <ShieldCheck className="w-6 h-6 shrink-0" />
                <span className="text-xs uppercase font-bold tracking-widest mt-0.5">Verified Accreditation</span>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  Professional Trading Certification
                </h2>
                <p className="text-zinc-400 font-light leading-relaxed text-sm sm:text-base">
                  This certification reflects our commitment to continuous professional development, market knowledge, disciplined trading practices, and maintaining high standards of financial education. We believe in combining structured learning with practical market experience to deliver informed market insights and professional client guidance.
                </p>
              </div>

              <div className="h-[1px] w-full bg-zinc-900" />

              {/* Key Highlights Grid */}
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider text-xs">
                  Key Highlights:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-zinc-900/60 hover:border-gold-premium/20 transition-all duration-300 group"
                    >
                      <CheckCircle className="w-5 h-5 text-gold-premium shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-zinc-300 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 animate-fade-in">
          {/* Close trigger on click background */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={() => setLightboxOpen(false)} />
          
          {/* Modal Header */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-8 flex items-center gap-4 z-55">
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-3 rounded-full bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-white transition-colors cursor-pointer shadow-lg hover:border-gold-premium/40"
              aria-label="Close verification portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Fullscreen Certificate Image */}
          <div className="relative max-w-4xl w-full max-h-[85vh] z-55 flex items-center justify-center p-2">
            <img
              src="/assets/certs/atlas_funded_certificate.jpg"
              alt="AtlasFunded Certificate of Achievement Full View"
              className="max-w-full max-h-[80vh] object-contain rounded-xl border border-gold-premium/20 shadow-2xl shadow-black/80 animate-scale-up"
            />
          </div>

          <div className="z-55 mt-4 text-center">
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold font-mono block">
              AtlasFunded Evaluation Certificate — Presented to Amir khan
            </span>
            <span className="text-[10px] text-gold-premium font-medium mt-1 block">
              Accreditation Verification Date: 2026-06-02
            </span>
          </div>
        </div>
      )}
    </PageTransition>
  );
};
