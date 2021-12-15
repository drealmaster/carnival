import React from 'react'
import styled from 'styled-components'
// import { PageHero } from '../components'
import aboutImg from '../assets/image6.jpg'
import AppAccordion from '../AppAccordion'
import ContactForm from '../components/ContactForm'
import { Footer } from '../components'
const AboutPage = () => {
  return (
    <main>
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
          </div>
          <p>
            Carnival Forex Investments is an independent investment platform currently managing $189 million for individuals, families and institutions around the world. 
            For over 40 years, we've helped clients work toward their financial goals. 
With roots as an institutional money manager, Carnival Forex Investments provides the same institutional-caliber expertise to individuals. This means you get a disciplined investment strategy along with our unique, high-touch client service.
           We welcome the opportunity to learn more about your situation and mutually discover if we could be a fit for you. 

          </p>

          <p>At Carnival Forex Investments, we strive to provide high-touch service and education so that our clients fully understand their investment strategies and are able to stick with them despite the temptation to do otherwise. A primary way we do this is by providing you a dedicated 
          Investment Counselor who, among other things, will answer questions about your 
          Carnival Forex portfolio and on other investment advisers or products you are considering.</p>
        </article>
      </Wrapper>
      <AppAccordion />
     <ContactForm />
      <Footer />
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage