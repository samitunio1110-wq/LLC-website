import { useEffect } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Jurisdictions from '../components/Jurisdictions'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="animate-fade-in">
      <Hero />
      <Services />
      <Jurisdictions />
      <Process />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Home