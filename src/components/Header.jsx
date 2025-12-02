import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCountry } from "../context/CountryContext";

const FlagUS = () => (
  <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-5 h-5" />
);

const FlagCanada = () => (
  <img src="https://flagcdn.com/ca.svg" alt="Canada Flag" className="w-5 h-5" />
);

const FlagTurkey = () => (
  <img src="https://flagcdn.com/tr.svg" alt="Turkey Flag" className="w-5 h-5" />
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { selectedCountry, countryData, switchCountry } = useCountry();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  // Country selection items
  const countries = [
    {
      code: "US",
      name: "US LLC",
      flag: <FlagUS />,
      activeBg: "bg-blue-600 text-white",
      inactiveBg: "hover:bg-blue-50",
    },
    {
      code: "Canada",
      name: "Canada Corp",
      flag: <FlagCanada />,
      activeBg: "bg-red-600 text-white",
      inactiveBg: "hover:bg-red-50",
    },
    {
      code: "Turkey",
      name: "Turkey Company",
      flag: <FlagTurkey />,
      activeBg: "bg-green-600 text-white",
      inactiveBg: "hover:bg-green-50",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-3" : "bg-white py-5"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-primary block leading-tight">
                Global<span className="text-accent">LLC</span>
              </span>
              <span className="text-xs text-gray-500 font-medium">
                International Business Formation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-5 py-3 font-medium transition-all rounded-lg ${
                isActive("/")
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>

            {/* Country Selection */}
            <div className="flex items-center space-x-1 mx-2">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => switchCountry(country.code)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all border 
        ${
          selectedCountry === country.code
            ? `${country.activeBg} border-transparent shadow-md`
            : `text-gray-700 border-gray-200 ${country.inactiveBg}`
        }`}
                >
                  {country.flag}
                  <span>{country.name}</span>
                </button>
              ))}
            </div>

            <Link
              to="/services"
              className={`px-5 py-3 font-medium transition-all rounded-lg ${
                isActive("/services")
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className={`px-5 py-3 font-medium transition-all rounded-lg ${
                isActive("/pricing")
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`px-5 py-3 font-medium transition-all rounded-lg ${
                isActive("/contact")
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 animate-fade-in">
            <div className="bg-white rounded-xl p-4 shadow-card border border-gray-200">
              {/* Country Selection for Mobile */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-700 mb-3 px-2">
                  Select Country:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        switchCountry(country.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all
        ${
          selectedCountry === country.code
            ? `${country.activeBg} border-transparent`
            : `border-gray-300 text-gray-700 ${country.inactiveBg}`
        }`}
                    >
                      <span className="mb-2">{country.flag}</span>
                      <span className="text-xs font-medium">
                        {country.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                <Link
                  to="/"
                  className={`flex items-center px-4 py-3 rounded-lg font-medium ${
                    isActive("/")
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Home
                </Link>

                <Link
                  to="/services"
                  className={`flex items-center px-4 py-3 rounded-lg font-medium ${
                    isActive("/services")
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Services
                </Link>

                <Link
                  to="/pricing"
                  className={`flex items-center px-4 py-3 rounded-lg font-medium ${
                    isActive("/pricing")
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Pricing
                </Link>

                <Link
                  to="/contact"
                  className={`flex items-center px-4 py-3 rounded-lg font-medium ${
                    isActive("/contact")
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="block w-full bg-primary text-white py-3 rounded-lg font-semibold text-center hover:bg-secondary transition-colors flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
