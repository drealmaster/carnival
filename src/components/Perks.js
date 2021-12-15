import React from 'react'
import styled from 'styled-components'
import security from '../assets/security.svg'
import support from '../assets/support.svg'
import access from '../assets/access.svg'
import withdrawal from '../assets/withdrawal.svg'
import PerksList from './PerksList'

const Perks = () => {

    const data = [
        {
          "image": security,
          "title": "Security",
          "description": "All investments are held in safe custody by a licensed securities custodian which protects all investments. We are protected by the Securities & Exchange Commission."
        },
        {
        "image": access,
          "title": "Easy Access",
          "description": "We aren’t rigid with our investment options. It doesn’t matter who you bank with, you can access our product offerings."
        },
        {
          "image": withdrawal,
          "title": "Easy Withdrawal",
          "description": "Supply your crypto details, enter an amount you wish to withdraw, and confirm your transaction to withdraw your money."
        },
        {
          "image": support,
          "title": "Excellent Support",
          "description": "Our support team is always ready to respond to whatever concerns you may have."
        }
      ];
    

    return (
      <Wrapper className='section section-center'>
        <div className='title'>
            <h3>Perks you enjoy.</h3>
          <p className='para'>
          We have built a robust system to help you manage and increase your income greatly
          </p>
          </div>

        <div className="content-wrapper">
        {data.map((item, index) => (
              <PerksList key={index} image={item.image} title={item.title} description={item.description} />
            ))}
        </div>
      </Wrapper>
    )
}

const Wrapper = styled.section`


.title{
    text-align: center
}

.para{
    color: #808080;
   margin-left: 1.1rem;
   margin-right: 1.1rem;
   font-size: 1.1rem;
   margin-bottom: 3rem
}

.content-wrapper{
    display: grid;
    /* column-gap: 9rem; */
    row-gap: 3rem;


    @media (min-width: 600px) {
    grid-template-columns: repeat(2,1fr);
    column-gap: 7rem;
  }
}
 

`




export default Perks
