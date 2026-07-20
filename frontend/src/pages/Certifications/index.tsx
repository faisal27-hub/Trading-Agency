import React, { useState } from 'react';
import { Award, Shield, CheckCircle, X, Globe } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../../constants';
import type { CertificateItem } from '../../types';
import { PageTransition } from '../../components/PageTransition';

export const CertificationsPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const globalRegulators = [
    { name: 'GFMA Registry', country: 'Global / USA', license: 'GFMA-2024-AC', status: 'Active Compliant' },
    { name: 'International Financial Association (IFA)', country: 'United Kingdom', license: 'IFA-8849-AC', status: 'Active Compliant' },
    { name: 'Swiss Finance Academy Registry', country: 'Switzerland', license: 'SFA-SW-2026', status: 'Accredited member' },
  ];

  return (
    <PageTransition>
      {/* Intro Header */}
      <section className="relative py-20 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-radial-gradient from-gold-premium/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
            Licensing & Registries
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Accreditations & Compliance
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-premium mx-auto mt-4 mb-6" />
          <p className="text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Aurex Capital maintains corporate credentials and operational compliance according to Swiss, UK and global financial standards.
          </p>
        </div>
      </section>

      {/* Main Grid & License Modals */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-premium/3 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="glassmorphism p-6 rounded-2xl border border-gold-premium/10 hover:border-gold-premium/45 transition-all duration-350 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-44 rounded-xl bg-zinc-950/60 border border-zinc-900 flex items-center justify-center relative overflow-hidden group-hover:border-gold-premium/20 transition-all duration-300">
                    <div className="absolute inset-0 bg-radial-gradient from-gold-premium/5 to-transparent pointer-events-none" />
                    <div className="flex flex-col items-center gap-2.5 z-10 text-center px-4">
                      <Award className="w-10 h-10 text-gold-premium group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-display font-bold text-xs uppercase tracking-widest text-zinc-300">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-medium">
                        Accreditation {cert.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-md text-white mt-5 group-hover:text-gold transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed mt-2.5">
                    {cert.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-900/60 pt-4 mt-5 text-[11px] text-gold-premium font-medium">
                  <span>Verification Registry</span>
                  <span className="underline group-hover:text-white transition-colors">
                    View Full Credentials →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Regulator Registry List */}
          <div className="glassmorphism p-8 rounded-2xl border border-zinc-900">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-5 h-5 text-gold-premium" />
              <div>
                <h3 className="font-display font-bold text-lg text-white">Regulatory Ledger Directory</h3>
                <p className="text-xs text-zinc-500 font-light font-sans">Active registration directory entries across corporate jurisdictions.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {globalRegulators.map((reg) => (
                <div key={reg.name} className="p-5 rounded-xl bg-zinc-950 border border-zinc-900 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block">{reg.country}</span>
                    <h4 className="font-display font-bold text-sm text-white mt-1.5">{reg.name}</h4>
                    <span className="text-[11px] font-mono text-gold-premium block mt-2">Ref: {reg.license}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-[10px] text-green-400 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {reg.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verification Lightbox Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fade-in">
          <div className="glassmorphism-premium p-8 rounded-3xl max-w-xl w-full border border-gold-premium/30 relative flex flex-col gap-6 shadow-2xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close credentials"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 border-b border-zinc-900 pb-5">
              <div className="w-12 h-12 rounded-xl bg-gold-premium/5 border border-gold-premium/20 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white">
                  {selectedCert.title}
                </h4>
                <span className="text-xs text-gold-premium font-medium">
                  Official Registry License Status
                </span>
              </div>
            </div>

            <div className="w-full bg-zinc-950/80 border-2 border-dashed border-gold-premium/20 rounded-2xl p-6 text-center flex flex-col items-center gap-4 relative">
              <div className="absolute top-3 right-3 text-[10px] text-zinc-700 font-bold uppercase tracking-wider">
                ORIGINAL LEDGER COPY
              </div>

              <Award className="w-16 h-16 text-gold/80 mb-2" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">
                  Licensed Advisory Entity
                </span>
                <span className="font-display font-bold text-white text-md tracking-wide">
                  Aurex Capital Global Markets Ltd.
                </span>
              </div>

              <div className="h-[1px] w-24 bg-gold-premium/25 my-1" />

              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">
                  Registration Authority
                </span>
                <span className="text-xs font-semibold text-gold-premium">
                  {selectedCert.issuer} — Accredited Year {selectedCert.year}
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-[10px] font-semibold mt-2">
                <CheckCircle className="w-3.5 h-3.5" />
                Active Registration Status: Verified compliant
              </div>
            </div>

            <div className="text-xs text-zinc-400 leading-relaxed font-light mt-1">
              <span className="block font-bold text-white mb-1">Compliance Check Details:</span>
              This certificate registers Aurex Capital as a certified quantitative forex advisor. Operations are audited on a quarterly basis. Database identification token: <b>AC-{selectedCert.id.toUpperCase()}-2026-VAL</b>.
            </div>

            <button
              onClick={() => setSelectedCert(null)}
              className="w-full py-3 rounded-full bg-gradient-to-r from-gold-premium to-gold-dark text-black text-xs font-bold uppercase tracking-widest mt-2 hover:opacity-90 cursor-pointer"
            >
              Close Verification Portal
            </button>
          </div>
        </div>
      )}
    </PageTransition>
  );
};
