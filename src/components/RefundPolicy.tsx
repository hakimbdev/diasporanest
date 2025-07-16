import React from 'react';

const RefundPolicy: React.FC = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
    <p className="mb-4">At DiasporaNest, we are committed to your satisfaction. If you are not completely satisfied with our service, you are eligible for a full refund within 7 days of your payment.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">How to Request a Refund</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Contact us at <a href="mailto:info@diasporanest.com.ng" className="text-blue-600 underline">info@diasporanest.com.ng</a> within 7 days of your payment.</li>
      <li>Provide your payment reference and the email used for payment.</li>
      <li>We will process your refund within 3-5 business days.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">Exceptions</h2>
    <p className="mb-4">Refunds are not available after 7 days from the date of payment. For any questions, please contact our support team.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
    <p>If you have any questions about our Refund Policy, please contact us at <a href="mailto:info@diasporanest.com.ng" className="text-blue-600 underline">info@diasporanest.com.ng</a>.</p>
  </div>
);

export default RefundPolicy; 