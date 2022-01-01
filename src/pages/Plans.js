import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
const Plans = () => {
    const { t, i18n } = useTranslation();
    return (
        <Wrapper className='section section-center'>
<h2 className="heading-primary">our Pricing</h2>
<div className="plan-section">
{t('Pricing', {returnObjects: true}).map((pricing) => {
        const {Plan, Percentage, Duration, Min, Max} = pricing;
         return (  <div className="plan basic">
             <h2 className="plan-heading">{Plan}</h2>
             <h3 className="plan-price"><span className="dollar">{Percentage}</span></h3>
             <ul className="plan-features">
             <li className="plan-item">{Duration}</li>
               <li className="plan-item">{t("Minimum")}: {Min}</li>
               <li className="plan-item">{t("Maximum")}: {Max}</li>
             </ul>
             <Link to="/signin" className="btn2 buy-now">Invest Now</Link>
          
         </div>)

})}
  </div>        
        </Wrapper>
    )

   
}

const Wrapper = styled.section`
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
  
  body{
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    color:#494c5f  ;
    /* background-color:#6d708d ; */
  }
  
  .heading-primary{
    font-size: 2rem;
    text-align: center;
    margin: 50px 0;
  }
  
  .plan-section{
    display: grid;
    /* column-gap: 9rem; */
    row-gap: 3rem;


    @media (min-width: 600px) {
    grid-template-columns: repeat(4,1fr);
    column-gap: 1rem;
  }
  }
  
  .plan-section .plan{
    // width: 230px;
    text-align: center;
    padding: 30px 30px;
    margin-right: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 0.6rem 1.6rem #b3b5c6;
  
  }
  
  .plan-section .plan .plan-price{
    font-size: 4rem;
  }
  
  .plan-section .plan .dollar{
    font-size: 2rem;
    font-weight: 400;
    vertical-align: middle;
  
  }
  
  .plan-section .plan .plan-features .plan-item{
    padding: 15px 0;
    border-bottom: 1px solid  #b3b5c6;
  }
  
  .plan-section .plan .btn2{
    display: block;
    background-color: #696fdd;
    padding: 10px;
    margin-top: 20px;
    color: #f6f6fe;
    border-radius: 5px;
  }
  
  .plan-section .plan .btn:hover{
  background-color: #f6f6fe;
  color: #494c5f;
  border: 1px solid #696fdd;
  font-weight: 900;
  }
  
  .plan-section .plan .btn-blue{
    background-color: #f6f6fe;
    color: #696fdd;
  }
  
  .plan-section .plan .btn-blue:hover{
    background-color: #696fdd;
    color: #f6f6fe;
    border: 1px solid #f6f6fe;
  }
  
  
  
  
  .plan-section .basic{
    // background-color: #f6f6f6;

    background-color: ${props => (props.selected ? '#696fdd' : '#f6f6f6')};
  }
  
  .plan-section .pro{
    background-color: #696fdd;
    color: #f6f6fe;
    height: 400px;
  }
  
  .plan-section .master{
    background-color: #f6f6f6;
  }

`

export default Plans
