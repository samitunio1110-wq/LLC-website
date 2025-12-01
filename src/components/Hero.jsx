import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = ['Entrepreneur', 'Freelancer', 'E-commerce Seller', 'SaaS Founder', 'Agency Owner']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-24 pb-20 px-4 gradient-bg text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <div className="mb-4">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                🌎 Trusted Worldwide
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Start & Manage Your 
              <span className="block text-accent">US or Canadian LLC</span>
              Online From Anywhere!
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Form your company in the United States or Canada without travel, paperwork, or hidden fees.
              Perfect for <span className="font-semibold text-accent">{texts[currentText]}s</span> worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-center text-lg"
              >
                🚀 Get Started Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 text-center text-lg"
              >
                📅 Free Consultation
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg">✓</span>
                </div>
                <span>No Residency Required</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg">✓</span>
                </div>
                <span>100% Online</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Register With Us?</h3>
              <div className="space-y-5">
                {[
                  { icon: '💻', title: '100% Online Registration', desc: 'Establish your LLC remotely, no residency or local address required!' },
                  { icon: '⚡', title: 'Fast Processing', desc: 'Get your company formed in 3–7 business days with timely updates!' },
                  { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden fees. Clear packages for startups and growing teams.' },
                  { icon: '🏦', title: 'Bank & Payment Setup', desc: 'Guidance to open US/Canadian business bank accounts, Stripe, PayPal, Wise, and more.' },
                  { icon: '📋', title: 'Ongoing Compliance', desc: 'Annual reports, renewals, bookkeeping, tax support… all handled for you.' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-200">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero