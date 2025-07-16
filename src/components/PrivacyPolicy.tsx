import React from 'react';

const PrivacyPolicy: React.FC = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4">At DiasporaNest, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our platform.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Personal information (such as name, email, and contact details) provided during registration or payment.</li>
      <li>Usage data and cookies to improve your experience.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>To provide and improve our services.</li>
      <li>To process payments and manage access.</li>
      <li>To communicate important updates and offers.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">Data Protection</h2>
    <p className="mb-4">We implement industry-standard security measures to protect your data. We do not sell or share your personal information with third parties except as required by law.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@diasporanest.com.ng" className="text-blue-600 underline">info@diasporanest.com.ng</a>.</p>
  </div>
);

export default PrivacyPolicy; 