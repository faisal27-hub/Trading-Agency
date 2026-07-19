import type { ServiceCard, TimelineStep, CertificateItem, FAQItem } from '../types';

export const SITE_METADATA = {
  name: 'Aurelius Capital',
  tagline: 'Elite Forex Trading & Wealth Solutions',
  email: 'invest@aurelius.capital',
  phone: '+1 (800) 555-0199',
  whatsapp: '+447911123456', // WhatsApp link formatting: https://wa.me/447911123456
  officeAddress: '15 Broad Street, 24th Floor, Financial District, New York, NY 10005',
  businessHours: 'Monday - Friday: 08:00 AM - 06:00 PM EST',
  gmapIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3024.238491873836!2d-74.01168178459496!3d40.70678597933189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17277b5555%3A0xe54e3d2319c5c70c!2s15%20Broad%20St%2C%20New%20York%2C%20NY%2010005!5e0!3m2!1sen!2sus!4v1692882200000!5m2!1sen!2sus',
};

export const SERVICES_DATA: ServiceCard[] = [
  {
    id: 'forex-trading',
    title: 'Forex Trading Execution',
    description: 'Bespoke institutional-grade currency trading using advanced quant models, algorithmic execution, and tight spread liquidity pools.',
    iconName: 'TrendingUp',
  },
  {
    id: 'market-analysis',
    title: 'Daily Market Analytics',
    description: 'High-frequency macro-economic research, technical chart analysis, order flow tracking, and geopolitical risk assessments.',
    iconName: 'BarChart2',
  },
  {
    id: 'consultation',
    title: 'Wealth Consultation',
    description: 'Direct access to senior portfolio managers to tailor asset distribution, capital shielding, and liquidity generation.',
    iconName: 'Briefcase',
  },
  {
    id: 'strategy-dev',
    title: 'Bespoke Strategy Development',
    description: 'Custom strategy blueprints mapping algorithmic triggers, trend-following structures, and tailored hedging scripts.',
    iconName: 'Cpu',
  },
  {
    id: 'risk-management',
    title: 'Institutional Risk Protection',
    description: 'Advanced asset protection setups with strict drawdown limits, historical volatility capping, and multi-tier hedging.',
    iconName: 'Shield',
  },
  {
    id: 'premium-support',
    title: '24/5 Concierge Brokerage',
    description: 'Dedicated account executives, instant communication channels, custom analytics reports, and rapid capital withdrawal services.',
    iconName: 'Headphones',
  },
];

export const TIMELINE_DATA: TimelineStep[] = [
  {
    number: '01',
    title: 'Schedule Consultation',
    description: 'Book a complimentary session with an Aurelius Capital specialist to discuss trading goals, risk tolerance, and asset targets.',
  },
  {
    number: '02',
    title: 'Understand Client Goals',
    description: 'Analyze liquidity targets, target returns, exposure limits, and capital preservation thresholds in a deep-dive onboarding profile.',
  },
  {
    number: '03',
    title: 'Strategy Discussion',
    description: 'Review custom currency pair portfolios, quantitative strategies, and trade execution frequencies tailored to your wealth target.',
  },
  {
    number: '04',
    title: 'Account Review',
    description: 'Finalize custody settings, secure API credentials, broker connections, and establish safe withdrawal permissions.',
  },
  {
    number: '05',
    title: 'Active Trading Process',
    description: 'Initiate institutional execution across majors, minors, and cross-currencies monitored by seasoned risk officers.',
  },
  {
    number: '06',
    title: 'Regular Performance Updates',
    description: 'Access audited performance metrics, detailed trade receipts, daily summaries, and transparent ROI charts.',
  },
  {
    number: '07',
    title: 'Long-Term Capital Scaling',
    description: 'Schedule quarterly reviews to adjust risk profiles, scale asset size, and customize compound interest strategies.',
  },
];

export const CERTIFICATIONS_DATA: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Global Financial Markets Authority License',
    issuer: 'GFMA Registry',
    year: '2024',
    imageUrl: '/assets/certs/cert_gfma.jpg',
    description: 'Compliance license for international currency advisory services and quantitative strategy operations.',
  },
  {
    id: 'cert-2',
    title: 'Certified Forex Wealth Manager Accreditation',
    issuer: 'International Financial Association',
    year: '2025',
    imageUrl: '/assets/certs/cert_cwm.jpg',
    description: 'Professional standard credential validating risk modeling, hedging principles, and asset allocation capabilities.',
  },
  {
    id: 'cert-3',
    title: 'Elite Capital Risk Officer Credential',
    issuer: 'Swiss Finance Academy',
    year: '2026',
    imageUrl: '/assets/certs/cert_sfa.jpg',
    description: 'Rigorous accreditation confirming expertise in capital preservation structures, drawdown controls, and macro hedge scaling.',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What is the minimum capital required to get started?',
    answer: 'To maintain proper institutional risk controls and leverage standard currency unit sizes safely, Aurelius Capital recommends a starting investment budget of $10,000. This ensures adequate room for drawdowns without triggering forced stop-outs.',
  },
  {
    question: 'How are Aurelius Capital strategies protected against market volatility?',
    answer: 'We employ multi-layer risk management including algorithmic hard stops on every position, cross-market correlation filters, and automatic hedging triggers. Our target is never to exceed a maximum historical drawdown of 5% on total capital.',
  },
  {
    question: 'Are my trading records and performance metrics verified by third parties?',
    answer: 'Yes. Our performance dashboard pulls verified metrics directly via read-only APIs from third-party audit sites like Myfxbook. We also supply monthly broker statements audited by reputable global financial accounting firms.',
  },
  {
    question: 'How do I withdraw my capital, and are there lock-in periods?',
    answer: 'Aurelius Capital does not require lock-in terms. Since we trade through secure brokerage accounts under the client name, capital withdrawals can be executed directly from your broker dashboard at any time. Processing times depend on the broker and payment rails, typically taking 24-48 business hours.',
  },
  {
    question: 'Does past trading performance guarantee future returns?',
    answer: 'No. While our quant models and historical records demonstrate high win-rates, currency trading is subject to substantial market volatility. Aurelius Capital maintains a strict risk disclaimer policy: past performance does not guarantee future outcomes. We trade with capital-preserving risk rules to mitigate exposure.',
  },
];
