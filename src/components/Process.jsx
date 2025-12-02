import { useCountry } from "../context/CountryContext";

const Process = () => {
  const { countryData } = useCountry();

  const steps = [
    {
      number: "01",
      title: "Choose a Jurisdiction",
      icon: "🌍",
      description: "We help you compare tax rates and regulations.",
      details: [
        "Compare global taxation rules",
        "Banking & payment guidance",
        "Best country selection for your business model",
      ],
    },
    {
      number: "02",
      title: "Get Registered",
      icon: "📝",
      description: "We prepare and submit all required documents.",
      details: [
        "Complete incorporation forms",
        "Submit legal paperwork",
        "Secure registration certificate",
      ],
    },
    {
      number: "03",
      title: "Filing & Legal Procedure",
      icon: "⚖️",
      description: "We handle all tax and compliance filings.",
      details: [
        "Obtain required licenses",
        "Compliance & tax filings",
        "Manage reporting requirements",
      ],
    },
    {
      number: "04",
      title: "Start Operation",
      icon: "🚀",
      description: "We help you launch business activities globally.",
      details: [
        "Set up banking & payment accounts",
        "Launch operations smoothly",
        "Start serving international clients",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            How Global Business Formation Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, streamlined 4-step process to launch your international company.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          
          {/* Line for large screen */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg border-4 border-white group-hover:scale-110 transition-all duration-300">
                  {step.number}
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 pt-12 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-lg">
                <div className="text-5xl mb-5 text-center">{step.icon}</div>

                <h3 className="text-xl font-semibold text-primary text-center mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-center mb-6">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-3">
                  {step.details.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                      <span className="text-accent mr-2 mt-1">✔️</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Timeline Info */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center justify-center bg-white rounded-2xl px-10 py-8 shadow-xl border border-primary/10 backdrop-blur-xl">
            <div className="text-4xl mr-0 md:mr-6 mb-4 md:mb-0">⏱️</div>

            <div className="text-left space-y-3">
              <h4 className="text-xl font-bold text-primary">
                Global Formation Timeline
              </h4>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {countryData.processTime}
                  </div>
                  <div className="text-gray-600 text-sm">Processing</div>
                </div>

                <div className="w-px h-10 bg-gray-300"></div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-gray-600 text-sm">Support</div>
                </div>

                <div className="w-px h-10 bg-gray-300"></div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {countryData.pricing}
                  </div>
                  <div className="text-gray-600 text-sm">Starting Price</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
