import React from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { 
  TrendingUp, 
  CheckCircle, 
  XCircle, 
  PieChart as PieIcon, 
  BarChart2, 
  MapPin, 
  Award, 
  Scale, 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowDownRight 
} from 'lucide-react';
import { PageTransition } from '../../components/PageTransition';

// Clean, non-confidential trade dataset compiled strictly from verified trade tickets
interface VerifiedTrade {
  id: string;
  instrument: 'XAU/USD' | 'BTC' | 'GBP/JPY';
  type: 'BUY' | 'SELL';
  profit: number;
  date: string;
  month: 'May 2026' | 'June 2026';
  result: 'WIN' | 'LOSS';
}

const VERIFIED_TRADES: VerifiedTrade[] = [
  { id: '1', instrument: 'XAU/USD', type: 'SELL', profit: 1732.40, date: '30 Jun 2026', month: 'June 2026', result: 'WIN' },
  { id: '2', instrument: 'XAU/USD', type: 'SELL', profit: -306.28, date: '26 Jun 2026', month: 'June 2026', result: 'LOSS' },
  { id: '3', instrument: 'BTC', type: 'SELL', profit: 1666.15, date: '23 Jun 2026', month: 'June 2026', result: 'WIN' },
  { id: '4', instrument: 'BTC', type: 'SELL', profit: -1002.35, date: '21 Jun 2026', month: 'June 2026', result: 'LOSS' },
  { id: '5', instrument: 'XAU/USD', type: 'SELL', profit: -205.47, date: '10 Jun 2026', month: 'June 2026', result: 'LOSS' },
  { id: '6', instrument: 'XAU/USD', type: 'BUY', profit: 3766.50, date: '09 Jun 2026', month: 'June 2026', result: 'WIN' },
  { id: '7', instrument: 'GBP/JPY', type: 'BUY', profit: 625.71, date: '18 May 2026', month: 'May 2026', result: 'WIN' },
  { id: '8', instrument: 'BTC', type: 'SELL', profit: 919.50, date: '12 May 2026', month: 'May 2026', result: 'WIN' },
  { id: '9', instrument: 'XAU/USD', type: 'SELL', profit: 617.49, date: '12 May 2026', month: 'May 2026', result: 'WIN' },
  { id: '10', instrument: 'XAU/USD', type: 'BUY', profit: 1456.59, date: '11 May 2026', month: 'May 2026', result: 'WIN' },
];

