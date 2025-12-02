import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useCountry } from '../context/CountryContext'

const ServicesPage = () => {
  const { countryData, selectedCountry } = useCountry()

  const serviceDetails = {
    US: [
      {
        title: 'US LLC Formation',
        description: 'Complete setup of your Limited Liability Company in any US state.',
        features: [
          'Articles of Organization filing',
          'Registered Agent service (1 year)',
          'EIN (Employer Identification Number)',
          'Operating Agreement template',
          'US business banking guidance',
          'State compliance notifications',
          'Digital document delivery',
          'Priority customer support'
        ],
        price: 'From $399',
        popular: true,
        icon: '🇺🇸'
      },
      {
        title: 'EIN & Compliance',
        description: 'Tax ID registration and ongoing compliance support.',
        features: [
          'EIN application with IRS',
          'State tax registration',
          'Annual report filings',
          'Registered Agent renewal',
          'Tax filing assistance',
          'Compliance calendar',
          'Document management',
          'Dedicated account manager'
        ],
        price: 'From $299/year',
        popular: false,
        icon: '📋'
      }
    ],
    Canada: [
      {
        title: 'Canada Corporation',
        description: 'Federal or provincial incorporation with all registrations.',
        features: [
          'Articles of Incorporation',
          'Registered Office service (1 year)',
          'Business Number (BN) registration',
          'GST/HST tax accounts setup',
          'Minute book preparation',
          'Corporate bylaws',
          'Share certificates',
          'Priority support'
        ],
        price: 'From $599',
        popular: true,
        icon: '🇨🇦'
      },
      {
        title: 'BN & Tax Compliance',
        description: 'Business Number and ongoing Canadian compliance.',
        features: [
          'BN application with CRA',
          'GST/HST registration',
          'Annual return filings',
          'Registered Office renewal',
          'Corporate tax assistance',
          'Compliance calendar',
          'Document management',
          'Dedicated support'
        ],
        price: 'From $399/year',
        popular: false,
        icon: '📊'
      }
    ],
    Turkey: [
      {
        title: 'Turkey Company Registration',
        description: 'Complete Turkish company setup with trade registry.',
        features: [
          'Trade Registry registration',
          'Tax Identification Number',
          'Commercial book preparation',
          'Company stamp creation',
          'Legal representation',
          'Bank account assistance',
          'Document translation',
          'Priority support'
        ],
        price: 'From €1,500',
        popular: true,
        icon: '🇹🇷'
      },
      {
        title: 'Tax & Legal Compliance',
        description: 'Ongoing Turkish tax and legal compliance.',
        features: [
          'VAT registration',
          'Corporate tax filings',
          'Social security registration',
          'Legal representation renewal',
          'Annual compliance',
          'Document management',
          'Turkish language support',
          'Dedicated agent'
        ],
        price: 'From €499/year',
        popular: false,
        icon: '⚖️'
      }
    ]
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Get services for current country or default to US
  const currentServices = serviceDetails[selectedCountry] || serviceDetails.US

  return (
    <div className="pt-24 pb-16 px-4 animate-fade-in">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full mb-6">
            <span className="text-primary font-semibold">{countryData?.flag || '🇺🇸'} {countryData?.name || 'United States'} Services</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our {countryData?.name || 'United States'} Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive solutions for international entrepreneurs looking to establish and grow their business in {countryData?.name || 'United States'}
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {currentServices.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden relative hover-card ${
                service.popular ? 'border-2 border-accent transform md:scale-105' : 'border border-gray-200'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-bold rounded-bl-lg z-10">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{service.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{service.title}</div>
                    <div className="text-3xl font-bold text-primary mt-2">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-bold transition-all duration-300 ${
                    service.popular
                      ? 'bg-primary text-white hover:bg-secondary shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-primary hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{countryData?.flag || '🇺🇸'}</div>
                  <h2 className="text-2xl md:text-3xl font-bold">Ready to Launch Your {countryData?.name || 'United States'} Business?</h2>
                </div>
                <p className="text-gray-200">Join thousands of international entrepreneurs who have successfully established their companies in {countryData?.name || 'United States'} with our help.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 text-center"
                >
                  Start in {countryData?.name || 'United States'}
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 text-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage