import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Product from '../components/Product'
import {featured} from '../utils/constants'
import { Footer } from '../components'

const ProductsPage = () => {
  return (
    <>
    <Wrapper className='section'>
      <div className='title'>
        <h2>An Array of Products just for you</h2>
        <p className='desc'>Choose your preferred product mix without stress. No paperwork, no bank queues, no broker required.</p>
      </div>
      <div className='section-center featured'>
        {featured.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div> 
    </Wrapper>

   
    <Footer />
    </>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .desc{
    color: #808080;
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default ProductsPage
