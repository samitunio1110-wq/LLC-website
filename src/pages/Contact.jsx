import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { submitContactForm } from '../utils/api'

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

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'
  const [submitMessage, setSubmitMessage] = useState('')

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

  // Validation function
  const validateForm = () => {
    const newErrors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation (optional but validate format if provided)
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Country validation
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required'
    }

    // Business type validation
    if (!formData.businessType) {
      newErrors.businessType = 'Please select a business type'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!validateForm()) {
      // Scroll to first error
      const firstError = Object.keys(errors)[0]
      const element = document.querySelector(`[name="${firstError}"]`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        element.focus()
      }
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitMessage('')

    try {
      // Send data to backend using the API helper
      const data = await submitContactForm(formData)

      setSubmitStatus('success')
      setSubmitMessage(data.message || 'Thank you! Your application has been submitted successfully.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        businessType: '',
        jurisdiction: '',
        message: ''
      })
      setErrors({})
      
      // Auto hide success message after 8 seconds
      setTimeout(() => {
        setSubmitStatus(null)
        setSubmitMessage('')
      }, 8000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage(error.message || 'Something went wrong. Please try again.')
      
      // Handle validation errors from backend
      if (error.errors) {
        const backendErrors = {}
        error.errors.forEach(err => {
          const field = err.toLowerCase().includes('email') ? 'email' :
                       err.toLowerCase().includes('name') ? 'name' :
                       err.toLowerCase().includes('country') ? 'country' :
                       err.toLowerCase().includes('business') ? 'businessType' : null
          if (field) {
            backendErrors[field] = err
          }
        })
        setErrors(prev => ({ ...prev, ...backendErrors }))
      }
    } finally {
      setIsSubmitting(false)
    }
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

        {/* Success/Error Messages */}
        {submitStatus && (
          <div className={`mb-8 rounded-xl p-6 border ${
            submitStatus === 'success' 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <div className="flex items-center">
              <div className={`mr-4 text-2xl ${
                submitStatus === 'success' ? 'text-green-500' : 'text-red-500'
              }`}>
                {submitStatus === 'success' ? '✅' : '❌'}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {submitStatus === 'success' ? 'Success!' : 'Error'}
                </h3>
                <p>{submitMessage}</p>
              </div>
              <button
                onClick={() => {
                  setSubmitStatus(null)
                  setSubmitMessage('')
                }}
                className="ml-auto text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
          </div>
        )}

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
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <span className="mr-1">⚠️</span> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <span className="mr-1">⚠️</span> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Optional"
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <span className="mr-1">⚠️</span> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.country ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="e.g., Germany, India, Brazil"
                      disabled={isSubmitting}
                    />
                    {errors.country && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <span className="mr-1">⚠️</span> {errors.country}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white ${
                      errors.businessType ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    disabled={isSubmitting}
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <span className="mr-1">⚠️</span> {errors.businessType}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Preferred Jurisdiction
                  </label>
                  <select
                    name="jurisdiction"
                    value={formData.jurisdiction}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                    disabled={isSubmitting}
                  >
                    <option value="">Select jurisdiction (optional)</option>
                    {jurisdictions.map((jurisdiction, index) => (
                      <option key={index} value={jurisdiction}>{jurisdiction}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Tell us about your business goals, timeline, or any specific requirements..."
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-primary hover:bg-secondary'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our{' '}
                  <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>
                  {' '}and{' '}
                  <Link to="#" className="text-primary hover:underline">Terms of Service</Link>.
                </p>
              </form>
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