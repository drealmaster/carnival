import React from 'react'
import styled from 'styled-components'

const PerksList = ({image, title, description}) => {
    return (
        <Wrapper >
                    <img class="content" src={image} alt={title}/>
                    <h4 className='text-center'>{title}</h4>
                    <p className='text-center'>{description}</p>
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
