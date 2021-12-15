import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/image1.jpg'
import heroBcg2 from '../assets/image4.jpg'
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Invest for the <br />
          future
        </h1>
        <p>
          If you're looking for an investment firm to provide disciplined investing strategies, offer straightforward market perspective and help you navigate market volatility, then you have come to the right place.
        </p>
        <Link to='/services' className='btn hero-btn'>
         Learn More
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg2} alt='nice table' className='main-img' /> 
        <img src={heroBcg} alt='person working' className='accent-img' /> 
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .main-img {
    max-width: 100%;
  height: auto;
    width: 300px;
  justify-self: center;
  
  } 

  .accent-img{
display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 1.5rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  @media (min-width: 900px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    
    .img-container {
      display: block;
      position: relative;
    }
     .main-img {
    display: none;
    } 
    .accent-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    } 
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero