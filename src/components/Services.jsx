const Services = () => {
  const services = [
    {
      title: 'Company Formation',
      description: 'Fast, compliant LLC or corporation setup in the US or Canada.',
      icon: '🏢',
      features: ['State/Province Filing', 'Document Preparation', 'Name Reservation', 'Legal Structure']
    },
    {
      title: 'EIN/BN Registration',
      description: 'We handle government filings so you don’t have to.',
      icon: '📋',
      features: ['Tax ID Application', 'Business Number', 'Government Liaison', 'Documentation']
    },
    {
      title: 'Registered Agent Services',
      description: 'Reliable agents in every US state + Canadian provinces.',
      icon: '🤝',
      features: ['Legal Address', 'Document Reception', 'Compliance Alerts', 'Year-round Support']
    },
    {
      title: 'Banking & Payments',
      description: 'Guidance for opening online business accounts and payment processors.',
      icon: '💳',
      features: ['Account Setup', 'Payment Gateways', 'International Banking', 'Multi-currency']
    },
    {
      title: 'Tax & Compliance Support',
      description: 'Annual reports, bookkeeping, tax filings, and renewals.',
      icon: '📊',
      features: ['Annual Reports', 'Tax Filing', 'Bookkeeping', 'Compliance Calendar']
    },
    {
      title: 'Documents & Dashboard',
      description: 'Access all your company documents in one secure place.',
      icon: '📁',
      features: ['Secure Storage', 'Digital Access', 'Document Management', 'Real-time Updates']
    }
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Everything You Need to Launch & Operate</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive services designed for international entrepreneurs and remote businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-card hover-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-4 bg-primary/10 px-6 py-4 rounded-full">
            <span className="text-primary font-semibold">🎯 Perfect For:</span>
            <div className="flex flex-wrap justify-center gap-3">
              {['Freelancers', 'E-commerce', 'SaaS Startups', 'Agencies', 'Consultants', 'Creators'].map((item, idx) => (
                <span key={idx} className="bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services