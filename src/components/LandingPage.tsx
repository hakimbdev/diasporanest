import React, { useState } from 'react';
import { Shield, Users, CheckCircle, Star, MapPin, Phone, Mail, Menu, X, Building2, MessageCircle } from 'lucide-react';
import PaymentButton from './PaymentButton';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const features = [
    { icon: Shield, title: 'Verified Properties', description: 'All listings verified by our expert team with comprehensive due diligence' },
    { icon: Building2, title: 'Premium Locations', description: 'Exclusive access to prime real estate in Nigeria\'s most sought-after areas' },
    { icon: Users, title: 'Trusted Agents', description: 'Connect with certified professionals with proven track records' },
    { icon: MapPin, title: 'Location Intelligence', description: 'Detailed neighborhood insights, maps, and investment analytics' }
  ];

  const testimonials = [
    {
      name: 'John Okafor',
      location: 'London, UK',
      text: 'DiasporaNest helped me secure my dream property in Lekki. The verification process gave me complete confidence in my investment.',
      rating: 5,
      avatar: 'AO',
      photo: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1746003572/elegant-man-suit_mcbngu.jpg'
    },
    {
      name: 'Kanu Nwosu',
      location: 'Toronto, Canada',
      text: 'Finally, a platform I can trust for Nigerian real estate. The agent connections and property verification are invaluable.',
      rating: 5,
      avatar: 'EN',
      photo: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1746003555/11434191_chbm6b.png'
    },
    {
      name: 'Funmi Adeleke',
      location: 'New York, USA',
      text: 'The quality of listings and detailed information saved me months of research. Worth every naira invested!',
      rating: 5,
      avatar: 'FA',
      photo: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1749290957/confident-business-woman-portrait-smiling-face_ok89qv.jpg'
    }
  ];

  const faqs = [
    {
      question: 'Why is there a one-time access fee?',
      answer: 'The ₦25,000 fee ensures we maintain a curated, high-quality platform with verified listings and professional agents, while keeping out spam and low-quality listings. This investment model allows us to provide premium service quality.'
    },
    {
      question: 'Are all properties verified?',
      answer: 'Yes, every property undergoes our rigorous verification process including title document checks, agent vetting, physical property verification, and legal compliance reviews.'
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'We offer a 7-day satisfaction guarantee. If you\'re not completely satisfied with the quality of our listings and service, we\'ll provide a full refund, no questions asked.'
    },
    {
      question: 'How do I contact property agents?',
      answer: 'Each listing includes verified agent contact information with direct WhatsApp links, phone numbers, and email addresses for immediate communication and property inquiries.'
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Brand Logo */}
            <div className="flex items-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Diaspora
                <span className="text-amber-500">Nest</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Testimonials</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">FAQ</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium py-2" onClick={toggleMobileMenu}>Features</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium py-2" onClick={toggleMobileMenu}>Testimonials</a>
                <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium py-2" onClick={toggleMobileMenu}>Pricing</a>
                <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium py-2" onClick={toggleMobileMenu}>FAQ</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 sm:mb-8 border border-blue-700/50">
              <Shield className="h-4 w-4 mr-2 text-green-400" />
              <span className="text-sm font-medium">Verified Properties Only</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Invest in Nigeria's
              <span className="block text-amber-400 mt-2">Most Trusted Real Estates</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Exclusive access to verified properties for Nigerians and Africans in the diaspora. 
              Connect with trusted agents and secure your real estate investments back home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <PaymentButton 
                isLoading={isPaymentLoading}
                setIsLoading={setIsPaymentLoading}
              />
              <div className="text-sm text-blue-200 text-center sm:text-left">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm sm:text-base">Verified Properties</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm sm:text-base">Client Satisfaction</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm sm:text-base">Trusted Agents</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">₦2B+</div>
              <div className="text-gray-600 text-sm sm:text-base">Properties Transacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DiasporaNest?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the most comprehensive and secure platform for diaspora real estate investment
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Join thousands of satisfied investors who trust DiasporaNest
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  {testimonial.photo ? (
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-300 bg-white shadow-md"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4 text-lg shadow-md border-2 border-blue-300">
                      {testimonial.avatar}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Premium Access Pricing
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-12">
            One-time payment for lifetime access to our verified property listings
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 max-w-lg mx-auto border border-white/20">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Premium Access</h3>
              <div className="mb-8">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">₦25,000</span>
                <div className="text-blue-200 text-sm mt-2">One-time payment • Lifetime access</div>
              </div>
              
              <ul className="text-left space-y-4 mb-8 sm:mb-10">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Access to 500+ verified properties</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Direct agent contact information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Property documents & legal information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Google Maps integration & location insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>7-day money-back guarantee</span>
                </li>
              </ul>
              
              <PaymentButton 
                isLoading={isPaymentLoading}
                setIsLoading={setIsPaymentLoading}
                variant="white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Everything you need to know about DiasporaNest
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Diaspora
                  <span className="text-amber-400">Nest</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Connecting Nigerians and Africans in the diaspora with verified real estate opportunities back home. Your trusted partner in property investment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-blue-400" />
                  <span>info@diasporanest.com.ng</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Legal</h4>
              <div className="space-y-3 text-gray-400">
                <Link to="/privacy-policy" className="hover:text-white transition-colors cursor-pointer block">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-white transition-colors cursor-pointer block">Terms of Service</Link>
                <Link to="/refund-policy" className="hover:text-white transition-colors cursor-pointer block">Refund Policy</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DiasporaNest. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/2348062558567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-transparent rounded-full shadow-2xl p-0 flex items-center justify-center transition-colors duration-200 border-0"
        title="Chat with DiasporaNest Team on WhatsApp"
        style={{ width: 56, height: 56 }}
      >
        <img src="https://res.cloudinary.com/dc5qncppu/image/upload/v1750604435/whaticon_i3kmux.png" alt="WhatsApp" style={{ width: 56, height: 56, borderRadius: '50%' }} />
      </a>
    </div>
  );
};

export default LandingPage;