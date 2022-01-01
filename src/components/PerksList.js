import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const PerksList = ({image, title, description}) => {

    const { t, i18n } = useTranslation();
    return (
        <Wrapper >
                    <img class="content" src={image} alt={title}/>
                    <h4 className='text-center'>{t("title")}</h4>
                    <p className='text-center'>{t("SecurityText")}</p>
                </Wrapper>
    )
}


const Wrapper = styled.div`
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

export default PerksList
