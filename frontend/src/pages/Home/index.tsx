import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ArrowUpRight, TrendingUp, ShieldCheck, Briefcase, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../../components/PageTransition';

export const Home: React.FC = () => {
  const [tickerPrices, setTickerPrices] = useState({
    eurusd: 1.0924,
    gbpusd: 1.2742,
    usdjpy: 156.64,
    xauusd: 2342.15,
  });

  const [priceDirections, setPriceDirections] = useState({
    eurusd: true,
    gbpusd: true,
    usdjpy: false,
    xauusd: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerPrices((prev) => {
        const diffs = {
          eurusd: (Math.random() - 0.5) * 0.0006,
          gbpusd: (Math.random() - 0.5) * 0.0008,
          usdjpy: (Math.random() - 0.5) * 0.12,
          xauusd: (Math.random() - 0.5) * 1.5,
        };

        const next = {
          eurusd: parseFloat((prev.eurusd + diffs.eurusd).toFixed(4)),
          gbpusd: parseFloat((prev.gbpusd + diffs.gbpusd).toFixed(4)),
          usdjpy: parseFloat((prev.usdjpy + diffs.usdjpy).toFixed(2)),
          xauusd: parseFloat((prev.xauusd + diffs.xauusd).toFixed(2)),
        };

        setPriceDirections({
          eurusd: next.eurusd >= prev.eurusd,
          gbpusd: next.gbpusd >= prev.gbpusd,
          usdjpy: next.usdjpy >= prev.usdjpy,
          xauusd: next.xauusd >= prev.xauusd,
        });

        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden bg-black pb-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-45"
          style={{ backgroundImage: "url('/assets/hero_trading_room.png')" }}
        >
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/85 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/90" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-premium/10 blur-[130px] rounded-full pointer-events-none animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gold-dark/5 blur-[120px] rounded-full pointer-events-none animate-pulse duration-[6000ms]" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow py-12 relative z-10 w-full">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-premium/20 bg-gold-premium/5 text-gold-premium text-xs font-semibold uppercase tracking-widest w-fit shadow-md shadow-gold/5"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Institutional Forex Wealth Management
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight"
            >
              Forging Wealth Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark text-glow-gold">
                Algorithmic Precision
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              Bespoke currency strategy models, rigorous risk management frameworks, and dynamic real-time reporting engineered to secure capital and grow wealth in global liquid markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <Link
                to="/consultation"
                className="flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-gold-premium via-gold to-gold-dark hover:from-gold hover:to-gold-premium text-black font-bold uppercase tracking-wider text-xs shadow-xl shadow-gold/15 hover:shadow-gold/30 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2.5 px-7 py-4 rounded-full border border-zinc-800 hover:border-gold-premium/45 bg-zinc-950/70 hover:bg-zinc-900/60 text-white font-semibold uppercase tracking-wider text-xs transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right Card Grid */}
          <div className="lg:col-span-5 flex flex-col gap-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="glassmorphism-premium p-6 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-premium/5 blur-xl rounded-full" />
              <span className="text-[10px] uppercase font-bold text-gold-premium tracking-widest">
                Performance Snapshot
              </span>
              <div className="mt-4 grid grid-cols-2 gap-6">
                <div>
                  <span className="text-xs text-zinc-500 font-light block">Avg. Monthly ROI</span>
                  <span className="font-display font-bold text-2xl text-white mt-1 block tracking-tight">
                    +4.30%
                  </span>
                </div>
                <div>
                  <span className="text-xs text-zinc-500 font-light block">Audited Win Rate</span>
                  <span className="font-display font-bold text-2xl text-white mt-1 block tracking-tight">
                    68.4%
                  </span>
                </div>
                <div>
                  <span className="text-xs text-zinc-500 font-light block">Asset Advisory</span>
                  <span className="font-display font-bold text-2xl text-white mt-1 block tracking-tight">
                    $45M+
                  </span>
                </div>
                <div>
                  <span className="text-xs text-zinc-500 font-light block">Profit Factor</span>
                  <span className="font-display font-bold text-2xl text-gold-premium mt-1 block tracking-tight">
                    2.10
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glassmorphism p-5 rounded-2xl flex items-center justify-between border-l-4 border-l-gold"
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-semibold">
                    Active Execution
                  </span>
                  <span className="text-sm font-medium text-white mt-0.5">
                    GBP/USD Hedged Short Position
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-zinc-500 block">Spread Risk</span>
                <span className="text-xs font-semibold text-gold-premium">Tight &lt; 0.4 Pips</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-12 -right-6 hidden sm:flex items-center gap-2 bg-zinc-950/90 border border-gold-premium/30 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-2xl"
            >
              <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-zinc-500 uppercase font-bold">Sharpe Ratio</span>
                <span className="text-xs font-bold text-white">2.35 (Risk Adjusted)</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Live Ticker */}
        <div className="w-full bg-zinc-950/80 border-t border-zinc-900/60 backdrop-blur-lg py-3.5">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 md:gap-16 items-center justify-between overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2 shrink-0 border-r border-zinc-800 pr-6">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Live Feeds
              </span>
            </div>

            <div className="flex items-center justify-between flex-grow gap-8 md:gap-16">
              {/* EUR/USD */}
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-white">EUR/USD</span>
                <span className="text-xs font-display font-medium text-zinc-300">
                  {tickerPrices.eurusd.toFixed(4)}
                </span>
                <span
                  className={`text-[10px] font-semibold flex items-center ${
                    priceDirections.eurusd ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {priceDirections.eurusd ? '▲' : '▼'}
                </span>
              </div>

              {/* GBP/USD */}
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-white">GBP/USD</span>
                <span className="text-xs font-display font-medium text-zinc-300">
                  {tickerPrices.gbpusd.toFixed(4)}
                </span>
                <span
                  className={`text-[10px] font-semibold flex items-center ${
                    priceDirections.gbpusd ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {priceDirections.gbpusd ? '▲' : '▼'}
                </span>
              </div>

              {/* USD/JPY */}
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-white">USD/JPY</span>
                <span className="text-xs font-display font-medium text-zinc-300">
                  {tickerPrices.usdjpy.toFixed(2)}
                </span>
                <span
                  className={`text-[10px] font-semibold flex items-center ${
                    priceDirections.usdjpy ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {priceDirections.usdjpy ? '▲' : '▼'}
                </span>
              </div>

              {/* Gold XAU/USD */}
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-white">XAU/USD (Gold)</span>
                <span className="text-xs font-display font-medium text-zinc-300">
                  ${tickerPrices.xauusd.toFixed(2)}
                </span>
                <span
                  className={`text-[10px] font-semibold flex items-center ${
                    priceDirections.xauusd ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {priceDirections.xauusd ? '▲' : '▼'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
              Corporate Philosophy
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Our Foundational Columns
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-premium mx-auto mt-4" />
            <p className="text-zinc-400 font-light mt-6 leading-relaxed">
              We operate at the intersection of quantitative analysis, robust capital shielding, and professional advisory. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="glassmorphism p-8 rounded-2xl hover:border-gold-premium/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gold-premium/5 border border-gold-premium/15 flex items-center justify-center mb-6 group-hover:bg-gold-premium/10 transition-colors duration-300">
                <Briefcase className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-4">Elite Wealth Advisory</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed mb-4">
                Tailored asset frameworks focused on long-term compound growth while maintaining absolute liquidity and custody control.
              </p>
              <Link to="/services" className="text-xs font-semibold text-gold hover:text-gold-light flex items-center gap-1">
                View Services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Column 2 */}
            <div className="glassmorphism p-8 rounded-2xl hover:border-gold-premium/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gold-premium/5 border border-gold-premium/15 flex items-center justify-center mb-6 group-hover:bg-gold-premium/10 transition-colors duration-300">
                <Zap className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-4">Quantitative Execution</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed mb-4">
                Zero-latency algorithmic strategy execution with tier-1 prime brokers, shielding client capital from slippage.
              </p>
              <Link to="/trading-approach" className="text-xs font-semibold text-gold hover:text-gold-light flex items-center gap-1">
                Our Blueprint <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Column 3 */}
            <div className="glassmorphism p-8 rounded-2xl hover:border-gold-premium/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gold-premium/5 border border-gold-premium/15 flex items-center justify-center mb-6 group-hover:bg-gold-premium/10 transition-colors duration-300">
                <ShieldCheck className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-4">Strict Risk Parameters</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed mb-4">
                Algorithmic stop-outs, automated hedging mechanisms, and a historical maximum drawdown threshold capped at 5%.
              </p>
              <Link to="/performance" className="text-xs font-semibold text-gold hover:text-gold-light flex items-center gap-1">
                Live Metrics <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-gold-premium/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Ready to Amplify Your Portfolio?
          </h2>
          <p className="text-zinc-400 font-light mt-4 mb-8 leading-relaxed max-w-xl mx-auto text-sm sm:text-base">
            Consult with our senior strategy advisors to configure secure read-write API replication and begin scaling your wealth safely.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/consultation"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-premium to-gold-dark text-black font-bold uppercase tracking-wider text-xs shadow-lg hover:opacity-90 transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation Session
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 bg-zinc-950 text-white font-semibold uppercase tracking-wider text-xs hover:border-gold-premium/45 transition-all duration-300"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
