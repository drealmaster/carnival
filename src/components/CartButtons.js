import React from 'react'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useAuth } from '../context/AuthContext'
import { auth } from "../firebase"
import {
   signOut,
} from "firebase/auth";
import { useTranslation } from 'react-i18next'

const CartButton = () => {
  const { closeSidebar } = useProductsContext()
  const { user } = useAuth()
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Wrapper className='cart-btn-wrapper'>
       {user ? (
          <button
          type='button'
          className='btn2'
          onClick={()=>{
            closeSidebar()
            navigate('/');
            logout()
          }}
        >
          {t("Logout")} <FaUserMinus />
        </button>
       
      ) : (
        <Link to='/login'>
        <button type='button' className='btn2' onClick={closeSidebar} >
         {t("Login")} <FaUserPlus />
          </button>
        </Link>
      )} 
    </Wrapper>
  )
}

const Wrapper = styled.div`
 .btn2{
    background: var(--clr-primary-5) !important;
    color: var(--clr-primary-10) !important;
    padding: 0.5rem 1.2rem !important;
    letter-spacing: var(--spacing) !important;
    font-weight: 400 !important;
    transition: var(--transition) !important;
    font-size: 0.9rem !important;
    cursor: pointer !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) !important;
    border-radius: var(--radius) !important;
    border-color: transparent !important;
  margin-top: 1rem;
    svg {
           margin-left: 5px;
        }
  }
`
export default CartButton