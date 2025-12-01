import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'SaaS Founder • Singapore',
      content: 'GlobalLLC made setting up our Delaware corporation incredibly smooth. Within 5 days we had everything: EIN, documents, and banking guidance. Their ongoing compliance support has been invaluable.',
      rating: 5,
      avatar: 'AC'
    },
    {
      name: 'Maria Rodriguez',
      role: 'E-commerce Entrepreneur • Spain',
      content: 'As an Amazon seller based in Europe, I needed a US presence. GlobalLLC handled my Wyoming LLC formation and even helped me get approved for Stripe. Could not recommend them enough!',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'David Kim',
      role: 'Digital Nomad • South Korea',
      content: 'The entire process was 100% online and stress-free. As a freelancer working with US clients, having my own Florida LLC has given me credibility and made payments much easier.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Agency Owner • Australia',
      content: 'We needed a Canadian corporation for our North American expansion. GlobalLLC handled everything from name search to GST registration. Their tax support saved us countless hours.',
      rating: 5,
      avatar: 'SJ'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why Entrepreneurs Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by founders from 100+ countries worldwide
          </p>
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-card hover-card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-lg text-primary">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.content}"</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '100+', label: 'Countries Served', icon: '🌍' },
            { number: '5,000+', label: 'Companies Formed', icon: '🏢' },
            { number: '24/7', label: 'Support Available', icon: '🕒' },
            { number: '99%', label: 'Client Satisfaction', icon: '⭐' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-card hover-card">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Client Logos */}
        <div className="bg-white rounded-2xl p-8 shadow-card">
          <h4 className="text-xl font-bold text-center mb-8 text-primary">Trusted by International Businesses</h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {['🌐', '💻', '🛒', '📱', '🎨', '📈'].map((icon, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{icon}</div>
                <div className="text-sm text-gray-600 font-medium">
                  {['E-commerce', 'SaaS', 'Agencies', 'Startups', 'Freelancers', 'Consultants'][index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials