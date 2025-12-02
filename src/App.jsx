import { Routes, Route } from 'react-router-dom'
import { CountryProvider } from './context/CountryContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {
  return (
    <CountryProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CountryProvider>
  )
}

export default App