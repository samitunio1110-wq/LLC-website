import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold">
                Global<span className="text-accent">LLC</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Start & manage your US or Canadian LLC online from anywhere in the world. 
              No travel, no paperwork, no hidden fees.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span>🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span>💼</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">US LLC Formation</li>
              <li className="text-gray-300">Canada Corporation</li>
              <li className="text-gray-300">Registered Agent</li>
              <li className="text-gray-300">EIN/BN Registration</li>
              <li className="text-gray-300">Bank Account Setup</li>
              <li className="text-gray-300">Compliance Support</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-3">📧</span>
                <div>
                  <div className="font-medium">Email</div>
                  <div>info@global-llc.com</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">📞</span>
                <div>
                  <div className="font-medium">Phone</div>
                  <div>+1 (555) 123-4567</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">🕒</span>
                <div>
                  <div className="font-medium">Hours</div>
                  <div>24/7 Online Support</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">🌍</span>
                <div>
                  <div className="font-medium">Location</div>
                  <div>Serving clients worldwide</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} GlobalLLC Formation. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-4">
            <p>Form your company in the United States or Canada without travel, paperwork, or hidden fees.</p>
            <p className="mt-1">From Anywhere in the World!</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer