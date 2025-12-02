import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useCountry } from '../context/CountryContext'

const Pricing = () => {
  const { countryData, selectedCountry } = useCountry()

  const plans = {
    US: [
      {
        name: 'US LLC Basic',
        price: '$399',
        period: 'one-time',
        description: 'Perfect for freelancers and solo entrepreneurs',
        features: [
          'US LLC Formation (Wyoming/Delaware)',
          'Articles of Organization',
          'Registered Agent (1 year)',
          'EIN Application',
          'Operating Agreement Template',
          'Basic Banking Guidance',
          'Email Support',
          '3-5 Business Days Processing'
        ],
        highlighted: false,
        icon: '🎯'
      },
      {
        name: 'US LLC Professional',
        price: '$699',
        period: 'one-time',
        description: 'Ideal for growing businesses and e-commerce',
        features: [
          'Everything in Basic +',
          'Priority Processing (2-3 days)',
          'Bank Account Setup Assistance',
          'Payment Gateway Setup (Stripe/PayPal)',
          'Phone & Email Support',
          'Compliance Calendar',
          'Tax Consultation (30 min)',
          'Document Notarization'
        ],
        highlighted: true,
        icon: '🚀'
      }
    ],
    Canada: [
      {
        name: 'Canada Corp Basic',
        price: '$599',
        period: 'one-time',
        description: 'Perfect for startups and consultants',
        features: [
          'Canada Corporation (Federal/Provincial)',
          'Articles of Incorporation',
          'Registered Office (1 year)',
          'Business Number Registration',
          'Corporate Bylaws',
          'Basic Banking Guidance',
          'Email Support',
          '5-7 Business Days Processing'
        ],
        highlighted: false,
        icon: '🎯'
      },
      {
        name: 'Canada Corp Professional',
        price: '$899',
        period: 'one-time',
        description: 'Ideal for growing Canadian businesses',
        features: [
          'Everything in Basic +',
          'Priority Processing (3-4 days)',
          'Bank Account Setup Assistance',
          'GST/HST Registration',
          'Phone & Email Support',
          'Compliance Calendar',
          'Tax Consultation (30 min)',
          'Corporate Kit'
        ],
        highlighted: true,
        icon: '🚀'
      }
    ],
    Turkey: [
      {
        name: 'Turkey Company Basic',
        price: '€1,500',
        period: 'one-time',
        description: 'Perfect for international traders',
        features: [
          'Turkey Company Registration',
          'Trade Registry Registration',
          'Tax Identification Number',
          'Commercial Book',
          'Company Stamp',
          'Basic Banking Guidance',
          'Email Support',
          '7-10 Business Days Processing'
        ],
        highlighted: false,
        icon: '🎯'
      },
      {
        name: 'Turkey Company Professional',
        price: '€2,500',
        period: 'one-time',
        description: 'Ideal for established businesses in Turkey',
        features: [
          'Everything in Basic +',
          'Priority Processing (5-7 days)',
          'Bank Account Setup Assistance',
          'VAT Registration',
          'Legal Representation (1 year)',
          'Document Translation',
          'Phone & Email Support',
          'Compliance Calendar'
        ],
        highlighted: true,
        icon: '🚀'
      }
    ]
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-16 px-4 animate-fade-in">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full mb-6">
            <span className="text-primary font-semibold">{countryData.flag} {countryData.name} Pricing</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            {countryData.name} Pricing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transparent pricing for your {countryData.name} company formation
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {plans[selectedCountry]?.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden relative ${
                plan.highlighted 
                  ? 'border-2 border-accent shadow-2xl transform md:scale-105 z-10' 
                  : 'border border-gray-200 shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-3 font-bold">
                  MOST POPULAR CHOICE
                </div>
              )}
              
              <div className={`p-8 ${plan.highlighted ? 'pt-16' : 'pt-8'}`}>
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{plan.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-bold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-primary text-white hover:bg-secondary shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-primary hover:bg-gray-200'
                  }`}
                >
                  Choose This Plan
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution for {countryData.name}?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              We offer customized packages for specific needs in {countryData.name}. Contact us for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all duration-300"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
          
          <div className="text-gray-600">
            <p>💳 All major credit cards accepted • 🔒 Secure payment processing</p>
            <p className="mt-2">🔄 30-day money-back guarantee on formation services</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing