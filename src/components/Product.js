import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
const Product = ({desc, image, name, price, id }) => {
  const { user } = useAuth()
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt={name} />
        {/* <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link> */}
      </div>
      <footer>
        <h2>{name}</h2>
        <h4> Minimum: ${price}</h4>
  <p>{desc}</p>
        {user ? (
         <Link to='/checkout' className='button'>
         Invest now
        </Link>
       
      ) : (
        <Link to='/login' className='button'>
         Get Started
        </Link>
      )} 
      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  /* .container {
    background: var(--clr-black);
    border-radius: var(--radius);
  } */
  img {
    width: 100% !important;
    display: block !important;
    object-fit: cover !important;
    border-radius: var(--radius) !important;
    transition: var(--transition) !important;
  }
 
  .container:hover img {
    opacity: 0.5;
  }

  .button{
    text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block; 
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  border-color: transparent;
  margin-top:0.6rem;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    margin-left: 1rem;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
    color: var(--clr-primary-5);
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`
export default Product