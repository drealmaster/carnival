import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import Bitcoin from '../assets/Bitcoin2.jpg'
import Bonds from '../assets/Bonds.jpg'
import Forex from '../assets/forex.jpg'
import IRA from '../assets/IRA2.jpg'
import NFT from '../assets/NFT.jpg'
import Real from '../assets/Real2.jpg'
import Weed from '../assets/Weed2.jpg'
import Woman from '../assets/Woman.jpg'
import WorkingWoman from '../assets/WorkingWoman.jpg'
import Oldman from '../assets/Oldman.jpg'
import Youngman from '../assets/Youngman.jpg'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'services',
    url: '/services',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]


const people = [
  {
    id: 1,
    image: Woman,
    name: 'Maria',
    title: 'Counselor',
    quote: 'I was able to payout my student loans all thanks to Carnival Forex Investments.',
  },
  {
    id: 2,
    image: Youngman,
    name: 'John',
    title: 'Student',
    quote: 'IN CARNIVAL FOREX INVESTMENTS WE TRUST!!',
  },
  {
    id: 3,
    image: Oldman,
    name: ' Peter',
    title: 'Sales Personnel',
    quote:
      'Got my dream house and wife from my investment profits',
  },
  {
    id: 4,
    image: WorkingWoman,
    name: 'Susan',
    title: 'Bank Manager',
    quote:
      'I am short of words. I highly recommend Carnival Forex, they are the best',
  },
];

export default people;

export const featured = [
  {
    id: 1,
    image: Bitcoin,
    name: 'Crypto Currency',
    price: '1000',
    desc: 'If you believe in blockchain technology, cryptocurrency is a great investment that you should invest in. Carnival Forex sees Bitcoin as a store of value, and strongly believe Bitcoin can replace gold in the future. We offer a 100% return on a crypto currency investments.'
  },

   {
    id: 2,
    image: Weed,
    name: 'CBD Investment',
    price: '10,000',
    desc: "Marijuana is the world's most commonly cultivated, trafficked, and used drug; as the push for legalization at home and abroad grows, marijuana is garnering significant attention from investors like you, manufacturers, and researchers. Carnival Forex Investments offer 200% returns on all investments."
  },
 
  {
    id: 3,
    image: IRA,
    name: 'Individual Retirement Account',
    price: '500',
    desc: 'An IRA is an account set up at a financial institution that allows an individual to save for retirement with tax-free growth or on a tax-deferred basis. Whether you choose a traditional or Roth IRA, the tax benefits allow your savings to potentially grow, or compound, more quickly than in a taxable account.'
  },
  {
    id: 4,
    image: Bonds,
    name: 'Government bond funds',
    price: '5,000',
    desc: 'Government bond funds are mutual funds or ETFs that invest in debt securities issued by the U.S. government and its agencies. The funds invest in debt instruments such as T-bills, T-notes, T-bonds and mortgage-backed securities issued by government-sponsored enterprises such as Fannie Mae and Freddie Mac. These government bond funds are well-suited for the low-risk investor. These funds can also be a good choice for beginning investors and those looking for cash.'
  },
  {
    id: 5,
    image: Forex,
    name: 'Forex Investment',
    price: '500',
    desc: 'Forex is a market that requires fewer resources to get started, and it also offers high flexibility in terms of time. This makes forex market the most suitable choice for pros and novices alike. Carnival Forex investment offers 200% return on all investments.'
  },
  
  {
    id: 6,
    image: NFT,
    name: 'NFT',
    price: '10,000',
    desc: 'NFTs are digital assets that act as secure documentation of ownership and can be a worthwhile investment for collectors. Artists, collectors, and speculators alike have flocked to the movement  as other digital assets have skyrocketed in price.'
  },
  {
    id: 7,
    image: Real,
    name: 'Real Estate',
    price: '1,000',
    desc: 'Buying and owning real estate is an investment strategy that can be both satisfying and lucrative. A real estate investment trust (REIT) is best for investors who want portfolio exposure to real estate without a traditional real estate transaction.'
  },
 
];


export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
