import React from 'react'


import Woman from '../assets/Woman.jpg'
import WorkingWoman from '../assets/WorkingWoman.jpg'
import Oldman from '../assets/Oldman.jpg'
import Youngman from '../assets/Youngman.jpg'



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
      '',
  },
  {
    id: 4,
    image: WorkingWoman,
    name: 'Susan',
    title: 'Bank Manager',
    quote:
      '',
  },
];

export default people;



export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
