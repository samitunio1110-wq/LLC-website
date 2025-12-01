import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const serviceDetails = [
    {
      title: 'US LLC Formation',
      description: 'Complete setup of your Limited Liability Company in any US state.',
      features: [
        'Articles of Organization filing',
        'Registered Agent service (1 year)',
        'EIN (Employer Identification Number)',
        'Operating Agreement template',
        'Business banking guidance',
        'State compliance notifications',
        'Digital document delivery',
        'Priority customer support'
      ],
      price: 'From $399',
      popular: true,
      icon: '🇺🇸'
    },
    {
      title: 'Canada Corporation',
      description: 'Federal or provincial incorporation with all necessary registrations.',
      features: [
        'Name search and reservation',
        'Articles of Incorporation',
        'Registered Office service',
        'Business Number (BN) registration',
        'GST/HST tax accounts setup',
        'Minute book preparation',
        'Corporate bylaws',
        'Share certificates'
      ],
      price: 'From $599',
      popular: false,
      icon: '🇨🇦'
    },
    {
      title: 'Compliance & Support',
      description: 'Ongoing services to keep your business compliant and running smoothly.',
      features: [
        'Annual report filings',
        'Registered Agent renewal',
        'Tax filing assistance',
        'Bookkeeping support',
        'Corporate updates',
        'Document management',
        'Compliance calendar',
        'Dedicated account manager'
      ],
      price: 'From $299/year',
      popular: false,
      icon: '📋'
    }
  ]

  const additionalServices = [
    {
      title: 'Bank Account Setup',
      icon: '🏦',
      items: ['US Business Bank Account', 'Canadian Business Bank Account', 'Mercury, Novo, Wise', 'Payment Processor Setup'],
      price: '$199'
    },
    {
      title: 'Tax Services',
      icon: '📊',
      items: ['EIN/BN Registration', 'Sales Tax Registration', 'Tax Consultation', 'Annual Tax Filing'],
      price: '$299'
    },
    {
      title: 'Legal Documents',
      icon: '📑',
      items: ['Operating Agreements', 'Bylaws & Resolutions', 'Contracts & Agreements', 'Document Notarization'],
      price: '$149'
    },
    {
      title: 'Business Growth',
      icon: '🚀',
      items: ['Virtual Office', 'Mail Forwarding', 'Phone Services', 'Business Credit Building'],
      price: '$99/month'
    }
  ]

  return (
    <div className="pt-24 pb-16 px-4 animate-fade-in">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive solutions for international entrepreneurs looking to establish and grow their business in North America
          </p>
          <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full">
            <span className="text-primary font-semibold">🌍 Serving clients in 100+ countries</span>
          </div>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {serviceDetails.map((service, index) => (
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

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Additional Business Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-card hover-card border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-4 text-primary">{service.title}</h3>
                <div className="text-2xl font-bold text-accent mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full text-primary border border-primary py-2 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                  Add Service
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Launch Your North American Business?</h2>
                <p className="text-gray-200">Join thousands of international entrepreneurs who have successfully established their US or Canadian companies with our help.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 text-center"
                >
                  Start Your Application
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 text-center"
                >
                  View Pricing Details
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