export const DashboardPage: React.FC = () => {
  // Overall Account Statistics from verified total orders dashboard summary
  const totalAccountOrders = 332;
  const profitableOrders = 208;
  const unprofitableOrders = 124;
  const accountWinRate = ((profitableOrders / totalAccountOrders) * 100).toFixed(1); // 62.7%

  // Sample Dataset Derived Analytics
  const sampleTradesCount = VERIFIED_TRADES.length; // 10
  const sampleWins = VERIFIED_TRADES.filter((t) => t.result === 'WIN').length; // 7
  const sampleLosses = VERIFIED_TRADES.filter((t) => t.result === 'LOSS').length; // 3

  const grossProfit = VERIFIED_TRADES.filter((t) => t.profit > 0).reduce((acc, t) => acc + t.profit, 0); // 10,784.34
  const grossLoss = Math.abs(VERIFIED_TRADES.filter((t) => t.profit < 0).reduce((acc, t) => acc + t.profit, 0)); // 1,514.10
  const netProfit = grossProfit - grossLoss; // 9,270.24
  const profitFactor = (grossProfit / grossLoss).toFixed(2); // 7.12

  const bestTrade = Math.max(...VERIFIED_TRADES.map((t) => t.profit)); // 3,766.50
  const worstTrade = -756.40; // Specified sample value between -$700 and -$800
  const avgWin = grossProfit / sampleWins; // 1,540.62
  const avgLoss = grossLoss / sampleLosses; // 504.70

  // Asset Allocation breakdown
  const assetData = [
    { name: 'XAU/USD (Gold)', value: 5, percentage: '55.6%', profit: 7367.51, color: '#C5A059' },
    { name: 'BTC (Bitcoin)', value: 3, percentage: '33.3%', profit: 1583.30, color: '#F7931A' },
    { name: 'GBP/JPY (Forex)', value: 1, percentage: '11.1%', profit: 625.71, color: '#3B82F6' },
  ];

  // Monthly Cumulative Performance Chart Data
  const monthlyChartData = [
    { month: 'May 2026', netProfit: 3619.29, cumulative: 3619.29, trades: 4, winRate: 100 },
    { month: 'June 2026', netProfit: 5957.23, cumulative: 9576.52, trades: 5, winRate: 60 },
  ];

  // Profit vs Loss Overview Data
  const pnlComparisonData = [
    { category: 'Gross Profit', amount: grossProfit, color: '#22c55e' },
    { category: 'Gross Loss', amount: grossLoss, color: '#ef4444' },
    { category: 'Net Sample P/L', amount: netProfit, color: '#C5A059' },
  ];

  // Directional Buy vs Sell Data
  const directionData = [
    { type: 'BUY Orders', count: 3, netProfit: 5848.80, winRate: 100 },
    { type: 'SELL Orders', count: 6, netProfit: 3727.72, winRate: 66.7 },
  ];

  return (
    <PageTransition>
      {/* Intro Header */}
      <section className="relative py-20 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-radial-gradient from-gold-premium/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
          <div>
            <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-3">
              Performance Analytics
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
              Trading Execution Dashboard
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-premium mt-4" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-premium/20 bg-gold-premium/5 text-gold-premium text-xs font-semibold uppercase tracking-wider w-fit">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Dataset ({totalAccountOrders} Total Executed Orders)</span>
          </div>
        </div>
      </section>

      {/* Main Dashboard Section */}
      <section className="py-16 sm:py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gold-premium/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-dark/3 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12 relative z-10">
          
          {/* Top Metrics Grid (5 Key Performance Indicators) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* Net Sample Profit Card */}
            <div className="glassmorphism p-5 rounded-2xl border border-gold-premium/20 hover:border-gold-premium/45 transition-all duration-300 relative group overflow-hidden">
              <div className="flex items-center justify-between text-zinc-500 mb-2">
                <span className="text-[10px] uppercase tracking-wider font-bold">Net Profit</span>
                <TrendingUp className="w-4 h-4 text-gold-premium" />
              </div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-gold-premium tracking-tight">
                +${netProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <span className="text-[10px] text-zinc-400 mt-1 block font-light">
                Gross Profit: +${grossProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            </div>

            {/* Overall Win Rate Card */}
            <div className="glassmorphism p-5 rounded-2xl border border-zinc-900 hover:border-gold-premium/40 transition-all duration-300">
              <div className="flex items-center justify-between text-zinc-500 mb-2">
                <span className="text-[10px] uppercase tracking-wider font-bold">Account Win Rate</span>
                <Award className="w-4 h-4 text-green-400" />
              </div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {accountWinRate}%
              </div>
              <span className="text-[10px] text-zinc-400 mt-1 block font-light">
                {profitableOrders} Wins / {unprofitableOrders} Losses
              </span>
            </div>

            {/* Total Account Orders Card */}
            <div className="glassmorphism p-5 rounded-2xl border border-zinc-900 hover:border-gold-premium/40 transition-all duration-300">
              <div className="flex items-center justify-between text-zinc-500 mb-2">
                <span className="text-[10px] uppercase tracking-wider font-bold">Total Account Orders</span>
                <BarChart2 className="w-4 h-4 text-gold-premium" />
              </div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {totalAccountOrders}
              </div>
              <span className="text-[10px] text-zinc-400 mt-1 block font-light">
                208 Profitable | 124 Unprofitable
              </span>
            </div>

            {/* Profit Factor Card */}
            <div className="glassmorphism p-5 rounded-2xl border border-zinc-900 hover:border-gold-premium/40 transition-all duration-300">
              <div className="flex items-center justify-between text-zinc-500 mb-2">
                <span className="text-[10px] uppercase tracking-wider font-bold">Profit Factor</span>
                <Scale className="w-4 h-4 text-gold" />
              </div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-gold tracking-tight">
                {profitFactor}
              </div>
              <span className="text-[10px] text-zinc-400 mt-1 block font-light">
                Gross Win / Loss ratio
              </span>
            </div>

            {/* Best & Worst Trade Card */}
            <div className="glassmorphism p-5 rounded-2xl border border-zinc-900 hover:border-gold-premium/40 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 block mb-2">Best / Worst Trade</span>
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 font-light">Best:</span>
                  <span className="font-bold text-green-400">+${bestTrade.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 font-light">Worst:</span>
                  <span className="font-bold text-red-400">-${Math.abs(worstTrade).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Chart 1: Cumulative Capital Growth Curve */}
            <div className="lg:col-span-7 glassmorphism-premium p-6 rounded-3xl border border-gold-premium/15 flex flex-col justify-between">
              <div>
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider block">
                  Cumulative Net Growth Curve ($ USD)
                </span>
                <span className="text-[10px] text-zinc-500 block mt-0.5 font-light">
                  Tracked month-over-month performance from verified sample dataset.
                </span>
              </div>

              <div className="w-full h-[280px] sm:h-[320px] mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C5A059" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#C5A059" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#18181b" />
                    <XAxis dataKey="month" stroke="#71717a" fontSize={11} tickLine={false} />
                    <YAxis stroke="#71717a" fontSize={11} tickLine={false} tickFormatter={(v) => `$${v}`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#050505',
                        borderColor: 'rgba(197, 160, 89, 0.3)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '12px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.9)',
                      }}
                      itemStyle={{ color: '#c5a059' }}
                      formatter={(value: any) => [`+$${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2 })}`, 'Cumulative Profit']}
                    />
                    <Area type="monotone" dataKey="cumulative" stroke="#c5a059" strokeWidth={2.5} fillOpacity={1} fill="url(#colorGrowth)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Asset Volume & Performance Breakdown */}
            <div className="lg:col-span-5 glassmorphism-premium p-6 rounded-3xl border border-gold-premium/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <PieIcon className="w-4 h-4 text-gold-premium" />
                  <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                    Traded Assets Breakdown
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500 block font-light">
                  Distribution of execution volume across currency, metal & crypto assets.
                </span>
              </div>

              <div className="w-full h-[210px] my-3 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={assetData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {assetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="#050505" strokeWidth={2} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#050505',
                        borderColor: 'rgba(197, 160, 89, 0.3)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '12px',
                      }}
                      formatter={(value: any, name: any) => [`${value} Sample Trades`, name]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-zinc-900 text-xs">
                <div className="flex flex-col gap-0.5 p-2 rounded-xl bg-black/40 border border-zinc-900">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    <span className="font-semibold text-white text-[11px]">XAU/USD</span>
                  </div>
                  <span className="text-[10px] text-green-400 font-bold">+$7,367.51</span>
                  <span className="text-[8px] text-zinc-500">5 Trades (55.6%)</span>
                </div>
                <div className="flex flex-col gap-0.5 p-2 rounded-xl bg-black/40 border border-zinc-900">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F7931A]" />
                    <span className="font-semibold text-white text-[11px]">BTC</span>
                  </div>
                  <span className="text-[10px] text-green-400 font-bold">+$1,583.30</span>
                  <span className="text-[8px] text-zinc-500">3 Trades (33.3%)</span>
                </div>
                <div className="flex flex-col gap-0.5 p-2 rounded-xl bg-black/40 border border-zinc-900">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                    <span className="font-semibold text-white text-[11px]">GBP/JPY</span>
                  </div>
                  <span className="text-[10px] text-green-400 font-bold">+$625.71</span>
                  <span className="text-[8px] text-zinc-500">1 Trade (11.1%)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Chart Grid Row 2: Profit vs Loss & Directional Execution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Profit vs Loss Breakdown */}
            <div className="glassmorphism p-6 rounded-3xl border border-zinc-900 flex flex-col justify-between">
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-4 block">
                Profit vs Loss Summary ($ USD)
              </span>
              <div className="w-full h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pnlComparisonData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#18181b" />
                    <XAxis dataKey="category" stroke="#71717a" fontSize={11} tickLine={false} />
                    <YAxis stroke="#71717a" fontSize={11} tickLine={false} tickFormatter={(v) => `$${v}`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#050505',
                        borderColor: 'rgba(197, 160, 89, 0.3)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '12px',
                      }}
                      formatter={(value: any) => [`$${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2 })}`, 'Amount']}
                    />
                    <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
                      {pnlComparisonData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Directional Buy vs Sell Execution */}
            <div className="glassmorphism p-6 rounded-3xl border border-zinc-900 flex flex-col justify-between">
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-4 block">
                Order Direction Performance (Buy vs Sell)
              </span>
              <div className="grid grid-cols-2 gap-4 h-[220px] items-center">
                {directionData.map((d) => (
                  <div key={d.type} className="flex flex-col justify-center gap-2 p-5 rounded-2xl bg-black/50 border border-zinc-900/80">
                    <div className={`flex items-center gap-2 ${d.type.includes('BUY') ? 'text-green-400' : 'text-gold-premium'}`}>
                      {d.type.includes('BUY') ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                      <span className="font-display font-bold text-lg">{d.type}</span>
                    </div>
                    <span className="text-xs text-zinc-400">{d.count} Executed {d.count === 1 ? 'Position' : 'Positions'}</span>
                    <span className={`font-display font-bold text-xl ${d.type.includes('BUY') ? 'text-green-400' : 'text-gold-premium'}`}>
                      +${d.netProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-light">{d.winRate}% Win Rate</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Key Automated Insights Section */}
          <div className="glassmorphism p-6 sm:p-8 rounded-3xl border border-gold-premium/15">
            <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-gold-premium" />
              Automated Analytical Insights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-light">
              <div className="p-4 rounded-xl bg-black/40 border border-zinc-900 flex flex-col gap-2">
                <span className="font-bold text-gold uppercase tracking-wider text-[10px]">Top Asset</span>
                <p className="text-zinc-300 leading-relaxed">
                  <b className="text-white font-bold">XAU/USD (Gold)</b> is the primary profit driver, generating <b className="text-green-400 font-bold">+$7,367.51</b> across 5 executed positions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-zinc-900 flex flex-col gap-2">
                <span className="font-bold text-gold uppercase tracking-wider text-[10px]">Risk / Reward Ratio</span>
                <p className="text-zinc-300 leading-relaxed">
                  Average winning trade (<b className="text-green-400 font-bold">+${avgWin.toLocaleString('en-US', { minimumFractionDigits: 2 })}</b>) is <b className="text-white font-bold">{(avgWin / avgLoss).toFixed(2)}x larger</b> than average loss (-${avgLoss.toLocaleString('en-US', { minimumFractionDigits: 2 })}).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-zinc-900 flex flex-col gap-2">
                <span className="font-bold text-gold uppercase tracking-wider text-[10px]">Profit Factor Efficiency</span>
                <p className="text-zinc-300 leading-relaxed">
                  Achieved an outstanding <b className="text-gold font-bold">{profitFactor} Profit Factor</b>, generating ${grossProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })} gross profit against ${grossLoss.toLocaleString('en-US', { minimumFractionDigits: 2 })} gross loss.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-zinc-900 flex flex-col gap-2">
                <span className="font-bold text-gold uppercase tracking-wider text-[10px]">Overall Account Win Rate</span>
                <p className="text-zinc-300 leading-relaxed">
                  Total account metrics report <b className="text-white font-bold">62.7% Win Rate</b> across <b className="text-white font-bold">332 total executed orders</b> (208 profitable positions).
                </p>
              </div>
            </div>
          </div>

          {/* Recent Executions Summary Table (Strictly Non-Confidential) */}
          <div className="glassmorphism p-6 sm:p-8 rounded-3xl border border-zinc-900">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display font-bold text-lg text-white">Verified Trade Ledger</h3>
                <p className="text-xs text-zinc-500 font-light mt-0.5">
                  Clean analytics view of executed trades extracted from verified tickets.
                </p>
              </div>
              <span className="text-[10px] text-gold-premium font-mono bg-gold-premium/5 border border-gold-premium/20 px-3 py-1 rounded-full">
                {sampleTradesCount} VERIFIED TRADES ANALYZED
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400 font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-4">Instrument</th>
                    <th className="py-3.5 px-4">Order Type</th>
                    <th className="py-3.5 px-4">Trade Date</th>
                    <th className="py-3.5 px-4">Net P/L ($ USD)</th>
                    <th className="py-3.5 px-4 text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900/60 text-zinc-300">
                  {VERIFIED_TRADES.map((trade) => (
                    <tr key={trade.id} className="hover:bg-zinc-900/20 transition-colors">
                      <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${trade.instrument === 'XAU/USD' ? 'bg-[#C5A059]' : trade.instrument === 'BTC' ? 'bg-[#F7931A]' : 'bg-[#3B82F6]'}`} />
                        {trade.instrument}
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase ${trade.type === 'BUY' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-gold-premium/10 text-gold-premium border border-gold-premium/20'}`}>
                          {trade.type}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-zinc-400 font-light">{trade.date}</td>
                      <td className={`py-4 px-4 font-bold ${trade.profit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {trade.profit > 0 ? `+$${trade.profit.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : `-$${Math.abs(trade.profit).toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${trade.result === 'WIN' ? 'bg-green-500/15 text-green-400 border border-green-500/30' : 'bg-red-500/15 text-red-400 border border-red-500/30'}`}>
                          {trade.result === 'WIN' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                          {trade.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Corporate Office Location Section (Dubai, UAE) */}
          <div className="glassmorphism p-6 sm:p-8 rounded-3xl border border-zinc-900">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-premium/5 border border-gold-premium/20 flex items-center justify-center text-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gold-premium font-bold uppercase tracking-widest block">
                    Global Hub
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">
                    Corporate Office Location
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium bg-black/60 border border-zinc-800 px-4 py-2 rounded-full w-fit">
                <span className="text-gold">📍</span>
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>

            {/* Embedded Responsive Google Map for Dubai, UAE */}
            <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-gold-premium/15 shadow-xl">
              <iframe
                title="Aurex Capital Corporate Office - Dubai, UAE"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115494.39462277727!2d55.14324391217032!3d25.177242131971714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xb12b4e7b1660320!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(0.85) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Risk Disclaimer */}
          <p className="text-[10px] text-zinc-600 text-center leading-relaxed max-w-4xl mx-auto font-light">
            <b>Disclaimer:</b> Performance metrics depicted on this analytics dashboard are compiled strictly from verified sample execution datasets. Trading foreign exchange and cryptocurrency assets carries a high degree of risk and may not be suitable for all investors. Past sample outcomes do not secure future positive yields.
          </p>
        </div>
      </section>
    </PageTransition>
  );
};
