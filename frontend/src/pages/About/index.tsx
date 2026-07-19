import React from 'react';
import { ShieldCheck, Heart, Eye, Users, Award, TrendingUp } from 'lucide-react';
import { PageTransition } from '../../components/PageTransition';

export const AboutPage: React.FC = () => {
  const leadershipTeam = [
    {
      name: 'Alexander Sterling',
      role: 'Chief Executive Officer & Founder',
      bio: 'Former VP of G10 Currency Trading at a Tier-1 investment bank. Over 18 years of quantitative strategy modeling and macro hedging design.',
    },
    {
      name: 'Dr. Marcus Vance',
      role: 'Head of Quantitative Research',
      bio: 'PhD in Mathematical Finance from MIT. Architect of our proprietary volatility forecasting models and latency execution scripts.',
    },
    {
      name: 'Helena Rostov',
      role: 'Chief Compliance & Risk Officer',
      bio: 'Accredited international financial attorney. Ex-regulatory compliance advisor ensuring absolute compliance across GFMA standards.',
    },
  ];

  return (
    <PageTransition>
      {/* Introduction Banner */}
      <section className="relative py-20 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-radial-gradient from-gold-premium/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3 animate-pulse">
            Corporate Profile
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            About Aurelius Capital
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-premium mx-auto mt-4 mb-6" />
          <p className="text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Established by institutional forex veterans, Aurelius Capital delivers quantitative advisory and algorithmic currency execution built on three core pillars: absolute transparency, rigorous risk containment, and zero-latency performance.
          </p>
        </div>
      </section>

      {/* Main Track Record Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/3 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1">
              <span className="text-xs uppercase font-bold text-zinc-500 tracking-wider">
                ESTABLISHED IN 2014
              </span>
              <h2 className="font-display font-bold text-3xl text-white">
                Over a Decade of Forex Market Mastery
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                For more than 12 years, our proprietary models have navigated the complex currency landscapes of G10 and liquid emerging markets. We don't guess; we deploy statistical models that leverage global interest rate differentials, order flows, and momentum shifts.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed">
                Our infrastructure is engineered for zero-latency execution. By establishing deep liquidity agreements with top tier-1 prime brokers, we shield our clients from excessive spreads and slippage during volatile news events.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="border-l-2 border-gold-premium pl-4">
                  <span className="font-display font-bold text-2xl text-white">12+ Years</span>
                  <span className="text-xs text-zinc-500 block mt-1">Market Track Record</span>
                </div>
                <div className="border-l-2 border-gold-premium pl-4">
                  <span className="font-display font-bold text-2xl text-white">99.2%</span>
                  <span className="text-xs text-zinc-500 block mt-1">Client Retention Rate</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-gold-premium/15 to-transparent rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
                <div className="relative overflow-hidden rounded-2xl border border-gold-premium/20 shadow-2xl">
                  <img
                    src="/assets/about_trading_desk.png"
                    alt="Aurelius Corporate Boardroom"
                    className="w-full h-[380px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 glassmorphism rounded-xl">
                    <span className="text-xs font-bold text-gold uppercase tracking-wider block">
                      Institutional Standard
                    </span>
                    <span className="text-[11px] text-zinc-400 font-light mt-1 block">
                      Audited monthly performance by third-party accounting entities.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternating Block: Core Beliefs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="glassmorphism p-8 rounded-2xl hover:border-gold-premium/40 transition-all duration-300 relative group">
              <div className="w-12 h-12 rounded-xl bg-gold-premium/5 border border-gold-premium/15 flex items-center justify-center mb-6 group-hover:bg-gold-premium/10 transition-colors duration-300">
                <Heart className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-4">Our Mission</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                To shield and expand client capital through robust, quantitative forex strategies, bridging the gap between retail investors and elite institutional trading parameters.
              </p>
            </div>

            <div className="glassmorphism p-8 rounded-2xl hover:border-gold-premium/40 transition-all duration-300 relative group">
              <div className="w-12 h-12 rounded-xl bg-gold-premium/5 border border-gold-premium/15 flex items-center justify-center mb-6 group-hover:bg-gold-premium/10 transition-colors duration-300">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-4">Our Vision</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                To become the global standard for transparent wealth management, setting benchmark risk protocols that prove capital safety is the absolute key to compounding growth.
              </p>
            </div>

            <div className="glassmorphism p-8 rounded-2xl hover:border-gold-premium/40 transition-all duration-300 relative group">
              <div className="w-12 h-12 rounded-xl bg-gold-premium/5 border border-gold-premium/15 flex items-center justify-center mb-6 group-hover:bg-gold-premium/10 transition-colors duration-300">
                <ShieldCheck className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-4">Why Trust Us</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                No locked accounts, zero asset manipulation. Your capital stays in your custody at top-tier banks. Our advisory handles strategy replication via secure trade-execution API access only (withdrawal features locked).
              </p>
            </div>
          </div>

          {/* Team / Leadership Section */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
                Expertise & Command
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Our Executive Directors
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipTeam.map((member) => (
                <div
                  key={member.name}
                  className="glassmorphism p-6 rounded-2xl border border-gold-premium/10 hover:border-gold-premium/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Placeholder image representation with stylized vectors */}
                    <div className="w-full h-48 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden mb-6">
                      <div className="absolute inset-0 bg-radial-gradient from-gold-premium/10 to-transparent pointer-events-none" />
                      <Users className="w-12 h-12 text-zinc-600" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">{member.name}</h3>
                    <span className="text-xs font-semibold text-gold-premium uppercase tracking-wider block mt-1">
                      {member.role}
                    </span>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mt-4">
                      {member.bio}
                    </p>
                  </div>
                  <div className="border-t border-zinc-900/60 pt-4 mt-6 flex items-center justify-between text-[10px] text-zinc-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-gold-premium" /> Verified License
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-gold-premium" /> Active Status
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
