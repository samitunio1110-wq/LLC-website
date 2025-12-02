import { Link } from 'react-router-dom'
import { useCountry } from '../context/CountryContext'

const CTA = () => {
  const { countryData, selectedCountry } = useCountry()

  const clients = {
    US: [
      'Freelancers & digital service providers',
      'E-commerce sellers (Amazon, Shopify, Etsy)',
      'SaaS & IT startups',
      'Marketing agencies',
      'International entrepreneurs',
      'Non-residents expanding into US'
    ],
    Canada: [
      'Tech startups and founders',
      'Consultants and service providers',
      'E-commerce businesses',
      'International investors',
      'Agencies expanding to Canada',
      'Digital nomads'
    ],
    Turkey: [
      'International traders and exporters',
      'Manufacturing companies',
      'Real estate investors',
      'Tourism businesses',
      'Tech startups in Turkey',
      'Service providers'
    ]
  }

  return (
    <section className="py-16 md:py-24 px-4 gradient-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <div className="mb-6 flex items-center space-x-3">
              <div className="text-2xl">{countryData.flag}</div>
              <h2 className="text-3xl md:text-4xl font-bold">Start Your {countryData.name} Business Today</h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Launch your {countryData.name} company from the ease of your home! 
              Your global business in {countryData.name} begins here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-center text-lg"
              >
                🚀 Start in {countryData.name}
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 text-center text-lg"
              >
                📅 Free Consultation
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Why Entrepreneurs Choose Our {countryData.name} Service:</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Perfect for international businesses',
                  `Fast ${countryData.processTime} setup`,
                  'Dedicated support team',
                  'All documents digital',
                  'No residency required',
                  `${countryData.name} banking assistance`
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="text-2xl mr-3">{countryData.flag}</div>
                <h3 className="text-2xl font-bold">Who We Help in {countryData.name}</h3>
              </div>
              <ul className="space-y-4">
                {clients[selectedCountry]?.map((client, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg">{client}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-lg">Ready to Start in {countryData.name}?</div>
                    <div className="text-gray-200">No commitment, just answers</div>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent/80 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Setup Time', value: countryData.processTime },
              { label: 'Success Rate', value: '99.8%' },
              { label: 'Support Response', value: '< 4 Hours' },
              { label: 'Starting Price', value: countryData.pricing }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA