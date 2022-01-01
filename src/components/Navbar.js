import React, {useState} from 'react'
import styled from 'styled-components'
// import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useAuth } from '../context/AuthContext'

const Nav = ({onChange}) => {
  const {openSidebar}  = useProductsContext()
  const { t, i18n } = useTranslation();
  const { user } = useAuth()
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
           <h1>Carnival Forex</h1>          
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>

        {t('links', {returnObjects: true}).map((link) => {
          const { id, text, url } = link
          return ( <li key={id}>
          <Link to={url}>{text}</Link>
        </li>)
        })}
           {user && (
             <>
            <li>
              <Link to='/dashboard'>{t("DashboardLink")}</Link>
            </li>
            <li>
              <Link to='/withdraw'>{t("WithdrawLink")}</Link>
            </li>
            </>
          )}
        </ul>
        <CartButtons />
        <select name="language" onChange={onChange}>
            <option value="en">English</option>
            <option value="ch">Chinese</option>
          </select>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  .nav-center {
    width: 90vw !important;
    margin: 0 auto !important;
    max-width: var(--max-width) !important;
  }
  .nav-header {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    h1 {
      width: 275px !important;
      color: var(--clr-primary-5) !important;
      font-size: 1.4rem !important;
      align-items: center !important;
      justify-content: center !important;
      margin-top: 20px !important;
    }
  }
  .nav-toggle {
    background: transparent !important;
    border: transparent !important;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .navBtn{
      background: var(--clr-primary-5) !important;
      color: var(--clr-primary-10) !important;
      padding: 1rem 3rem !important;
      letter-spacing: var(--spacing) !important;
      // display: inline-block !important;
      font-weight: 400 !important;
      transition: var(--transition) !important;
      font-size: 0.9rem !important;
      cursor: pointer !important;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) !important;
      border-radius: var(--radius) !important;
      border-color: transparent !important;
    
      svg {
             margin-left: 5px;
          }
    }
    .nav-center {
      display: grid !important;
      grid-template-columns: auto 1fr auto !important;
      align-items: center !important;
    }
    .nav-links {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      margin-top: 2rem;
      li {
        margin: 0 0.5rem !important;
      }
      a {
        color: var(--clr-grey-3) !important;
        font-size: 1rem !important;
        text-transform: capitalize !important;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav