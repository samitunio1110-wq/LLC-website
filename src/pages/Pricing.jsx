import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const plans = [
    {
      name: 'Starter',
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
      name: 'Professional',
      price: '$699',
      period: 'one-time',
      description: 'Ideal for growing businesses and e-commerce',
      features: [
        'Everything in Starter +',
        'Canada Corporation Option',
        'Business Number Registration',
        'GST/HST Setup (Canada)',
        'Priority Processing (2-3 days)',
        'Bank Account Setup Assistance',
        'Payment Gateway Setup (Stripe/PayPal)',
        'Phone & Email Support',
        'Compliance Calendar'
      ],
      highlighted: true,
      icon: '🚀'
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: 'one-time',
      description: 'Complete solution for agencies and startups',
      features: [
        'Everything in Professional +',
        'Multi-state/Province Registration',
        'Annual Compliance Package',
        'Bookkeeping Support (1 year)',
        'Tax Filing Assistance',
        'Dedicated Account Manager',
        '24/7 Priority Support',
        'Document Notarization',
        'Corporate Kit',
        'Virtual Office Setup'
      ],
      highlighted: false,
      icon: '🏢'
    }
  ]

  const addons = [
    { name: 'Annual Compliance Package', price: '$299/year', description: 'Annual reports, registered agent renewal, state filings' },
    { name: 'Bank Account Opening', price: '$199', description: 'Full assistance with US/Canadian business bank account' },
    { name: 'Bookkeeping Setup', price: '$399', description: 'Quarterly bookkeeping and financial reports' },
    { name: 'Tax Filing Support', price: '$499/year', description: 'Annual tax return preparation and filing' }
  ]

  return (
    <div className="pt-24 pb-16 px-4 animate-fade-in">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Transparent Pricing</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            No hidden fees. Clear packages for startups, solopreneurs, and growing teams.
          </p>
          <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full">
            <span className="text-primary font-semibold">💰 All-inclusive pricing • No surprises</span>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
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

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-primary text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-card hover-card">
                <h3 className="font-bold text-primary mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-accent mb-3">{addon.price}</div>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <button className="w-full text-primary border border-primary py-2 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                  Add to Package
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-primary text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'What is included in the base price?',
                a: 'All government filing fees, registered agent service for 1 year, EIN/BN registration, and complete document preparation.'
              },
              {
                q: 'Are there any hidden fees?',
                a: 'No. Our pricing is all-inclusive. The price you see is the price you pay.'
              },
              {
                q: 'How long does the process take?',
                a: 'US LLCs: 3-5 business days. Canada Corporations: 5-7 business days. Expedited processing available.'
              },
              {
                q: 'Do I need to be a US/Canadian resident?',
                a: 'No. We help non-residents form companies without requiring local residency or presence.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-card">
                <h3 className="font-bold text-primary mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              We offer customized packages for specific needs. Contact us for a personalized quote tailored to your business requirements.
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