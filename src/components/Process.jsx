const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Country & Package',
      description: 'Select a US or Canadian jurisdiction and complete our simple online form.',
      icon: '🌎',
      details: ['Select jurisdiction', 'Choose package', 'Provide basic information']
    },
    {
      number: '02',
      title: 'We Process Your Formation',
      description: 'Our team prepares and files your documents with government authorities.',
      icon: '⚙️',
      details: ['Document preparation', 'Government filing', 'Real-time updates']
    },
    {
      number: '03',
      title: 'Receive Company Documents',
      description: 'Get your Articles, EIN/BN, operating agreement, and all essentials.',
      icon: '📄',
      details: ['Digital delivery', 'Secure dashboard', 'Expert review']
    },
    {
      number: '04',
      title: 'Setup Bank & Payments',
      description: 'We guide you step-by-step to open accounts and start operating globally.',
      icon: '🏦',
      details: ['Bank account setup', 'Payment processors', 'Compliance guidance']
    }
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple 4-step process to launch your North American business from anywhere in the world
          </p>
        </div>
        
        <div className="relative">
          {/* Progress Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-card hover-card relative z-20 pt-12">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center justify-center bg-primary/5 rounded-2xl px-8 py-6 border border-primary/10">
            <div className="text-4xl mr-0 md:mr-6 mb-4 md:mb-0">⏱️</div>
            <div className="text-left">
              <h4 className="text-xl font-bold text-primary mb-2">Fast Processing Timeline</h4>
              <p className="text-gray-700">
                <span className="font-semibold">US LLCs:</span> 3-5 business days | 
                <span className="font-semibold ml-4">Canada Corps:</span> 5-7 business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process