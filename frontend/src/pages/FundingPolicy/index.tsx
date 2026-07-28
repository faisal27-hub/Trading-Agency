import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  ShieldCheck, 
  QrCode, 
  Wallet, 
  AlertTriangle, 
  CheckCircle2, 
  Calendar, 
  MessageSquare, 
  FileText, 
  CreditCard, 
  Share2, 
  Zap, 
  Receipt, 
  Image as ImageIcon, 
  User, 
  PieChart, 
  Lock, 
  CheckSquare, 
  Archive, 
  BookOpen, 
  Headphones, 
  MessageCircle, 
  BarChart3, 
  Clock, 
  Award, 
  Mail, 
  ArrowRight, 
  Phone,
  Info,
  Sparkles
} from 'lucide-react';
import { PageTransition } from '../../components/PageTransition';
import { SITE_METADATA } from '../../constants';

export const FundingPolicyPage: React.FC = () => {
  const fundingProcessSteps = [
    {
      step: '01',
      title: 'Book Your Consultation',
      description: 'Schedule an initial session with our advisory team to discuss your investment objectives and capital size.',
      icon: Calendar,
    },
    {
      step: '02',
      title: 'Discuss Your Requirements',
      description: 'Review trading strategy parameters, risk thresholds, and select your preferred account structure.',
      icon: MessageSquare,
    },
    {
      step: '03',
      title: 'Receive Official Funding Instructions',
      description: 'Get verified payment details sent exclusively through Aurex Capital official communication channels.',
      icon: FileText,
    },
    {
      step: '04',
      title: 'Complete Your Payment',
      description: 'Transfer funds using approved methods: UPI for up to ₹50,000 or USDT via Trust Wallet for higher amounts.',
      icon: CreditCard,
    },
    {
      step: '05',
      title: 'Share Your Payment Confirmation',
      description: 'Submit your UTR/Transaction ID, payment screenshot, and registered full name for rapid verification.',
      icon: Share2,
    },
    {
      step: '06',
      title: 'Payment Verification',
      description: 'Our compliance and accounts team validates the transaction against official banking and blockchain records.',
      icon: ShieldCheck,
    },
    {
      step: '07',
      title: 'Service Activation',
      description: 'Your capital advisory services are activated and trading strategy execution commences under agreed parameters.',
      icon: Zap,
    },
  ];

  const clientResponsibilities = [
    {
      title: 'Complete Information',
      desc: 'Provide complete and accurate information during consultation and onboarding.',
      icon: FileText,
    },
    {
      title: 'Follow Procedures',
      desc: "Follow Aurex Capital's onboarding procedures diligently for seamless activation.",
      icon: CheckSquare,
    },
    {
      title: 'Retain Records',
      desc: 'Retain payment confirmations and transaction records for future verification and accounting.',
      icon: Archive,
    },
    {
      title: 'Review Policies',
      desc: 'Review all company policies before funding to ensure full alignment with our terms.',
      icon: BookOpen,
    },
    {
      title: 'Support Reachout',
      desc: 'Contact our support team whenever assistance or clarification is required.',
      icon: Headphones,
    },
  ];

  const companyResponsibilities = [
    {
      title: 'Professional Communication',
      desc: 'Maintain clear, respectful, and prompt professional communication at all times.',
      icon: MessageCircle,
    },
    {
      title: 'Transparent Reporting',
      desc: 'Deliver transparent reporting with accurate trade breakdowns and account metrics.',
      icon: BarChart3,
    },
    {
      title: 'Strict Confidentiality',
      desc: 'Protect client information with strict confidentiality protocols and security safeguards.',
      icon: Lock,
    },
    {
      title: 'Timely Customer Support',
      desc: 'Provide timely customer support to handle client inquiries efficiently.',
      icon: Clock,
    },
    {
      title: 'Excellence in Onboarding',
      desc: 'Ensure a professional onboarding experience from consultation through service execution.',
      icon: Award,
    },
  ];

  const whatsappUrl = `https://wa.me/${SITE_METADATA.whatsappNumber}?text=${encodeURIComponent(
    'Hello Aurex Capital,\n\nI have reviewed your Funding & Service Policy and would like to ask a question.'
  )}`;

  return (
    <PageTransition>
      {/* HERO SECTION */}
      <section className="relative py-20 sm:py-24 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-radial-gradient from-gold-premium/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-premium/5 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-premium/10 border border-gold-premium/30 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-premium animate-pulse" />
            <span className="text-xs uppercase font-bold text-gold-premium tracking-widest">
              Institutional Governance
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Funding & Service Policy
          </h1>
          
          <div className="w-20 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-premium mx-auto mt-5 mb-6 rounded-full" />
          
          <p className="text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Learn about our approved funding methods, payment procedures, profit-sharing structure, reporting process, and important client policies before getting started with Aurex Capital.
          </p>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="bg-zinc-950 text-zinc-300 relative overflow-hidden">
        {/* Ambient Lighting FX */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold-premium/3 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gold-dark/3 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 space-y-24">

          {/* SECTION 1 — Funding Methods */}
          <section className="space-y-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-2">
                01. Capital Deposit Channels
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Funding Methods
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CARD 1: UPI Payment */}
              <div className="glassmorphism p-8 sm:p-10 rounded-3xl border border-gold-premium/20 hover:border-gold-premium/45 transition-all duration-300 relative group flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gold-premium/10 border border-gold-premium/25 flex items-center justify-center text-gold group-hover:scale-105 transition-transform duration-300">
                      <QrCode className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gold-premium/15 border border-gold-premium/30 text-gold-premium text-[11px] font-bold uppercase tracking-wider font-mono">
                      Up to ₹50,000
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-gold transition-colors">
                      UPI Payment
                    </h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">
                      UPI payments are accepted only for funding amounts up to ₹50,000.
                    </p>
                  </div>

                  <div className="h-[1px] w-full bg-zinc-900" />

                  <ul className="space-y-3.5">
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white font-medium">Maximum UPI Funding Limit:</strong> ₹50,000
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>Official payment details will only be shared after your consultation has been completed.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>Payments should only be sent to the official Aurex Capital UPI ID provided by our team.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CARD 2: USDT via Trust Wallet */}
              <div className="glassmorphism p-8 sm:p-10 rounded-3xl border border-gold-premium/20 hover:border-gold-premium/45 transition-all duration-300 relative group flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gold-premium/10 border border-gold-premium/25 flex items-center justify-center text-gold group-hover:scale-105 transition-transform duration-300">
                      <Wallet className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gold-premium/15 border border-gold-premium/30 text-gold-premium text-[11px] font-bold uppercase tracking-wider font-mono">
                      Above ₹50,000
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-gold transition-colors">
                      USDT via Trust Wallet
                    </h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">
                      Funding amounts above ₹50,000 should be transferred using USDT through Trust Wallet.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 border border-zinc-800 text-xs text-zinc-300 font-medium">
                    <span className="text-zinc-500">Preferred Network:</span>
                    <span className="text-gold font-bold font-mono">TRC20</span>
                  </div>

                  {/* Premium Warning Box */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/30 to-black/80 border border-amber-500/30 text-amber-200/90 text-xs space-y-2.5">
                    <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px] mb-1">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>Important Transfer Protocol</span>
                    </div>
                    <ul className="space-y-2 font-light list-disc list-inside text-amber-100/80 leading-relaxed">
                      <li>Carefully verify the wallet address before sending any funds.</li>
                      <li>Ensure you select the correct blockchain network.</li>
                      <li>Transactions sent using an incorrect wallet address or network cannot be recovered.</li>
                      <li>Official wallet details will only be shared after consultation and payment confirmation.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 — Funding Process (Timeline) */}
          <section className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-2">
                02. Step-by-Step Blueprint
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Funding Process
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Vertical timeline line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-premium/50 via-gold/30 to-transparent transform md:-translate-x-1/2" />

              <div className="space-y-8 sm:space-y-10 relative z-10">
                {fundingProcessSteps.map((item, index) => {
                  const isEven = index % 2 === 0;
                  const IconComp = item.icon;

                  return (
                    <div
                      key={item.step}
                      className="relative flex flex-col md:flex-row items-start md:items-center w-full group"
                    >
                      {/* Central Node Icon */}
                      <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border-2 border-gold-premium text-gold flex items-center justify-center z-20 group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.4)]">
                        <IconComp className="w-4 h-4" />
                      </div>

                      {/* Left Column (Desktop) */}
                      <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-12">
                        {isEven ? (
                          <div className="glassmorphism p-6 rounded-2xl border border-gold-premium/15 hover:border-gold-premium/45 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(197,160,89,0.1)]">
                            <span className="font-mono text-xs font-bold text-gold-premium block mb-1">
                              STEP {item.step}
                            </span>
                            <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-gold transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        ) : (
                          <div className="hidden md:block" />
                        )}
                      </div>

                      {/* Right Column (Desktop) */}
                      <div className="w-full md:w-1/2 pl-16 md:pl-12">
                        {!isEven ? (
                          <div className="glassmorphism p-6 rounded-2xl border border-gold-premium/15 hover:border-gold-premium/45 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(197,160,89,0.1)]">
                            <span className="font-mono text-xs font-bold text-gold-premium block mb-1">
                              STEP {item.step}
                            </span>
                            <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-gold transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                              {item.description}
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
          </section>

          {/* SECTION 3 — Payment Confirmation */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-2">
                03. Verification Protocol
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Payment Confirmation
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>

            <div className="glassmorphism-premium p-8 sm:p-12 rounded-3xl border border-gold-premium/25 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-premium/5 blur-3xl rounded-full pointer-events-none" />

              <p className="text-center text-white font-medium text-base sm:text-lg mb-8">
                After completing your payment, please provide the following:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-black/60 border border-gold-premium/20 hover:border-gold transition-all duration-300 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-premium/10 flex items-center justify-center text-gold">
                    <Receipt className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">Transaction ID / UTR Number</h4>
                  <p className="text-xs text-zinc-400 font-light">
                    Unique reference number generated by your banking app or crypto wallet.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-black/60 border border-gold-premium/20 hover:border-gold transition-all duration-300 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-premium/10 flex items-center justify-center text-gold">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">Payment Screenshot</h4>
                  <p className="text-xs text-zinc-400 font-light">
                    Clear screenshot displaying success status, date, timestamp, and amount.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-black/60 border border-gold-premium/20 hover:border-gold transition-all duration-300 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-premium/10 flex items-center justify-center text-gold">
                    <User className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">Registered Full Name</h4>
                  <p className="text-xs text-zinc-400 font-light">
                    Your full legal name as registered during your initial Aurex Capital consultation.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-gold-premium">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>Your payment will be verified before the onboarding process begins.</span>
              </div>
            </div>
          </section>

          {/* SECTION 4 — Profit Sharing Policy */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-2">
                04. Distribution Framework
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Profit Sharing Policy
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>

            <div className="glassmorphism-premium p-8 sm:p-12 rounded-3xl border border-gold-premium/30 relative overflow-hidden shadow-[0_0_50px_rgba(197,160,89,0.1)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Visual Ratio Display */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3 text-gold-premium">
                    <PieChart className="w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-widest">Performance Split</span>
                  </div>

                  <div className="space-y-4">
                    {/* Client Share Card */}
                    <div className="p-5 rounded-2xl bg-black/80 border border-gold-premium/30 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-zinc-400 font-light block">Client Share</span>
                        <span className="font-display font-extrabold text-3xl text-gold">80%</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold">
                        Net Profit Retained
                      </span>
                    </div>

                    {/* Performance Fee Card */}
                    <div className="p-5 rounded-2xl bg-black/60 border border-zinc-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-zinc-400 font-light block">Aurex Capital Performance Fee</span>
                        <span className="font-display font-bold text-2xl text-white">20%</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium">
                        Advisory Fee
                      </span>
                    </div>
                  </div>
                </div>

                {/* Policy Bullets */}
                <div className="lg:col-span-7 space-y-5">
                  <h3 className="font-display font-bold text-2xl text-white">
                    Structure & Allocation Rules
                  </h3>
                  <div className="h-[1px] w-full bg-zinc-900" />
                  <ul className="space-y-4 text-sm text-zinc-300 font-light">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>
                        Net profits generated are distributed as follows: <strong className="text-white font-medium">Client Share — 80%</strong> and <strong className="text-gold font-medium">Aurex Capital Performance Fee — 20%</strong>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>Performance fees are calculated solely on the net profit generated.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>Your original capital remains separate from the profit-sharing calculation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>Profit sharing is processed according to the agreed policy between Aurex Capital and the client.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5 — Market Risk Disclosure */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-2">
                05. Risk Advisory
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Market Risk Disclosure
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-950 via-black to-zinc-950 border border-gold-premium/30 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold-premium/5 blur-3xl rounded-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-premium/10 border border-gold-premium/30 flex items-center justify-center text-gold-premium">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Luxury Risk Notice</h3>
                  <span className="text-xs text-zinc-500 font-light">Important evaluation before capital placement</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-zinc-900 mb-6" />

              <ul className="space-y-4 text-sm text-zinc-300 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  <span>All financial markets involve varying degrees of risk.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  <span>Market performance is influenced by economic events, global conditions, and price volatility.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  <span>Returns are never guaranteed, and investment values may fluctuate over time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  <span>Historical performance should not be interpreted as an assurance of future outcomes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  <span>Clients are encouraged to carefully evaluate the associated risks before proceeding with any service.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 6 — Client Responsibilities */}
          <section className="space-y-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-2">
                06. Obligation Guidelines
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Client Responsibilities
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientResponsibilities.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="glassmorphism p-6 sm:p-8 rounded-2xl border border-gold-premium/15 hover:border-gold-premium/45 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-gold-premium/10 border border-gold-premium/20 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION 7 — Company Responsibilities */}
          <section className="space-y-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-2">
                07. Our Commitments
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Company Responsibilities
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyResponsibilities.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="glassmorphism p-6 sm:p-8 rounded-2xl border border-gold-premium/15 hover:border-gold-premium/45 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-gold-premium/10 border border-gold-premium/20 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION 8 — Secure Payments */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-2">
                08. Capital Defense
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Secure Payments
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>

            <div className="glassmorphism-premium p-8 sm:p-12 rounded-3xl border border-gold-premium/30 relative overflow-hidden shadow-2xl space-y-6">
              <div className="flex items-center gap-3 text-gold-premium">
                <Lock className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-widest">Anti-Fraud & Payment Security Rules</span>
              </div>

              <div className="h-[1px] w-full bg-zinc-900" />

              <ul className="space-y-4 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>Never transfer funds to unofficial bank accounts or wallet addresses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>Always verify payment instructions directly through Aurex Capital's official communication channels.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>Retain your payment receipt for future reference.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>Aurex Capital cannot be held responsible for payments sent to incorrect or unauthorized payment destinations.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 9 — Need Assistance? */}
          <section className="space-y-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold text-gold-premium tracking-widest block mb-2">
                09. Priority Concierge
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Need Assistance?
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email Support */}
              <div className="glassmorphism p-8 rounded-2xl border border-gold-premium/20 hover:border-gold transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-premium/10 border border-gold-premium/20 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">Email Support</h3>
                  <p className="text-xs text-zinc-400 font-light">
                    Direct email inbox for official policy and funding inquiries.
                  </p>
                  <p className="text-xs font-mono text-gold-premium font-semibold truncate">
                    {SITE_METADATA.email}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-900">
                  <a
                    href={`mailto:${SITE_METADATA.email}`}
                    className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-gold-premium hover:text-black border border-zinc-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <span>Send Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Support */}
              <div className="glassmorphism p-8 rounded-2xl border border-gold-premium/20 hover:border-gold transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-premium/10 border border-gold-premium/20 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">WhatsApp Support</h3>
                  <p className="text-xs text-zinc-400 font-light">
                    Instant message assistance with our concierge desk.
                  </p>
                  <p className="text-xs font-mono text-gold-premium font-semibold">
                    {SITE_METADATA.phone}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-900">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-gold-premium hover:text-black border border-zinc-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Contact Page Button */}
              <div className="glassmorphism p-8 rounded-2xl border border-gold-premium/20 hover:border-gold transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-premium/10 border border-gold-premium/20 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">Contact Page</h3>
                  <p className="text-xs text-zinc-400 font-light">
                    Schedule a full consultation session via our portal.
                  </p>
                  <p className="text-xs text-zinc-500 font-light">
                    Official Advisory Hub
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-900">
                  <Link
                    to="/contact"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-premium to-gold-dark hover:from-gold hover:to-gold-premium text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
                  >
                    <span>Visit Contact Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* BOTTOM NOTICE */}
          <section>
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-950/40 via-black to-zinc-950 border border-gold-premium/40 relative overflow-hidden shadow-2xl text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-premium/20 border border-gold-premium/40 text-gold text-xs font-bold uppercase tracking-widest">
                <Info className="w-4 h-4" />
                <span>Important Notice</span>
              </div>

              <p className="text-zinc-200 font-light text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
                Please review this Funding & Service Policy carefully before making any payment.
                By proceeding, you confirm that you understand the funding process, payment procedures, profit-sharing policy, reporting structure, company policies, and the inherent risks associated with financial markets.
              </p>
            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
};
