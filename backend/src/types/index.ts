export interface ConsultationRequest {
  fullName: string;
  email: string;
  whatsappNumber: string;
  preferredDate: string;
  preferredTime: string;
  investmentBudget: string;
  message?: string;
  createdAt?: string;
}

export interface TradingMetric {
  month: string;
  roi: number;
  winRate: number;
  tradesCount: number;
  profitFactor: number;
  growth: number;
}
