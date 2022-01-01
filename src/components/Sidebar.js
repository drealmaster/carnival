import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import CartButtons from './CartButtons'

import { useAuth } from '../context/AuthContext'

const Sidebar = () => {
   const { isSidebarOpen, closeSidebar } = useProductsContext()
   const { t, i18n } = useTranslation();
  const { user } = useAuth()
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <h1>Carnival Forex</h1>
          <button type='button' className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
        {t('links', {returnObjects: true}).map((link) => {
          const { id, text, url } = link
          return ( <li key={id}>
          <Link to={url} onClick={closeSidebar}>{text}</Link>
        </li>)
        })}
           {user && (
             <>
            <li>
              <Link to='/dashboard' onClick={closeSidebar}>{t("DashboardLink")}</Link>
            </li>
            <li>
              <Link to='/withdraw' onClick={closeSidebar}>{t("WithdrawLink")}</Link>
            </li>
            </>
          )}
        </ul>
        <CartButtons /> 
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  h1{
    width: 275px;
      margin-left: -40px;
      font-size: 1.4rem;
      margin-top: 1rem;
      color: var(--clr-primary-5) !important;
      
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    color: var(--clr-primary-5) !important;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
    margin-left: -15px;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar