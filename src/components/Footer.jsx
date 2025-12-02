import { Link } from 'react-router-dom'
import { useCountry } from '../context/CountryContext'

const Footer = () => {
  const { countryData, selectedCountry, switchCountry, countries } = useCountry()
  const currentYear = new Date().getFullYear()

  const countryOptions = [
    { code: 'US', name: 'United States', flag: '🇺🇸', desc: 'LLC Formation' },
    { code: 'Canada', name: 'Canada', flag: '🇨🇦', desc: 'Corporation Setup' },
    { code: 'Turkey', name: 'Turkey', flag: '🇹🇷', desc: 'Limited Şirketi Setup' }
  ]

  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 lg:px-8 pt-12 pb-8">
        {/* Country Selection */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
              <span className="text-xl">🌍</span>
            </div>
            <h3 className="text-xl font-bold">Choose Your Business Destination</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {countryOptions.map((country) => (
              <button
                key={country.code}
                onClick={() => switchCountry(country.code)}
                className={`group relative overflow-hidden p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedCountry === country.code
                    ? 'border-white bg-white/20 transform scale-105'
                    : 'border-white/30 hover:border-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{country.flag}</div>
                  <div className="text-left">
                    <h4 className="font-bold text-lg mb-1">{country.name}</h4>
                    <p className="text-sm text-white/80">{country.desc}</p>
                    <div className="mt-3">
                      <span className="text-xs px-3 py-1 bg-white/20 rounded-full">
                        {countries[country.code]?.pricing || 'From $399'}
                      </span>
                    </div>
                  </div>
                  {selectedCountry === country.code && (
                    <div className="ml-auto">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold text-xl">G</span>
              </div>
              <div>
                <span className="text-xl font-bold block">Global<span className="text-accent">Formations</span></span>
                <span className="text-xs opacity-80">International Business Services</span>
              </div>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              We help entrepreneurs worldwide establish their businesses in the US, Canada, and Turkey.
              100% online, no residency required.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-lg">💼</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-lg">📸</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                Home
              </Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                Services
              </Link></li>
              <li><Link to="/pricing" className="text-white/80 hover:text-white transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                Pricing
              </Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                Contact
              </Link></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                Blog
              </a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                FAQs
              </a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                US LLC Formation
              </li>
              <li className="text-white/80 flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                Canada Corporation
              </li>
              <li className="text-white/80 flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                Turkey Company Registration
              </li>
              <li className="text-white/80 flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                Tax & Compliance
              </li>
              <li className="text-white/80 flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                Banking Setup
              </li>
              <li className="text-white/80 flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                Ongoing Support
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 mt-1">
                  <span className="text-lg">📧</span>
                </div>
                <div>
                  <div className="font-bold">Email</div>
                  <div className="text-white/80">info@globalformations.com</div>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 mt-1">
                  <span className="text-lg">📞</span>
                </div>
                <div>
                  <div className="font-bold">Phone</div>
                  <div className="text-white/80">+1 (555) 123-4567</div>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 mt-1">
                  <span className="text-lg">🕒</span>
                </div>
                <div>
                  <div className="font-bold">Hours</div>
                  <div className="text-white/80">24/7 Online Support</div>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 mt-1">
                  <span className="text-lg">🌍</span>
                </div>
                <div>
                  <div className="font-bold">Location</div>
                  <div className="text-white/80">Serving clients worldwide</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} GlobalFormations. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
          <div className="text-center text-white/40 text-xs mt-4">
            <p>Form your company in the United States, Canada, or Turkey without travel, paperwork, or hidden fees.</p>
            <p className="mt-1">Start your global business from anywhere in the world!</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer