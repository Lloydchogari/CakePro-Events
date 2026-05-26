import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShowcaseSection from './components/ShowcaseSection'
import FlavoursSection from './components/Flavour'
import GallerySection from './components/Gallery'
import About from './components/About'
import Training from './components/Training'
import Testimonials from './components/Testimonials'
import DecorCTA from './components/Decor'
import Footer from './components/Footer'
import Services from './components/Services'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <GallerySection />
      <FlavoursSection />
      <About />
      <Services />
      <Training />
      <Testimonials />
      <DecorCTA />
      <Footer />
    </div>
  )
}

export default App
