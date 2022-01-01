import React from 'react'
import styled from 'styled-components'
import security from '../assets/security.svg'
import support from '../assets/support.svg'
import access from '../assets/access.svg'
import withdrawal from '../assets/withdrawal.svg'
import PerksList from './PerksList'
import { useTranslation } from 'react-i18next'

const Perks = () => {
  const { t, i18n } = useTranslation();

 
  
    // const data = [
    //     {
    //       "image": security,
    //       "title": "Security",
    //       "description": "All investments are held in safe custody by a licensed securities custodian which protects all investments. We are protected by the Securities & Exchange Commission.",
    //     },
    //     {
    //     "image": access,
    //       "title": "Easy Access",
    //       "description": "We aren’t rigid with our investment options. It doesn’t matter who you bank with, you can access our product offerings."
    //     },
    //     {
    //       "image": withdrawal,
    //       "title": "Easy Withdrawal",
    //       "description": "Supply your crypto details, enter an amount you wish to withdraw, and confirm your transaction to withdraw your money."
    //     },
    //     {
    //       "image": support,
    //       "title": "Excellent Support",
    //       "description": "Our support team is always ready to respond to whatever concerns you may have."
    //     }
    //   ];
    

    return (
      <Wrapper className='section section-center'>
        <div className='title'>
            <h3>{t("PerksHeader")}</h3>
          <p className='para'>
         {t("PerksSub")}
          </p>
          </div>

        <div className="content-wrapper">
                 <Wrapper>
                 <img class="content" src={security} />
                    <h4 className='text-center'>{t("Security")}</h4>
                    <p className='text-center'>{t("SecurityText")}</p>
                 </Wrapper>
                 <Wrapper>
                 <img class="content" src={access} />
                    <h4 className='text-center'>{t("EasyAccess")}</h4>
                    <p className='text-center'>{t("EasyText")}</p>
                 </Wrapper>
                 <Wrapper>
                 <img class="content" src={withdrawal} />
                    <h4 className='text-center'>{t("Withdrawal")}</h4>
                    <p className='text-center'>{t("WithdrawalText")}</p>
                 </Wrapper>
                 <Wrapper>
                 <img class="content" src={support} />
                    <h4 className='text-center'>{t("Support")}</h4>
                    <p className='text-center'>{t("SupportText")}</p>
                 </Wrapper>

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

.content{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;

}

@media (min-width: 600px) {

   .content{
       width: 11%;
   }


}

h4{
   margin-top: 1rem;
   font-size: 1rem;
   
}

p{
   color: #808080;
  overflow-wrap: break-word;
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1.2rem;
}
 

`




export default Perks
