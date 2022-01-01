import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Product from './Product'
import { FiChevronRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next'
const FeaturedProducts = () => {
  const { t, i18n } = useTranslation();
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>{t("InvestmentPlans")}</h2>
      </div>
      <div className='section-center featured'>
        {t('Featured', {returnObjects: true}).slice(0,3).map((product) => {
          return <Product key={t(product.id)} {...product} />
        })}
      </div>
      <Link to='/services' className='btn'>
        {t("SeeMore")}<FiChevronRight />
      </Link>
    </Wrapper>
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
  .btn {
    display: block !important;
    width: 148px !important;
    margin: 0 auto !important;
    text-align: center !important;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts