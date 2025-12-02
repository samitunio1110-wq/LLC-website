import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCountry } from '../context/CountryContext'

const Jurisdictions = () => {
  const [activeTab, setActiveTab] = useState('all')
  const { countryData } = useCountry()

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    yellow: 'from-yellow-500 to-yellow-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600',
    teal: 'from-teal-500 to-teal-600',
    indigo: 'from-indigo-500 to-indigo-600'
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full mb-6">
            <span className="text-primary font-semibold text-lg">
              {countryData.flag} {countryData.name} Jurisdictions
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Choose Your Location in {countryData.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Select the perfect jurisdiction in {countryData.name} for your business needs and goals
          </p>
        </div>

        {/* Jurisdictions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {countryData.jurisdictions?.map((jurisdiction, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-card hover-card border border-gray-100 hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                colorClasses[jurisdiction.color] || 'from-primary to-accent'
              } flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {jurisdiction.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">
                {jurisdiction.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-5">{jurisdiction.description}</p>
              
              <ul className="space-y-2 mb-6">
                {jurisdiction.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full text-primary border border-primary py-2.5 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 group-hover:shadow-md">
                Choose {jurisdiction.name}
              </button>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-xl font-bold mb-3 text-primary">
                Ready to Start Your {countryData.name} Business?
              </h4>
              <p className="text-gray-600">
                Get expert guidance on choosing the perfect jurisdiction for your specific needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/5 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jurisdictions