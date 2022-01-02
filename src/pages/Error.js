import React from 'react'
import {ExternalLink} from 'react-external-link'
import styled from 'styled-components'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Error = () => {
    return (
        <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Our server ran into some error and your request cannot be processed at the moment.
        We suggest you purchase through Coinbase.</h3>
        <ExternalLink href='https://www.coinbase.com/' className='No_btn'>
          Visit Coinbase  <FaLongArrowAltRight />
        </ExternalLink>
      </section>
    </Wrapper>
    )
}

const Wrapper = styled.main`
 background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`


export default Error
