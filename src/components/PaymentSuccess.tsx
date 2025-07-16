import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const reference = new URLSearchParams(location.search).get('reference');

  useEffect(() => {
    if (reference) {
      // Store payment success data
      const accessData = {
        paid: true,
        timestamp: Date.now(),
        reference: reference,
        email: sessionStorage.getItem('payment_email') || ''
      };
      
      // Save to localStorage
      localStorage.setItem('diaspora_nest_access', JSON.stringify(accessData));
      sessionStorage.removeItem('payment_email'); // Clean up

      // Redirect to dashboard immediately
      navigate('/dashboard', { replace: true });
    } else {
      // If no reference, redirect to home
      navigate('/', { replace: true });
    }
  }, [reference, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your payment. You now have premium access to DiasporaNest.
        </p>
        <div className="animate-pulse text-amber-600">
          Redirecting you to the dashboard...
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;