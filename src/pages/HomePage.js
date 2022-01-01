import React from 'react'
import { FeaturedProducts, Hero, Testimonials, Footer } from '../components'
import Perks from '../components/Perks'
const HomePage = () => {
  return (
    <main>
      <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,eos,ethereum,litecoin,ripple,polkadot,cardano,bitcoin-cash,stellar,dogecoin,binancecoin,tether,monero,solana,inu-token,shiba-inu" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
       <Hero />
      <Perks />
      <coingecko-coin-market-ticker-list-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-market-ticker-list-widget>
      <Testimonials />
      <FeaturedProducts />
      <Footer />
    </main>
  )
}

export default HomePage