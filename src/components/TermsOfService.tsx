import React from 'react';

const TermsOfService: React.FC = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
    <p className="mb-4">Welcome to DiasporaNest. By using our platform, you agree to the following terms and conditions:</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Use of Service</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>You must be at least 18 years old to use our services.</li>
      <li>All information provided must be accurate and up to date.</li>
      <li>Access is granted upon successful payment of the one-time fee.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">User Conduct</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>No unauthorized sharing or resale of access.</li>
      <li>No posting of false or misleading information.</li>
      <li>Respect the privacy and rights of other users and agents.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
    <p className="mb-4">DiasporaNest is not liable for any losses or damages resulting from property transactions. All listings are verified to the best of our ability, but users are responsible for their own due diligence.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Changes to Terms</h2>
    <p className="mb-4">We may update these terms from time to time. Continued use of the platform constitutes acceptance of the new terms.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
    <p>If you have any questions about these Terms, please contact us at <a href="mailto:info@diasporanest.com.ng" className="text-blue-600 underline">info@diasporanest.com.ng</a>.</p>
  </div>
);

export default TermsOfService; 