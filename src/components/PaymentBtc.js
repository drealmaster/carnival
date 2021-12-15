import React, {useState} from 'react'
import styled from 'styled-components'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'

const PaymentBtc = () => {
    const [Name, setName] = useState('bc1q8mjfz3p8q3tqgew090dlzg773zuvqqzhg9kt67')
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
        <h2>Option 2</h2>


        <h3 className='desc'>Payment through CryptoCurrency(Bitcoin)</h3>
      </div>
            <a href="https://www.bitcoinqrcodemaker.com"><img src="https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&amp;address=bc1q8mjfz3p8q3tqgew090dlzg773zuvqqzhg9kt67" alt="Bitcoin QR Code Generator" height="300" width="300" border="0" /></a>
       <p>bc1q8mjfz3p8q3tqgew090dlzg773zuvqqzhg9kt67</p>

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
        </Wrapper>
    )
}


const Wrapper = styled.section`
text-align: center
 
`

export default PaymentBtc
