import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCountry } from '../context/CountryContext'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const { countryData, selectedCountry, switchCountry } = useCountry()
  
  // Texts for rotating animation
  const texts = [
    'Entrepreneurs',
    'Startup Founders',
    'E-commerce Sellers',
    'Digital Nomads',
    'International Traders',
    'Service Providers'
  ]

  // Marquee texts
  const marqueeTexts = [
    'Expand your business',
    'Open new doors',
    'Create a legacy',
    'Get access to foreign markets',
    'Scale globally',
    'Build international presence'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [texts.length])

  // If default state, show all countries
  if (selectedCountry === 'default') {
    return (
      <section className="pt-28 pb-16 px-4 gradient-bg text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Global Badge */}
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full border border-white/30 shadow-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">🌍</span>
              </div>
              <span className="font-bold text-xl">Global Business Formation</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Start Your International Business
                <span className="block text-accent mt-4">From Anywhere in the World</span>
              </h1>
              
              <p className="text-2xl text-gray-200 mb-10 leading-relaxed">
                Form your company in <span className="font-bold text-white">United States</span>,{' '}
                <span className="font-bold text-white">Canada</span>, or{' '}
                <span className="font-bold text-white">Turkey</span> without travel, paperwork, or hidden fees.
                Perfect for <span className="font-bold text-accent">{texts[currentText]}</span> worldwide.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link
                  to="/contact"
                  className="group bg-white text-primary px-10 py-5 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl text-center text-lg flex items-center justify-center"
                >
                  <div className="mr-3 text-2xl group-hover:scale-110 transition-transform">🚀</div>
                  <span className="text-lg">Open doors to new opportunities!</span>
                </Link>
                <Link
                  to="/contact"
                  className="group border-2 border-white text-white px-10 py-2 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 text-center text-lg flex items-center justify-center"
                >
                  <div className="mr-3 text-2xl">📅</div>
                  <span className="text-lg">Talk to an expert</span>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                    <span className="text-2xl">🌎</span>
                  </div>
                  <div>
                    <div className="font-bold text-2xl">3 Countries</div>
                    <div className="text-sm text-gray-300">Global Coverage</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <div className="font-bold text-2xl">3-10 Days</div>
                    <div className="text-sm text-gray-300">Fast Setup</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                    <span className="text-2xl">💯</span>
                  </div>
                  <div>
                    <div className="font-bold text-2xl">100% Online</div>
                    <div className="text-sm text-gray-300">No Travel Required</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Beautiful Country Cards */}
            <div className="lg:w-1/2 animate-slide-up">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border-2 border-white/20 shadow-2xl">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-4 mx-auto">
                    <span className="text-3xl">📍</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Choose Your Destination</h3>
                  <p className="text-gray-300 text-lg">Select where you want to grow your business</p>
                </div>
                
                {/* Beautiful Country Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {/* US Card */}
                  <button
                    onClick={() => switchCountry('US')}
                    className="group relative overflow-hidden bg-gradient-to-br from-blue-500/20 via-blue-600/15 to-blue-700/10 rounded-2xl p-6 border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 group-hover:scale-150 transition-transform"></div>
                    </div>
                    
                    <div className="text-center mb-5">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 mx-auto group-hover:rotate-12 transition-transform duration-500">
                        <span className="text-3xl">🗽</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2">United States</h4>
                      <div className="text-sm text-gray-300 bg-blue-500/20 px-3 py-1 rounded-full inline-block">
                        LLC Formation
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span>Fast 3-5 days setup</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span>No residency required</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span>US banking assistance</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-blue-400/20">
                      <div className="text-center">
                        <span className="text-blue-300 text-sm font-medium">Choose United States →</span>
                      </div>
                    </div>
                  </button>
                  
                  {/* Canada Card */}
                  <button
                    onClick={() => switchCountry('Canada')}
                    className="group relative overflow-hidden bg-gradient-to-br from-red-500/20 via-red-600/15 to-red-700/10 rounded-2xl p-6 border-2 border-red-400/30 hover:border-red-400/60 transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-red-500 group-hover:scale-150 transition-transform"></div>
                    </div>
                    
                    <div className="text-center mb-5">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-4 mx-auto group-hover:rotate-12 transition-transform duration-500">
                        <span className="text-3xl">🍁</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2">Canada</h4>
                      <div className="text-sm text-gray-300 bg-red-500/20 px-3 py-1 rounded-full inline-block">
                        Corporation Setup
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        <span>5-7 days incorporation</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        <span>Federal/Provincial options</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        <span>Canadian banking setup</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-red-400/20">
                      <div className="text-center">
                        <span className="text-red-300 text-sm font-medium">Choose Canada →</span>
                      </div>
                    </div>
                  </button>
                  
                  {/* Turkey Card */}
                  <button
                    onClick={() => switchCountry('Turkey')}
                    className="group relative overflow-hidden bg-gradient-to-br from-green-500/20 via-green-600/15 to-green-700/10 rounded-2xl p-6 border-2 border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-500 group-hover:scale-150 transition-transform"></div>
                    </div>
                    
                    <div className="text-center mb-5">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-4 mx-auto group-hover:rotate-12 transition-transform duration-500">
                        <span className="text-3xl">🕌</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2">Turkey</h4>
                      <div className="text-sm text-gray-300 bg-green-500/20 px-3 py-1 rounded-full inline-block">
                        Company Registration
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span>7-10 days registration</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span>Europe-Asia gateway</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span>Turkish banking support</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-green-400/20">
                      <div className="text-center">
                        <span className="text-green-300 text-sm font-medium">Choose Turkey →</span>
                      </div>
                    </div>
                  </button>
                </div>
                
                {/* CTA Section */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-accent to-accent/80 text-white px-8 py-4 rounded-xl font-bold hover:from-accent/90 hover:to-accent/70 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <span className="mr-3 text-xl">📞</span>
                      <span className="text-lg">Book a free Call</span>
                      <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee Section */}
          <div className="mt-20">
            <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary/50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary/50 to-transparent z-10"></div>
              
              <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap">
                {marqueeTexts.map((text, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-2xl mr-4"></div>
                    <span className="text-xl font-semibold text-white">{text}</span>
                    <div className="w-2 h-2 bg-accent rounded-full mx-6"></div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {marqueeTexts.map((text, index) => (
                  <div key={`dup-${index}`} className="flex items-center">
                    <div className="text-2xl mr-4"></div>
                    <span className="text-xl font-semibold text-white">{text}</span>
                    <div className="w-2 h-2 bg-accent rounded-full mx-6"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Country-specific content
  const countryFeatures = {
    US: [
      { icon: '🚀', title: 'Fast Setup', desc: 'Get your US LLC in 3-5 business days' },
      { icon: '💰', title: 'Lowest Cost', desc: 'Starting from just $399 all-inclusive' },
      { icon: '🏦', title: 'Easy Banking', desc: 'US bank accounts & payment processors' },
      { icon: '📊', title: 'Tax Benefits', desc: 'Optimize your tax structure' }
    ],
    Canada: [
      { icon: '🚀', title: 'Quick Process', desc: 'Incorporate in 5-7 business days' },
      { icon: '💰', title: 'Transparent Pricing', desc: 'From $599, no hidden fees' },
      { icon: '🏦', title: 'Canadian Banking', desc: 'Open CAD business accounts easily' },
      { icon: '🌍', title: 'Global Access', desc: 'Gateway to North American markets' }
    ],
    Turkey: [
      { icon: '🚀', title: 'Efficient Setup', desc: 'Company registration in 7-10 days' },
      { icon: '💰', title: 'Competitive Pricing', desc: 'Complete package from €1,500' },
      { icon: '🌍', title: 'Strategic Location', desc: 'Bridge between Europe and Asia' },
      { icon: '📈', title: 'Growth Market', desc: 'Access to fast-growing economy' }
    ]
  }

  const features = countryFeatures[countryData.code] || []
  const popularFor = countryData.popularFor || ['Entrepreneurs', 'Business Owners']

  return (
    <section className="pt-28 pb-20 px-4 gradient-bg text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Country Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
            <span className="text-2xl mr-3">{countryData.flag}</span>
            <span className="font-semibold text-lg">{countryData.name} Business Formation</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {countryData.heroTitle}
              <span className="block text-accent">From Anywhere in the World</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {countryData.heroSubtitle} Perfect for{' '}
              <span className="font-bold text-accent">{popularFor.join(', ')}</span> worldwide.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-center text-lg flex items-center justify-center"
              >
                <span className="mr-2">🚀</span>
                Start {countryData.name} Company
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-center text-lg flex items-center justify-center"
              >
                <span className="mr-2">📅</span>
                Free Consultation
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <div className="font-bold">{countryData.processTime || 'Fast Setup'}</div>
                  <div className="text-sm text-gray-300">Setup Time</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <div className="font-bold">{countryData.pricing || 'Affordable'}</div>
                  <div className="text-sm text-gray-300">Starting Price</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <div className="font-bold">100% Online</div>
                  <div className="text-sm text-gray-300">No Travel Required</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="lg:w-1/2 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose {countryData.name}?</h3>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{feature.icon}</div>
                      <div>
                        <h4 className="font-bold mb-1 text-lg">{feature.title}</h4>
                        <p className="text-sm text-gray-200">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Popular For */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="font-bold mb-3 text-center">Popular For:</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {popularFor.map((item, index) => (
                    <span key={index} className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-sm text-gray-300 mb-2">Complete {countryData.name} Package</div>
                  <div className="text-3xl font-bold mb-4">{countryData.pricing || 'Contact for Price'}</div>
                  <Link
                    to="/pricing"
                    className="inline-block w-full bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-accent/80 transition-colors"
                  >
                    View Full Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero