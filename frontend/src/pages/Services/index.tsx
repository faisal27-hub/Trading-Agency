import React from 'react';
import { TrendingUp, BarChart2, Briefcase, Cpu, Shield, Headphones, Check, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../../constants';
import { PageTransition } from '../../components/PageTransition';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ComponentType<any>> = {
  TrendingUp,
  BarChart2,
  Briefcase,
  Cpu,
  Shield,
  Headphones,
};

export const ServicesPage: React.FC = () => {
  const serviceTiers = [
    {
      name: 'Private Client Account',
      minDeposit: '$10,000',
      description: 'Designed for individual qualified investors requiring automated quant replication and risk containment.',
      features: [
        'Read-only API key strategy replication',
        'Standard 5% historical drawdown ceiling',
        'Direct broker custody (tier-1 banks)',
        'Weekly performance accounting statements',
        'Access to daily macro market review reports',
      ],
    },
    {
      name: 'Professional Fund',
      minDeposit: '$100,000',
      description: 'Engineered for asset managers, syndicates, and high net worth individuals seeking custom hedge portfolios.',
      features: [
        'Bespoke multi-currency pair correlation profiles',
        'Drawdown threshold adjustment (2% - 8%)',
        'Dedicated portfolio manager console access',
        'Daily audited Myfxbook data synchronization',
        '24/5 phone & WhatsApp priority support desk',
      ],
    },
    {
      name: 'Corporate / Institutional',
      minDeposit: '$500,000+',
      description: 'Corporate capital shielding strategies with custom liquidity routing and algorithmic tail hedging.',
      features: [
        'Multi-broker custom execution scripts',
        'Institutional tier-1 prime broker spreads',
        'Hard stop-out contract protection protocols',
        'Dedicated compliance officer audit statements',
        'Custom integration via REST/Fix API channels',
      ],
    },
  ];

  return (
    <PageTransition>
      {/* Intro Header */}
      <section className="relative py-20 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-radial-gradient from-gold-premium/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
            Corporate Offerings
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Our Premium Services
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-premium mx-auto mt-4 mb-6" />
          <p className="text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Aurelius Capital provides institutional forex trading infrastructure, bespoke macro analysis, and active wealth preservation services under secure capital custody conditions.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-premium/3 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {SERVICES_DATA.map((service) => {
              const IconComponent = iconMap[service.iconName] || Briefcase;
              return (
                <div
                  key={service.id}
                  className="glassmorphism p-8 rounded-2xl hover:border-gold-premium/45 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gold-premium/5 border border-gold-premium/15 flex items-center justify-center mb-6 group-hover:bg-gold-premium/10 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-4 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center justify-between text-xs text-gold-premium group-hover:text-white transition-colors duration-300 font-semibold uppercase tracking-wider">
                    <span>Institutional Standard</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing/Service Tiers Section */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
                Account Architecture
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Our Strategic Tiers
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="glassmorphism-premium p-8 rounded-3xl border border-gold-premium/10 hover:border-gold-premium/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-premium/5 blur-xl rounded-full" />
                  
                  <div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-xs text-zinc-500 font-medium">Minimum Placement:</span>
                      <span className="text-xl font-display font-bold text-gold-premium">{tier.minDeposit}</span>
                    </div>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    <div className="h-[1px] w-full bg-zinc-900 my-4" />

                    <ul className="flex flex-col gap-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-light">
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/consultation"
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-premium to-gold-dark hover:from-gold hover:to-gold-premium text-black text-xs font-bold uppercase tracking-widest block text-center shadow-lg hover:shadow-gold/15 transition-all duration-300"
                    >
                      Initialize Setup Protocol
                    </Link>
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
