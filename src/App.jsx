import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FlavoursSection from './components/Flavour'
import GallerySection from './components/Gallery'
import BlackInfoSection from './components/Black'
import About from './components/About'
import Training from './components/Training'
import Testimonials from './components/Testimonials'
import DecorCTA from './components/Decor'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BlackInfoSection />
      <GallerySection />
      <FlavoursSection />
      <About />
      <Training />
      <Testimonials />
      <DecorCTA />
      <Footer />
    </div>
  )
}

export default App
