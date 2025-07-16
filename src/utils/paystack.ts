import { PaystackProps } from '@paystack/inline-js';

export const PAYSTACK_PUBLIC_KEY = 'pk_live_08872d8ac9a8cc854cce88f6a5f7bac7da9b8d06';
export const ACCESS_FEE_NAIRA = 25000; // ₦25,000 in naira

export interface PaymentResponse {
  status: 'success' | 'failed' | 'cancelled';
  reference?: string;
  transaction?: string;
}

export const generatePaymentReference = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000);
  return `DN_${timestamp}_${random}`;
};

export const getPaystackConfig = (email: string): PaystackProps => {
  return {
    key: PAYSTACK_PUBLIC_KEY,
    email,
    amount: ACCESS_FEE_NAIRA * 100, // Paystack expects amount in kobo
    currency: 'NGN',
    ref: generatePaymentReference(),
    callback: (response: any) => {
      if (response.status === 'success') {
        const accessData = {
          paid: true,
          timestamp: Date.now(),
          reference: response.reference,
          transaction: response.transaction,
          email: sessionStorage.getItem('payment_email') || ''
        };
        
        localStorage.setItem('diaspora_nest_access', JSON.stringify(accessData));
        sessionStorage.removeItem('payment_email'); // Clean up
        window.location.href = '/payment-success?reference=' + response.reference;
      }
    },
    onClose: () => {
      // Handle payment modal close
      console.log('Payment cancelled');
    }
  };
}; 