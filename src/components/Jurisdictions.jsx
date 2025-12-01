import { useState } from 'react'
import { Link } from 'react-router-dom'

const Jurisdictions = () => {
  const [activeTab, setActiveTab] = useState('us')

  const usStates = [
    { 
      name: 'Wyoming', 
      features: ['Privacy Protection', 'Low Annual Fees', 'Strong Asset Protection', 'No State Income Tax'],
      description: 'Best for privacy and asset protection',
      color: 'from-blue-500 to-blue-600',
      icon: '🏔️'
    },
    { 
      name: 'Delaware', 
      features: ['Court of Chancery', 'Investor Friendly', 'Corporate Flexibility', 'Global Standard'],
      description: 'Preferred by startups and tech companies',
      color: 'from-green-500 to-green-600',
      icon: '⚖️'
    },
    { 
      name: 'New Mexico', 
      features: ['Most Affordable', 'Minimal Reporting', 'Privacy Options', 'Simple Maintenance'],
      description: 'Budget-friendly with maximum privacy',
      color: 'from-yellow-500 to-yellow-600',
      icon: '🌵'
    },
    { 
      name: 'Florida', 
      features: ['E-commerce Hub', 'Service Businesses', 'Tax Advantages', 'Growing Economy'],
      description: 'Ideal for online and service businesses',
      color: 'from-orange-500 to-orange-600',
      icon: '🌴'
    }
  ]

  const canadaProvinces = [
    { 
      name: 'Federal Corporation', 
      features: ['National Recognition', 'Business Flexibility', 'Canada-wide Operation', 'Brand Protection'],
      description: 'Operate across all Canadian provinces',
      color: 'from-purple-500 to-purple-600',
      icon: '🍁'
    },
    { 
      name: 'Ontario', 
      features: ['Economic Hub', 'Startup Ecosystem', 'Global Access', 'Talent Pool'],
      description: 'Most popular for international founders',
      color: 'from-red-500 to-red-600',
      icon: '🏙️'
    },
    { 
      name: 'British Columbia', 
      features: ['Tech Innovation', 'Asia-Pacific Gateway', 'Green Economy', 'Quality of Life'],
      description: 'Perfect for tech and sustainable businesses',
      color: 'from-teal-500 to-teal-600',
      icon: '⛰️'
    }
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Choose Where You Want to Register</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Select the jurisdiction that best fits your business needs and goals
          </p>
          
          <div className="inline-flex bg-gray-100 p-1 rounded-full mb-12">
            <button
              onClick={() => setActiveTab('us')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === 'us' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              🇺🇸 United States
            </button>
            <button
              onClick={() => setActiveTab('ca')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === 'ca' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              🇨🇦 Canada
            </button>
          </div>
        </div>

        {activeTab === 'us' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {usStates.map((state, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-card hover-card border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${state.color} flex items-center justify-center text-2xl mb-4`}>
                    {state.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{state.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{state.description}</p>
                  <ul className="space-y-2">
                    {state.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold mb-6 text-primary">US Package Includes:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { icon: '📄', title: 'Articles of Organization', desc: 'Official formation documents' },
                  { icon: '🏢', title: 'Registered Agent', desc: '1 year service included' },
                  { icon: '🆔', title: 'EIN', desc: 'Employer Identification Number' },
                  { icon: '📝', title: 'Operating Agreement', desc: 'Customizable template' },
                  { icon: '🏦', title: 'Bank Account Guide', desc: 'Step-by-step setup' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="font-semibold text-primary mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ca' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {canadaProvinces.map((province, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-card hover-card border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${province.color} flex items-center justify-center text-2xl mb-4`}>
                    {province.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{province.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{province.description}</p>
                  <ul className="space-y-2">
                    {province.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold mb-6 text-primary">Canada Package Includes:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { icon: '🔍', title: 'Name Search', desc: 'NUANS report & reservation' },
                  { icon: '📄', title: 'Articles', desc: 'Incorporation documents' },
                  { icon: '🏢', title: 'Registered Office', desc: 'Physical address service' },
                  { icon: '📝', title: 'Corporate Bylaws', desc: 'Customizable template' },
                  { icon: '🆔', title: 'Business Number', desc: 'BN & tax accounts setup' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="font-semibold text-primary mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Choose Your Jurisdiction</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Jurisdictions