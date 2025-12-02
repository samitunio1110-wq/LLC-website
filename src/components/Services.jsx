import { useCountry } from "../context/CountryContext"

const Services = () => {
  const { selectedCountry, countryData } = useCountry()

  const formationText = {
    Canada: {
      flag: "🇨🇦",
      title: "Canada Company Formation",
      points: [
        "Easy, low-cost registration with strong reputation.",
        "Access to Stripe, PayPal, major banks, and NAFTA benefits.",
        "Favourable taxes for small businesses + simple compliance."
      ]
    },
    Turkey: {
      flag: "🇹🇷",
      title: "Turkey Company Formation",
      points: [
        "Very low operational costs and affordable taxes.",
        "Strategic hub between the EU, Middle East, and Asia.",
        "Great for remote businesses with growing tech ecosystem."
      ]
    },
    US: {
      flag: "🇺🇸",
      title: "US LLC Formation",
      points: [
        "Highest global trust, ideal for SaaS & digital products.",
        "Access to U.S. payment processors & global tools.",
        "Simple LLC structure, flexible taxes & strong legal protection."
      ]
    }
  }

  const selected = formationText[selectedCountry] || formationText["US"]

  const services = [
    {
      icon: "🧾",
      title: "Tax Compliance",
      description: "Focus on growing your business! Let us take care of taxes.",
      features: ["State Filing", "Annual Reports", "Bookkeeping Services"]
    },
    {
      icon: "🏦",
      title: "International Banking",
      description: "Open global payment gateways and banking solutions.",
      features: [
        "Access to global banks",
        "Support for major processors",
        "Multi-currency accounts"
      ]
    },
    {
      icon: "🔍",
      title: "100% Transparency",
      description: "No hidden fees. Full visibility on processes.",
      features: ["Clear pricing", "No surprises", "Timeline visibility"]
    },
    {
      icon: "⏱️",
      title: "Timely Updates",
      description: "Stay informed about every step.",
      features: [
        "Regular progress updates",
        "Fast response times",
        "Real-time tracking"
      ]
    },
    {
      icon: "📞",
      title: "24/7 Client Support",
      description: "We are always here to help.",
      features: [
        "Round-the-clock availability",
        "Instant assistance",
        "Dedicated support team"
      ]
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Everything You Need for {countryData?.name || "United States"}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive services designed for international entrepreneurs.
          </p>
        </div>

        {/* Country Formation Highlight */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-16 border border-gray-200 hover:shadow-2xl transition-all duration-300">
          <div className="text-5xl mb-4">{selected.flag}</div>
          <h3 className="text-2xl font-bold text-primary mb-6">{selected.title}</h3>

          <ul className="space-y-3">
            {selected.points.map((p, idx) => (
              <li key={idx} className="flex items-start text-gray-700">
                <span className="text-green-600 text-xl mr-3">✔</span>
                <span className="text-lg">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">{s.icon}</div>

              <h3 className="text-xl font-semibold text-primary mb-3">
                {s.title}
              </h3>

              <p className="text-gray-600 mb-6">{s.description}</p>

              <ul className="space-y-2">
                {s.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-accent text-lg mr-3">✔</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
