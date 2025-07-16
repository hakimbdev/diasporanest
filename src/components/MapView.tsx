import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  location: string;
  priceNaira: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface MapViewProps {
  properties: Property[];
}

const MapView: React.FC<MapViewProps> = ({ properties }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    // Initialize map centered on Nigeria
    if (!mapInstance.current) {
      mapInstance.current = new google.maps.Map(mapRef.current, {
        center: { lat: 9.0765, lng: 7.3986 }, // Nigeria center
        zoom: 6,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
          }
        ]
      });
    }

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // Add markers for properties
    const bounds = new google.maps.LatLngBounds();

    properties.forEach(property => {
      const marker = new google.maps.Marker({
        position: property.coordinates,
        map: mapInstance.current,
        title: property.title,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0C8.954 0 0 8.954 0 20c0 15 20 30 20 30s20-15 20-30C40 8.954 31.046 0 20 0z" fill="#3B82F6"/>
              <circle cx="20" cy="20" r="12" fill="white"/>
              <path d="M20 12L16 18H24L20 12Z" fill="#3B82F6"/>
              <rect x="18" y="18" width="4" height="6" fill="#3B82F6"/>
            </svg>
          `),
          scaledSize: new google.maps.Size(40, 50),
          anchor: new google.maps.Point(20, 50)
        }
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; max-width: 250px; font-family: system-ui, -apple-system, sans-serif;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1f2937; line-height: 1.4;">${property.title}</h3>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; display: flex; align-items: center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              ${property.location}
            </p>
            <p style="margin: 0; font-size: 18px; font-weight: 700; color: #3b82f6;">${formatPrice(property.priceNaira)}</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstance.current, marker);
      });

      markersRef.current.push(marker);
      bounds.extend(property.coordinates);
    });

    // Fit map to show all markers
    if (properties.length > 0) {
      mapInstance.current.fitBounds(bounds);
      
      // Set a maximum zoom level
      const listener = google.maps.event.addListener(mapInstance.current, 'idle', () => {
        if (mapInstance.current!.getZoom()! > 15) {
          mapInstance.current!.setZoom(15);
        }
        google.maps.event.removeListener(listener);
      });
    }
  }, [properties]);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
      <div className="p-4 sm:p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="flex items-center">
          <div className="bg-blue-500 p-2 rounded-lg mr-4">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Property Locations
            </h3>
            <p className="text-sm text-gray-600">
              {properties.length} {properties.length === 1 ? 'property' : 'properties'} displayed on map
            </p>
          </div>
        </div>
      </div>
      <div 
        ref={mapRef} 
        className="w-full h-96 sm:h-[500px] lg:h-[600px]"
        style={{ minHeight: '400px' }}
      >
        {!window.google && (
          <div className="flex items-center justify-center h-full bg-gray-50">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-gray-600 mb-4 font-medium">Loading map...</div>
              <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapView;