import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, Phone, MessageCircle, Download, Shield, Eye, EyeOff, ChevronLeft, ChevronRight } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  location: string;
  priceNaira: number;
  priceUSD: number;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  agent: {
    name: string;
    phone: string;
    whatsapp: string;
  };
  documents: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  verified: boolean;
}

interface PropertyCardProps {
  property: Property;
  viewMode: 'grid' | 'list';
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, viewMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatUSDPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`Hi, I'm interested in the property: ${property.title} in ${property.location}`);
    window.open(`https://wa.me/${property.agent.whatsapp}?text=${message}`, '_blank');
  };

  const handlePhoneContact = () => {
    window.open(`tel:${property.agent.phone}`, '_blank');
  };

  const handleDocumentDownload = (docUrl: string) => {
    window.open(docUrl, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => prev < property.images.length - 1 ? prev + 1 : 0);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => prev > 0 ? prev - 1 : property.images.length - 1);
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
        <div className="md:flex">
          <div className="md:w-2/5 relative">
            <div className="relative h-64 md:h-full">
              {imageLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              )}
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover"
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
              />
              
              {property.verified && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center font-medium shadow-lg">
                  <Shield className="h-3 w-3 mr-1" />
                  Verified
                </div>
              )}
              
              {property.images.length > 1 && (
                <>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                    {currentImageIndex + 1}/{property.images.length}
                  </div>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          </div>
          
          <div className="md:w-3/5 p-6 sm:p-8">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                  <span className="font-medium">{property.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                <Bed className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">{property.bedrooms} beds</span>
              </div>
              <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                <Bath className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">{property.bathrooms} baths</span>
              </div>
              <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                <Square className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">{property.area} sqm</span>
              </div>
            </div>

            <div className="mb-6">
              <button
                onClick={() => setShowDescription(!showDescription)}
                className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                {showDescription ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                {showDescription ? 'Hide' : 'Show'} Description
              </button>
              {showDescription && (
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{property.description}</p>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleWhatsAppContact}
                className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Agent
              </button>
              <button
                onClick={handlePhoneContact}
                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Agent
              </button>
              {property.documents.map((doc, index) => (
                <button
                  key={index}
                  onClick={() => handleDocumentDownload(doc)}
                  className="flex items-center bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Documents
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-1">
      <div className="relative">
        <div className="relative h-56 sm:h-64">
          {imageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          )}
          <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover"
            onLoad={() => setImageLoading(false)}
            onError={() => setImageLoading(false)}
          />
          
          {property.verified && (
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center font-medium shadow-lg">
              <Shield className="h-3 w-3 mr-1" />
              Verified
            </div>
          )}
          
          {property.images.length > 1 && (
            <>
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                {currentImageIndex + 1}/{property.images.length}
              </div>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2 text-blue-500" />
          <span className="text-sm font-medium">{property.location}</span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-50 px-2 py-1 rounded-lg">
              <Bed className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm font-medium text-gray-700">{property.bedrooms}</span>
            </div>
            <div className="flex items-center bg-gray-50 px-2 py-1 rounded-lg">
              <Bath className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm font-medium text-gray-700">{property.bathrooms}</span>
            </div>
            <div className="flex items-center bg-gray-50 px-2 py-1 rounded-lg">
              <Square className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm font-medium text-gray-700">{property.area}m²</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleWhatsAppContact}
            className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact via WhatsApp
          </button>
          <div className="flex gap-3">
            <button
              onClick={handlePhoneContact}
              className="flex-1 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call
            </button>
            {property.documents.map((doc, index) => (
              <button
                key={index}
                onClick={() => handleDocumentDownload(doc)}
                className="flex-1 flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                <Download className="h-4 w-4 mr-2" />
                Docs
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;