import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-4'
    }`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-2xl font-bold text-primary">
              Global<span className="text-accent">LLC</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors ${
                isActive('/services') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className={`font-medium transition-colors ${
                isActive('/pricing') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-secondary transition-colors shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="border border-primary text-primary px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Free Consultation
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-white rounded-lg p-4 shadow-card">
              <Link 
                to="/" 
                className={`font-medium py-2 px-4 rounded ${
                  isActive('/') ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`font-medium py-2 px-4 rounded ${
                  isActive('/services') ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className={`font-medium py-2 px-4 rounded ${
                  isActive('/pricing') ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium py-2 px-4 rounded ${
                  isActive('/contact') ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <Link
                  to="/contact"
                  className="bg-primary text-white py-2.5 rounded-lg font-semibold text-center hover:bg-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  className="border border-primary text-primary py-2.5 rounded-lg font-semibold text-center hover:bg-primary/5 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header