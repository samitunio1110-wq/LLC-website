import React, { createContext, useState, useContext, useEffect } from 'react';

const CountryContext = createContext();

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};

export const CountryProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('default'); // Changed to 'default'
  const [countryData, setCountryData] = useState(null);

  // Country-specific data
  const countriesData = {
    default: {
      code: 'default',
      name: 'Global Business',
      flag: '🌍',
      heroTitle: 'Start Your International Business Online',
      heroSubtitle: 'Form your company in US, Canada, or Turkey without travel, paperwork, or hidden fees.',
      description: 'Perfect for global entrepreneurs!',
      showAllCountries: true
    },
    US: {
      code: 'US',
      name: 'United States',
      flag: '🇺🇸',
      heroTitle: 'Start Your US LLC Online in Minutes',
      heroSubtitle: 'Form your company in the United States without travel, paperwork, or hidden fees.',
      description: 'Perfect for international entrepreneurs!',
      jurisdictions: [
        { 
          name: 'Wyoming', 
          features: ['Privacy Protection', 'Low Annual Fees', 'Strong Asset Protection', 'No State Income Tax'],
          description: 'Best for privacy and asset protection',
          icon: '🏔️',
          color: 'blue'
        },
        { 
          name: 'Delaware', 
          features: ['Court of Chancery', 'Investor Friendly', 'Corporate Flexibility', 'Global Standard'],
          description: 'Preferred by startups and tech companies',
          icon: '⚖️',
          color: 'green'
        },
        { 
          name: 'New Mexico', 
          features: ['Most Affordable', 'Minimal Reporting', 'Privacy Options', 'Simple Maintenance'],
          description: 'Budget-friendly with maximum privacy',
          icon: '🌵',
          color: 'yellow'
        },
        { 
          name: 'Florida', 
          features: ['E-commerce Hub', 'Service Businesses', 'Tax Advantages', 'Growing Economy'],
          description: 'Ideal for online and service businesses',
          icon: '🌴',
          color: 'orange'
        }
      ],
      processTime: '3-5 business days',
      pricing: 'From $399',
      currency: 'USD',
      popularFor: ['Freelancers', 'E-commerce', 'SaaS Startups', 'Agencies']
    },
    Canada: {
      code: 'Canada',
      name: 'Canada',
      flag: '🇨🇦',
      heroTitle: 'Incorporate Your Canadian Company Online',
      heroSubtitle: 'Form your corporation in Canada without travel, paperwork, or hidden fees.',
      description: 'Ideal for international businesses!',
      jurisdictions: [
        { 
          name: 'Federal Corporation', 
          features: ['National Recognition', 'Business Flexibility', 'Canada-wide Operation', 'Brand Protection'],
          description: 'Operate across all Canadian provinces',
          icon: '🍁',
          color: 'purple'
        },
        { 
          name: 'Ontario', 
          features: ['Economic Hub', 'Startup Ecosystem', 'Global Access', 'Talent Pool'],
          description: 'Most popular for international founders',
          icon: '🏙️',
          color: 'red'
        },
        { 
          name: 'British Columbia', 
          features: ['Tech Innovation', 'Asia-Pacific Gateway', 'Green Economy', 'Quality of Life'],
          description: 'Perfect for tech and sustainable businesses',
          icon: '⛰️',
          color: 'teal'
        },
        { 
          name: 'Alberta', 
          features: ['Low Taxes', 'Business Friendly', 'Energy Sector', 'Growing Tech Scene'],
          description: 'Great for energy and technology businesses',
          icon: '🏔️',
          color: 'indigo'
        }
      ],
      processTime: '5-7 business days',
      pricing: 'From $599',
      currency: 'CAD',
      popularFor: ['Startups', 'Consultants', 'Tech Companies', 'Service Providers']
    },
    Turkey: {
      code: 'Turkey',
      name: 'Turkey',
      flag: '🇹🇷',
      heroTitle: 'Register Your Turkish Company Online',
      heroSubtitle: 'Form your company in Turkey without travel, paperwork, or hidden fees.',
      description: 'Gateway to Europe and Middle East!',
      jurisdictions: [
        { 
          name: 'Istanbul', 
          features: ['Economic Capital', 'Global Hub', 'Large Market', 'Infrastructure'],
          description: 'Commercial and financial center of Turkey',
          icon: '🕌',
          color: 'red'
        },
        { 
          name: 'Ankara', 
          features: ['Government Hub', 'Stable Economy', 'Education Center', 'Strategic Location'],
          description: 'Political capital with government opportunities',
          icon: '🏛️',
          color: 'blue'
        },
        { 
          name: 'Izmir', 
          features: ['Export Hub', 'Port City', 'Tourism', 'Agricultural Center'],
          description: 'Major port city with export advantages',
          icon: '⚓',
          color: 'green'
        },
        { 
          name: 'Bursa', 
          features: ['Industrial Hub', 'Automotive Center', 'Textile Industry', 'Historical Significance'],
          description: 'Industrial and manufacturing center',
          icon: '🏭',
          color: 'orange'
        }
      ],
      processTime: '7-10 business days',
      pricing: 'From €1,500',
      currency: 'EUR',
      popularFor: ['Exporters', 'Manufacturers', 'Traders', 'Tourism']
    }
  };

  useEffect(() => {
    // Set initial country data
    if (countriesData[selectedCountry]) {
      setCountryData(countriesData[selectedCountry]);
    }
  }, [selectedCountry]);

  const switchCountry = (countryCode) => {
    if (countriesData[countryCode]) {
      setSelectedCountry(countryCode);
    }
  };

  const value = {
    selectedCountry,
    countryData: countryData || countriesData.default,
    switchCountry,
    countries: countriesData
  };

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
};