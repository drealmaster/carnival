import React, {useState} from 'react'
import styled from 'styled-components'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa';
import {ExternalLink} from 'react-external-link'

const PaymentBtc = () => {
    const [Name, setName] = useState('1HmAzp4mJnsNBxXQzmmo8RgwsL2S5SVU6o')
    const navigate = useNavigate();


    const Display = () => {
        toast.success("Copied to clipboard", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
    }
    const PaymentConfirm = () => {
        toast.success("Your Payment is being checked and would be updated duly", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })

          navigate('/dashboard');
    }
    
    return (
        <Wrapper className='section section-center'>
         <div className='title'>
        <h3 className='desc'>Payment through CryptoCurrency(Bitcoin)</h3>
      </div>

      <div className="title">
      <a href="https://www.bitcoinqrcodemaker.com"><img src="https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&amp;address=1HmAzp4mJnsNBxXQzmmo8RgwsL2S5SVU6o" alt="Bitcoin QR Code Generator" height="300" width="300" border="0" /></a>
       <p>1HmAzp4mJnsNBxXQzmmo8RgwsL2S5SVU6o</p>

       <h5>Transmit payment to the above Address to complete transaction</h5>

       <CopyToClipboard text={Name}>
 <button onClick={Display} className='btn hero-btn'>Copy Address</button>
        </CopyToClipboard>
       



        <ToastContainer 
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />


      <button onClick={PaymentConfirm} className='btn hero-btn'>Click to Confirm Payment</button> 
      
     
      </div>

      <ExternalLink href='https://www.changelly.com/' className='No_btn'>
      No bitcoin? Purchase here  <FaLongArrowAltRight />
        </ExternalLink>
        </Wrapper>
    )
}


const Wrapper = styled.section`
text-align: center


 
`

export default PaymentBtc
