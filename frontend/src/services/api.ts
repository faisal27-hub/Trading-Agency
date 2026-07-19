import { config } from '../config';
import type { ConsultationInput, MetricsResponse } from '../types';

export class ApiError extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'ApiError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  const isJson = response.headers.get('content-type')?.includes('application/json');
  const data = isJson ? await response.json() : null;

  if (!response.ok) {
    const errorMsg = data?.message || `API error (HTTP ${response.status})`;
    throw new ApiError(response.status, errorMsg);
  }

  return (data?.data ?? data) as T;
}

export const apiService = {
  /**
   * Fetch trading historical growth and general dashboard overview
   */
  async getPerformanceMetrics(): Promise<MetricsResponse> {
    try {
      const res = await fetch(`${config.apiUrl}/metrics`);
      return await handleResponse<MetricsResponse>(res);
    } catch (error) {
      console.error('Failed to load performance metrics from API:', error);
      throw error;
    }
  },

  /**
   * Submit consultation request form
   */
  async bookConsultation(input: ConsultationInput): Promise<{ bookingId: string; preferredDate: string; preferredTime: string }> {
    try {
      const res = await fetch(`${config.apiUrl}/consultations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });
      return await handleResponse<{ bookingId: string; preferredDate: string; preferredTime: string }>(res);
    } catch (error) {
      console.error('Failed to schedule consultation via API:', error);
      throw error;
    }
  },
};
