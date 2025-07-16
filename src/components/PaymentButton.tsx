import React, { useState, useEffect } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';
import EmailDialog from './EmailDialog';
import { getPaystackConfig } from '../utils/paystack';

interface PaymentButtonProps {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  variant?: 'primary' | 'white';
}

declare global {
  interface Window {
    PaystackPop: any;
  }
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ 
  isLoading, 
  setIsLoading, 
  variant = 'primary' 
}) => {
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load Paystack script
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    setError(null);
    setShowEmailDialog(true);
  };

  const handleEmailSubmit = async (email: string) => {
    try {
      setShowEmailDialog(false);
      setIsLoading(true);
      setError(null);
      sessionStorage.setItem('payment_email', email);
      const handler = window.PaystackPop.setup(getPaystackConfig(email));
      handler.openIframe();
    } catch (err) {
      console.error('Payment error:', err);
      setError(err instanceof Error ? err.message : 'Payment initialization failed. Please try again.');
      setIsLoading(false);
    }
  };

  const baseClasses = "inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black",
    white: "bg-white hover:bg-gray-50 text-blue-900 border-2 border-white/20"
  };

  return (
    <>
      <button
        onClick={handlePayment}
        disabled={isLoading}
        className={`${baseClasses} ${variantClasses[variant]}`}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            <span className="hidden sm:inline">Processing Payment...</span>
            <span className="sm:hidden">Processing...</span>
          </>
        ) : (
          <>
            <CreditCard className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">Get Access Now</span>
            <span className="sm:hidden">Get Access - ₦25,000</span>
          </>
        )}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <EmailDialog 
        isOpen={showEmailDialog}
        onClose={() => setShowEmailDialog(false)}
        onSubmit={handleEmailSubmit}
      />
    </>
  );
};

export default PaymentButton;