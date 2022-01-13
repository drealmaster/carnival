import React from 'react'
import { FeaturedProducts, Hero, Testimonials, Footer } from '../components'
import Perks from '../components/Perks'
import axios from "axios"
const HomePage = () => {

  const fetchUsers = () => {
    // Where we're fetching data from
    return fetch("https://blockchain.info/multiaddr?active=$address|$address")
    // We get the API response and receive data in JSON format
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch ((error) => console.error(error));}

  async function fetchData() {
    try {
      const result = await axios.get("https://blockchain.info/multiaddr?active=$address|$address")
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData()
 
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