import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    businessType: '',
    jurisdiction: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const jurisdictions = [
    'Wyoming LLC',
    'Delaware LLC',
    'New Mexico LLC',
    'Florida LLC',
    'Federal Canada Corporation',
    'Ontario Corporation',
    'British Columbia Corporation',
    'Not Sure - Need Advice'
  ]

  const businessTypes = [
    'Freelancer/Digital Services',
    'E-commerce Store',
    'SaaS/Software Business',
    'Marketing Agency',
    'Consulting Firm',
    'Startup',
    'Content Creator',
    'Other'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        businessType: '',
        jurisdiction: '',
        message: ''
      })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="pt-24 pb-16 px-4 animate-fade-in">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Start Your Business Journey</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Fill out the form below and our experts will guide you through the process of forming your US or Canadian company.
          </p>
          <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full">
            <span className="text-primary font-semibold">⏱️ Get a response within 4 hours</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl mr-4">
                  📝
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">Get Started Today</h2>
                  <p className="text-gray-600">Complete the form to begin your journey</p>
                </div>
              </div>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700 mb-4">Your application has been submitted successfully.</p>
                  <p className="text-green-600">Our team will contact you within 4 hours to discuss next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Country of Residence *</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="e.g., Germany, India, Brazil"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Business Type *</label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select business type</option>
                      {businessTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Preferred Jurisdiction</label>
                    <select
                      name="jurisdiction"
                      value={formData.jurisdiction}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select jurisdiction (optional)</option>
                      {jurisdictions.map((jurisdiction, index) => (
                        <option key={index} value={jurisdiction}>{jurisdiction}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Additional Information</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Tell us about your business goals, timeline, or any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Process Steps */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-card border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-primary">What Happens Next?</h3>
              <ol className="space-y-6">
                {[
                  { step: '1', title: 'Initial Consultation', desc: 'We schedule a call to understand your needs and recommend the best jurisdiction.' },
                  { step: '2', title: 'Document Preparation', desc: 'Our team prepares all necessary documents for your company formation.' },
                  { step: '3', title: 'Company Formation', desc: 'We file all documents with government authorities and handle follow-ups.' },
                  { step: '4', title: 'Banking & Setup', desc: 'We guide you through business bank account and payment processor setup.' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-bold text-primary mb-1">{item.title}</div>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Need Immediate Assistance?</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <div className="font-bold">Call Us</div>
                    <div className="text-lg">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-bold">Email Us</div>
                    <div className="text-lg">info@global-llc.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🕒</span>
                  </div>
                  <div>
                    <div className="font-bold">Response Time</div>
                    <div className="text-lg">Within 4 hours (usually faster)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-primary">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  '100% Online Process',
                  'No Residency Requirements',
                  'Transparent All-inclusive Pricing',
                  'Fast Processing (3-7 Days)',
                  'Expert Support Team',
                  'Ongoing Compliance Support',
                  'Banking & Payment Assistance',
                  'Trusted by 5,000+ Clients'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  to="/pricing"
                  className="block w-full text-center border-2 border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary/5 transition-colors"
                >
                  View Our Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact