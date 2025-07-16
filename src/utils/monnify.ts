// filepath: src/utils/monnify.ts
declare global {
  interface Window {
    MonnifySDK: {
      initialize: (config: MonnifyConfig) => void;
    };
  }
}

export interface MonnifyConfig {
  apiKey: string;
  contractCode: string;
  amount: number;
  currency: string;
  reference: string;
  customerName?: string;
  customerEmail: string;
  customerMobileNumber?: string;
  paymentDescription?: string;
  paymentMethods?: string[];
  metadata?: Record<string, string>;
  onComplete: (response: any) => void;
  onClose: () => void;
}

export interface MonnifyResponse {
  status: 'SUCCESS' | 'FAILED' | 'PENDING';
  transactionReference: string;
  paidAmount?: number;
  paidCurrency?: string;
  paymentStatus?: string;
  paymentReference?: string;
  paymentMethod?: string;
}

// Monnify Test Environment Configuration
export const MONNIFY_API_KEY = 'MK_TEST_ML3YGBCSVJ';
export const MONNIFY_CONTRACT_CODE = '401292963352';  // Test contract code
export const ACCESS_FEE_NAIRA = 25000; // ₦25,000 in naira (Monnify uses actual amount)

export const generatePaymentReference = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000);
  return `DN_${timestamp}_${random}`;
};
