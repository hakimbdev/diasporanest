import React, { useState } from 'react';
import { Grid, List, MapPin, LogOut, Filter, Search, Menu, X } from 'lucide-react';
import PropertyCard from './PropertyCard';
import MapView from './MapView';
import { properties } from '../data/properties';
import { clearAccess } from '../utils/storage';

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const cities = ['all', 'Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Kano'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50', label: 'Under ₦50M' },
    { value: '50-100', label: '₦50M - ₦100M' },
    { value: '100-200', label: '₦100M - ₦200M' },
    { value: '200+', label: 'Above ₦200M' }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'all' || property.location.includes(selectedCity);
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = property.priceNaira;
      switch (priceRange) {
        case '0-50':
          matchesPrice = price < 50000000;
          break;
        case '50-100':
          matchesPrice = price >= 50000000 && price <= 100000000;
          break;
        case '100-200':
          matchesPrice = price >= 100000000 && price <= 200000000;
          break;
        case '200+':
          matchesPrice = price > 200000000;
          break;
      }
    }
    
    return matchesSearch && matchesCity && matchesPrice;
  });

  const handleLogout = () => {
    clearAccess();
    window.location.href = '/';
  };

  const toggleMobileFilters = () => {
    setIsMobileFiltersOpen(!isMobileFiltersOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Brand Logo */}
            <div className="flex items-center space-x-3">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Diaspora
                <span className="text-amber-500">Nest</span>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">Premium</span>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* View Mode Toggle - Desktop */}
              <div className="hidden md:flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all duration-200 ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                  title="Grid View"
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-all duration-200 ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                  title="List View"
                >
                  <List className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded transition-all duration-200 ${viewMode === 'map' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                  title="Map View"
                >
                  <MapPin className="h-4 w-4" />
                </button>
              </div>

              {/* Mobile Filters Toggle */}
              <button
                onClick={toggleMobileFilters}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Filter className="h-5 w-5" />
              </button>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-200 p-2 rounded-lg hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile View Mode Toggle */}
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-center space-x-1 bg-gray-100 rounded-lg p-1 max-w-xs mx-auto">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex-1 p-2 rounded transition-all duration-200 ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
          >
            <Grid className="h-4 w-4 mx-auto" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex-1 p-2 rounded transition-all duration-200 ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
          >
            <List className="h-4 w-4 mx-auto" />
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`flex-1 p-2 rounded transition-all duration-200 ${viewMode === 'map' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
          >
            <MapPin className="h-4 w-4 mx-auto" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className={`bg-white border-b border-gray-200 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search properties or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
              >
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city === 'all' ? 'All Cities' : city}
                  </option>
                ))}
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Close Filters Button */}
          {isMobileFiltersOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={toggleMobileFilters}
                className="w-full flex items-center justify-center space-x-2 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Close Filters</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Trusted Property Listings
          </h1>
          <p className="text-gray-600">
            {filteredProperties.length} verified {filteredProperties.length === 1 ? 'property' : 'properties'} available
          </p>
        </div>

        {viewMode === 'map' ? (
          <MapView properties={filteredProperties} />
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProperties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                viewMode={viewMode}
              />
            ))}
          </div>
        )}

        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Filter className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCity('all');
                setPriceRange('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;