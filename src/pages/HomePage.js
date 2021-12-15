import React from 'react'
import { FeaturedProducts, Hero, Testimonials, Footer } from '../components'
import Perks from '../components/Perks'
const HomePage = () => {
  return (
    <main>
       <Hero />
      <Perks />
      <Testimonials />
      <FeaturedProducts />
      <Footer />
    </main>
  )
}

export default HomePage