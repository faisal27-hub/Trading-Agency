import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Heart, 
  Eye, 
  BookOpen, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  CreditCard, 
  UserCheck,
  Clock,
  TrendingUp,
  Activity,
  ArrowUpRight,
  Sliders,
  Layers,
  Compass,
  Wallet,
  Brain,
  Globe,
  Search
} from 'lucide-react';
import { PageTransition } from '../../components/PageTransition';

interface FAQEntry {
  question: string;
  answer: string;
  category: 'general' | 'strategy' | 'safety' | 'funds';
}

export const AboutPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'strategy' | 'safety' | 'funds'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'general', label: 'General Info', icon: UserCheck },
    { id: 'strategy', label: 'Strategies', icon: Cpu },
    { id: 'safety', label: 'Safety & Custody', icon: ShieldCheck },
    { id: 'funds', label: 'Funds & Withdrawals', icon: CreditCard },
  ];

  const faqs: FAQEntry[] = [
    {
      question: 'What is the minimum capital required to get started?',
      answer: 'To maintain proper institutional risk controls and leverage standard currency unit sizes safely, Aurex Capital recommends a starting investment budget of $10,000. This ensures adequate room for drawdowns without triggering forced stop-outs.',
      category: 'general',
    },
    {
      question: 'How does strategy replication work?',
      answer: 'Our quantitative servers replicate trades directly to your broker account using secure read-only/trade API keys. We do not hold power of attorney over your account, and we have absolute zero authorization to withdraw or transfer your funds.',
      category: 'general',
    },
    {
      question: 'How are Aurex Capital strategies protected against market volatility?',
      answer: 'We employ multi-layer risk management including algorithmic hard stops on every position, cross-market correlation filters, and automatic hedging triggers. Our target is never to exceed a maximum historical drawdown of 5% on total capital.',
      category: 'strategy',
    },
    {
      question: 'What models drive the trading execution?',
      answer: 'We utilize quantitative trend-following models, volatility expansion systems, and mean-reversion algorithms that monitor order-flow liquidity imbalances in G10 currencies and highly liquid metals.',
      category: 'strategy',
    },
    {
      question: 'Are my trading records and performance metrics verified by third parties?',
      answer: 'Yes. Our performance dashboard pulls verified metrics directly via read-only APIs from third-party audit sites like Myfxbook. We also supply monthly broker statements audited by reputable global financial accounting firms.',
      category: 'safety',
    },
    {
      question: 'Is Aurex Capital regulated?',
      answer: 'Yes, we are registered compliance partners under GFMA registration number GFMA-2024-AC. We follow strict regulatory practices to protect our quantitative strategies and maintain transparent client coordination.',
      category: 'safety',
    },
    {
      question: 'How do I withdraw my capital, and are there lock-in periods?',
      answer: 'Aurex Capital does not require lock-in terms. Since we trade through secure brokerage accounts under the client name, capital withdrawals can be executed directly from your broker dashboard at any time. Processing times depend on the broker and payment rails, typically taking 24-48 business hours.',
      category: 'funds',
    },
    {
      question: 'Are there any performance fees?',
      answer: 'Yes, we operate on a high-water mark profit share model (typically 20% of net profits generated, billed monthly). If no profits are generated or if the account is in a drawdown, no performance fees are charged.',
      category: 'funds',
    },
  ];

  const expertiseItems = [
    { title: '6+ Years of Forex Experience', icon: Clock, description: 'Over half a decade of hands-on exposure to global currency flows.' },
    { title: 'Advanced Risk Management', icon: ShieldCheck, description: 'Algorithmic stop-outs, position sizing limits, and portfolio protection.' },
    { title: 'Technical Analysis', icon: TrendingUp, description: 'Using statistical patterns, price structures, and indicator data.' },
    { title: 'Price Action Trading', icon: Activity, description: 'Reading raw candlesticks, momentum, and immediate market reaction.' },
    { title: 'Market Structure Analysis', icon: Compass, description: 'Identifying key swing points, market phase shifts, and structure breaks.' },
    { title: 'Trend Identification', icon: ArrowUpRight, description: 'Recognizing primary momentum directions across short and long horizons.' },
    { title: 'Support & Resistance Analysis', icon: Sliders, description: 'Mapping historical supply zones, demand zones, and key pivot levels.' },
    { title: 'Multi-Timeframe Analysis', icon: Layers, description: 'Correlating global trends from monthly charts down to execution minutes.' },
    { title: 'Liquidity & Volatility Analysis', icon: Cpu, description: 'Tracking order block imbalances, spreads, and high-volatility news spikes.' },
    { title: 'Trade Planning & Execution', icon: UserCheck, description: 'Drafting precise trigger criteria before launching any position.' },
    { title: 'Position & Capital Management', icon: Wallet, description: 'Dynamic trailing stops, scale-ins, and strict capital allocation guidelines.' },
    { title: 'Trading Psychology & Discipline', icon: Brain, description: 'Maintaining emotional control, objective execution, and patient patience.' },
    { title: 'Fundamental Market Analysis', icon: Globe, description: 'Monitoring global interest differentials, central bank policies, and CPI data.' },
    { title: 'Portfolio Risk Assessment', icon: CreditCard, description: 'Evaluating correlation risk and historical maximum drawdown boundaries.' },
    { title: 'Continuous Market Research', icon: Search, description: 'Constant model review and validation against evolving market states.' },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            About Aurex Capital
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-premium mx-auto mt-4 mb-6" />
          <p className="text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Established by institutional forex veterans, Aurex Capital delivers quantitative advisory and algorithmic currency execution built on three core pillars: absolute transparency, rigorous risk containment, and zero-latency performance.
          </p>
        </div>
      </section>

      {/* Main Track Record Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/3 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1">
              <h2 className="font-display font-bold text-3xl text-white">
                Over 6+ Years of Forex Market Mastery
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                For 6+ years, our proprietary models have navigated the complex currency landscapes of G10 and liquid emerging markets. We don't guess; we deploy statistical models that leverage global interest rate differentials, order flows, and momentum shifts.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed">
                Our infrastructure is engineered for zero-latency execution. By establishing deep liquidity agreements with top tier-1 prime brokers, we shield our clients from excessive spreads and slippage during volatile news events.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="border-l-2 border-gold-premium pl-4">
                  <span className="font-display font-bold text-2xl text-white">6+ Years</span>
                  <span className="text-xs text-zinc-500 block mt-1">Market Track Record</span>
                </div>
                <div className="border-l-2 border-gold-premium pl-4">
                  <span className="font-display font-bold text-2xl text-white">67.8%</span>
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
                    alt="Aurex Corporate Boardroom"
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

          {/* Company Story Section (Philosophy Removed) */}
          <div className="mb-24">
            <div className="glassmorphism p-8 sm:p-10 rounded-3xl border border-gold-premium/10 flex flex-col justify-between hover:border-gold-premium/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-premium/5 border border-gold-premium/15 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">Our Origin Story</h3>
                <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed mb-4">
                  Aurex Capital was founded by a collaborative of G10 currency desks and high-frequency model architects who observed a widening chasm. High-net-worth individuals and corporate funds lacked access to true institutional-grade currency modeling and algorithmic risk control, left instead with retail brokers that suffered from excessive slippage.
                </p>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  We engineered Aurex Capital to dismantle that barrier. By anchoring our infrastructure in global execution hubs and aligning our goals strictly with investor results, we redefined currency advisory. Today, we manage strategic portfolio replications across the globe under a single principle: math and security, above all else.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
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
          </div>

          {/* Core Values Section */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
                Corporate Tenets
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Our Core Values
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Absolute Transparency',
                  description: 'All strategic performance metrics are fed directly to third-party verification repositories with zero data alteration.',
                },
                {
                  title: 'Rigorous Security',
                  description: 'Capital remains securely inside your tier-1 brokerage account. Our connections operate strictly via trade-only API access.',
                },
                {
                  title: 'Quantitative Precision',
                  description: 'Eliminating behavioral bias by using mathematics, order-flow dynamics, and interest differentials to direct strategy.',
                },
                {
                  title: 'Client-Centric Guardrails',
                  description: 'Hard algorithmic stops on every active position ensure maximum historical drawdowns remain firmly under 5%.',
                },
              ].map((val, idx) => (
                <div key={idx} className="glassmorphism p-6 rounded-2xl border border-zinc-900 hover:border-gold-premium/30 transition-all duration-300">
                  <div className="text-gold font-display font-bold text-lg mb-3">0{idx + 1}</div>
                  <h4 className="font-display font-bold text-md text-white mb-2">{val.title}</h4>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Trading Experience Section */}
          <div className="mb-24 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
                Lead Trader Expertise
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Professional Trading Experience
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3 mb-6" />
              <p className="text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
                Our lead trader brings over <b className="text-white font-bold">6+ years of hands-on experience</b> in the global Forex markets, developing a disciplined and research-driven approach to market analysis and trading strategy.
              </p>
              <p className="text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed text-xs sm:text-sm mt-3">
                With years of practical market exposure, the focus has been on understanding market structure, technical analysis, price action, trend identification, volatility, liquidity, and disciplined execution while maintaining a strong emphasis on risk management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseItems.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="glassmorphism p-6 rounded-2xl border border-zinc-900 hover:border-gold-premium/30 transform hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gold-premium/5 border border-gold-premium/15 flex items-center justify-center shrink-0 group-hover:bg-gold-premium/10 transition-colors">
                      <IconComp className="w-5 h-5 text-gold" />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <h4 className="font-display font-bold text-sm text-white group-hover:text-gold transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-zinc-500 font-light text-[11px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-24 relative">
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gold-premium/3 blur-[120px] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
            <div className="glassmorphism-premium p-8 sm:p-12 rounded-3xl border border-gold-premium/20 text-center max-w-5xl mx-auto relative z-10">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
                The Aurex Advantage
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-4xl text-white mb-6">
                Why Sophisticated Investors Choose Us
              </h3>
              <p className="text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed text-sm sm:text-base mb-10">
                Traditional asset managers demand lock-in periods, pool investor assets together, and bill excessive management fees regardless of yield. Aurex Capital disrupts this model by keeping your money in your absolute custody, charging solely on high-water mark profits.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="border-t border-zinc-800 pt-6">
                  <h4 className="font-display font-bold text-white text-md mb-2">Direct Asset Custody</h4>
                  <p className="text-zinc-500 font-light text-xs leading-relaxed">
                    Your assets are held in your personal, tier-1 regulated broker account. Aurex cannot access, withdraw, or modify fund allocations.
                  </p>
                </div>
                <div className="border-t border-zinc-800 pt-6">
                  <h4 className="font-display font-bold text-white text-md mb-2">No Lock-in Requirements</h4>
                  <p className="text-zinc-500 font-light text-xs leading-relaxed">
                    Withdraw capital or suspend replication keys at any point. You maintain 100% control over liquidity, anytime.
                  </p>
                </div>
                <div className="border-t border-zinc-800 pt-6">
                  <h4 className="font-display font-bold text-white text-md mb-2">High-Water Mark Pricing</h4>
                  <p className="text-zinc-500 font-light text-xs leading-relaxed">
                    We charge a performance fee strictly on net positive profits. If we don’t perform or your account undergoes drawdowns, we earn zero.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24 border-t border-zinc-900 pt-24" id="faq">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
                Inquiry Center
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
              <p className="text-zinc-400 font-light mt-4 leading-relaxed text-sm">
                Immediate answers regarding strategy safety, custody settings, performance registries, and onboarding steps.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => {
                  const IconComp = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id as any);
                        setOpenIndex(null);
                      }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'border-gold-premium bg-gold-premium text-black shadow-lg shadow-gold/15'
                          : 'border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Accordion List */}
              <div className="flex flex-col gap-4">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className="glassmorphism rounded-2xl border border-zinc-900 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleOpen(index)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white hover:text-gold transition-colors focus:outline-none cursor-pointer"
                      >
                        <span className="font-display font-bold text-sm sm:text-base leading-relaxed">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gold-premium shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-zinc-500 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 text-zinc-400 font-light text-xs sm:text-sm leading-relaxed border-t border-zinc-900/50 pt-4 animate-slide-down">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
