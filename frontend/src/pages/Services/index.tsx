import React from 'react';
import { 
  TrendingUp, 
  BarChart2, 
  Briefcase, 
  Cpu, 
  Shield, 
  Headphones, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Network,
  HardDrive
} from 'lucide-react';
import { SERVICES_DATA, TIMELINE_DATA } from '../../constants';
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
      name: 'STARTER PLAN',
      minDeposit: '$500',
      description: 'Ideal for individual market participants seeking basic consultation, strategy alignment, and key risk indicators.',
      features: [
        'Initial Consultation',
        'Personalized Strategy Discussion',
        'Market Analysis',
        'Risk Management Guidance',
        'Monthly Review',
        'Email Support',
      ],
    },
    {
      name: 'PROFESSIONAL PLAN',
      minDeposit: '$1,000',
      description: 'Designed for active allocators requiring advanced volatility modeling, portfolio reviews, and direct communication lines.',
      features: [
        'Advanced Consultation',
        'Personalized Trading Strategy',
        'Portfolio Review',
        'Priority WhatsApp Support',
        'Market Updates',
        'Performance Review Sessions',
      ],
    },
    {
      name: 'PREMIUM PLAN',
      minDeposit: '$2,000',
      description: 'Bespoke continuous strategy auditing, tailored market approaches, and long-term private wealth advisory.',
      features: [
        'Dedicated Consultation',
        'Tailored Market Strategy',
        'Advanced Portfolio Discussions',
        'Priority Support',
        'Long-Term Advisory',
        'Premium Client Experience',
      ],
    },
  ];

  const techStack = [
    {
      title: 'Zero Latency Bridges',
      description: 'Custom MT4/MT5 and direct FIX protocol integrations connect our strategy server clusters directly to prime broker execution engines, achieving average orders execution under 8ms.',
      icon: Cpu,
    },
    {
      title: 'API-Only Strategy Mirroring',
      description: 'Your capital remains securely in your custody. Our strategy server replica communicates with your broker via secure trade-execution API keys only. Withdrawal features are locked.',
      icon: ShieldCheck,
    },
    {
      title: 'Tier-1 Liquidity Providers',
      description: 'By partnering with major global prime brokers, our trade flows are routed directly to liquid pools. This protects transactions from slippage and guarantees raw spreads.',
      icon: Network,
    },
    {
      title: 'Multi-Core Server Redundancy',
      description: 'Our proprietary servers are co-located in Equinix LD4 (London) and NY4 (New York) data centers, operating with active backup links to prevent trade disruptions.',
      icon: HardDrive,
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
            Aurex Capital provides institutional forex trading infrastructure, bespoke macro analysis, and active wealth preservation services under secure capital custody conditions.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden border-b border-zinc-900">
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
                      to="/contact"
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-premium to-gold-dark hover:from-gold hover:to-gold-premium text-black text-xs font-bold uppercase tracking-widest block text-center shadow-lg hover:shadow-gold/15 transition-all duration-300"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trading Approach Section (Timeline) */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden border-b border-zinc-900" id="approach">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-premium/3 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
              Operational Blueprint
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Onboarding & Replication Journey
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center vertical line for desktop, left line for mobile */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-premium/40 via-gold/20 to-transparent transform md:-translate-x-1/2" />

            <div className="flex flex-col gap-10 sm:gap-12">
              {TIMELINE_DATA.map((step, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={step.number}
                    className="relative flex flex-col md:flex-row items-start md:items-center w-full group"
                  >
                    {/* Timeline Node Dot */}
                    <div className="absolute left-[9px] md:left-1/2 top-6 md:top-1/2 w-4 h-4 rounded-full bg-black border-2 border-gold-premium z-20 transform -translate-x-1/2 md:-translate-y-1/2 group-hover:scale-125 group-hover:bg-gold group-hover:border-white shadow-[0_0_12px_rgba(197,160,89,0.5)] transition-all duration-300" />

                    {/* Desktop Left Column */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-10">
                      {isEven ? (
                        <div className="glassmorphism p-6 sm:p-8 rounded-2xl hover:border-gold-premium/45 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.1)]">
                          <span className="font-display font-extrabold text-2xl text-gold-premium/40 block mb-1">
                            {step.number}
                          </span>
                          <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-gold transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-sm text-zinc-400 font-light leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        <div className="hidden md:block" />
                      )}
                    </div>

                    {/* Desktop Right Column */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-10">
                      {!isEven ? (
                        <div className="glassmorphism p-6 sm:p-8 rounded-2xl hover:border-gold-premium/45 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.1)]">
                          <span className="font-display font-extrabold text-2xl text-gold-premium/40 block mb-1">
                            {step.number}
                          </span>
                          <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-gold transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-sm text-zinc-400 font-light leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        <div className="hidden md:block" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Infrastructure Details */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-premium/3 blur-[130px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
              Infrastructure Details
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Next-Gen Quantitative Ecosystem
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            <p className="text-zinc-400 font-light mt-6 leading-relaxed text-sm">
              We leverage cutting-edge computer clusters and dedicated network pathways to guarantee that strategies replicate to custody accounts instantaneously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((tech) => {
              const IconComp = tech.icon;
              return (
                <div
                  key={tech.title}
                  className="glassmorphism p-8 rounded-2xl hover:border-gold-premium/30 transition-all duration-300 flex gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-premium/5 border border-gold-premium/15 flex items-center justify-center shrink-0">
                    <IconComp className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-bold text-lg text-white">{tech.title}</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
