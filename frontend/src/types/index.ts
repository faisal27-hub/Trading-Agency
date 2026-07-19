export interface ConsultationInput {
  fullName: string;
  email: string;
  whatsappNumber: string;
  preferredDate: string;
  preferredTime: string;
  investmentBudget: string;
  message: string;
}

export interface MetricItem {
  month: string;
  roi: number;
  winRate: number;
  tradesCount: number;
  profitFactor: number;
  growth: number;
}

export interface MetricsOverview {
  totalReturn: number;
  averageMonthlyRoi: number;
  averageWinRate: number;
  totalTrades: number;
  profitFactor: number;
  maxDrawdown: number;
  sharpeRatio: number;
  verifiedBy: string;
  lastUpdated: string;
}

export interface MetricsResponse {
  overview: MetricsOverview;
  history: MetricItem[];
}

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
