import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Cpu, CreditCard, UserCheck } from 'lucide-react';
import { PageTransition } from '../../components/PageTransition';

interface FAQEntry {
  question: string;
  answer: string;
  category: 'general' | 'strategy' | 'safety' | 'funds';
}

export const FAQPage: React.FC = () => {
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
      answer: 'To maintain proper institutional risk controls and leverage standard currency unit sizes safely, Aurelius Capital recommends a starting investment budget of $10,000. This ensures adequate room for drawdowns without triggering forced stop-outs.',
      category: 'general',
    },
    {
      question: 'How does strategy replication work?',
      answer: 'Our quantitative servers replicate trades directly to your broker account using secure read-only/trade API keys. We do not hold power of attorney over your account, and we have absolute zero authorization to withdraw or transfer your funds.',
      category: 'general',
    },
    {
      question: 'How are Aurelius Capital strategies protected against market volatility?',
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
      question: 'Is Aurelius Capital regulated?',
      answer: 'Yes, we are registered compliance partners under GFMA registration number GFMA-2024-AC. We follow strict regulatory practices to protect our quantitative strategies and maintain transparent client coordination.',
      category: 'safety',
    },
    {
      question: 'How do I withdraw my capital, and are there lock-in periods?',
      answer: 'Aurelius Capital does not require lock-in terms. Since we trade through secure brokerage accounts under the client name, capital withdrawals can be executed directly from your broker dashboard at any time. Processing times depend on the broker and payment rails, typically taking 24-48 business hours.',
      category: 'funds',
    },
    {
      question: 'Are there any performance fees?',
      answer: 'Yes, we operate on a high-water mark profit share model (typically 20% of net profits generated, billed monthly). If no profits are generated or if the account is in a drawdown, no performance fees are charged.',
      category: 'funds',
    },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageTransition>
      {/* Intro Header */}
      <section className="relative py-20 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-radial-gradient from-gold-premium/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
            Inquiry Center
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-premium mx-auto mt-4 mb-6" />
          <p className="text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Find immediate answers regarding strategy safety, custody settings, performance registries, and onboarding steps.
          </p>
        </div>
      </section>

      {/* Category Tabs & Accordions */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-premium/3 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6">
          
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
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
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
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-gold transition-colors focus:outline-none cursor-pointer"
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
      </section>
    </PageTransition>
  );
};
