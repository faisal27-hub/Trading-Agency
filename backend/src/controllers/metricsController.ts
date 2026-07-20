import { Request, Response, NextFunction } from 'express';
import { TradingMetric } from '../types';

// Structured, realistic trading performance history (empty awaiting connection)
// DO NOT display fake financial performance. Set to empty to connect to verified backend APIs.
const tradingHistory: TradingMetric[] = [];

const dashboardOverview = {
  totalReturn: null,
  averageMonthlyRoi: null,
  averageWinRate: null,
  totalTrades: null,
  profitFactor: null,
  maxDrawdown: null,
  sharpeRatio: null,
  verifiedBy: 'Awaiting API Connection',
  lastUpdated: new Date().toISOString(),
};

export const getMetrics = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        overview: dashboardOverview,
        history: tradingHistory,
      },
    });
  } catch (error) {
    next(error);
  }
};
