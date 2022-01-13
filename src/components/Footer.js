import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin  } from 'react-icons/fa'
const Footer = () => {
  return (
    <Wrapper class="footer section bd-container ">
            <div class="footer__container bd-grid">
                <div class="footer__content">
                <Link class='footer__logo' to='/'>Carnival Forex</Link>
                    <div>
                    <Link class='footer__social' to='/'> <FaFacebook /> </Link>
                    <Link class='footer__social'  to='/'> <FaLinkedin /> </Link>
                    </div>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Services</h3>
                    <ul className="footer__ul">
                        <li><Link to='/services'>Forex Investment</Link></li>
                        <li><Link to='/services'>Cryptocurrency investment</Link></li>
                        <li><Link to='/services'>CBD Investment</Link></li>
                        <li><Link to='/services'>Real Estate</Link></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Information</h3>
                    <ul className="footer__ul">
                    <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/about'>FAQ</Link></li>
                        <li><Link to='/'>Privacy Policy</Link></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Address</h3>
                    <ul className="footer__ul">
                        <li>450 E. Reed Ave.Manitowoc.WI 54220</li>
                        <li>+18154509187</li>
                        <li>carnivalforex@gmail.com</li>
                    </ul>
                </div>
            </div>

            <p class="footer__copy">&#169; Carnival forex All right reserved</p>
        </Wrapper>
  )
}

const Wrapper = styled.footer`
.section{
  padding: 4rem 0 2rem !important;
}

.bd-container{
  max-width: 960px !important;
  width: calc(100% - 2rem) !important;
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}

.bd-grid{
  display: grid !important;
  gap: 1rem !important;
}

.footer__container{
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
  row-gap: 1rem !important;
}

.footer__logo{
  font-size: 1rem !important;
  font-weight: 600 !important;
}

.footer__social{
  font-size: 1.5rem;
  color: pink;
  margin-right: 1rem;
}

.footer__title{
  font-size: 1rem;
  color: black;
  margin-bottom: 1rem;
  margin-top: 0.4rem; 
}

.footer__content{
  margin-left: 1rem !important;
}

.footer__ul{
  margin-left: -2rem;
}

li{
  margin-bottom: 0.5rem;
  
}

.li:hover{
  color: yellowgreen;
}

.footer__copy{
  text-align: center !important;
  font-size: 0.5rem !important;
  color: pink !important;
  margin-top: 2.5rem !important;
  margin-bottom: 1rem !important;
}

`

export default Footer
