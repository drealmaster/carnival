import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Product from '../components/Product'
import {featured} from '../utils/constants'
import { Footer } from '../components'
import { useTranslation } from 'react-i18next'

const ProductsPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <Wrapper className='section'>
      <div className='title'>
        <h2>{t("ServicesHeader")}</h2>
        <p className='desc'>{t("ServicesDesc")}</p>
      </div>
      <div className='section-center featured'>
      {t('Featured', {returnObjects: true}).map((product) => {
          return <Product key={t(product.id)} {...product} />
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
