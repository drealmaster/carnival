import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { db } from "../firebase"
import { useAuth } from '../context/AuthContext'
import {
	collection,
	getDoc,
	doc,
	  } from 'firebase/firestore'


const Withdrawal = () => {
    const navigate = useNavigate();  
	const { user } = useAuth()
	const UserColRef = doc(db, 'users', user.uid)

	const [Deposit, setDeposit] = useState('')
useEffect(() => {
	getDoc(UserColRef)
	.then((doc) => {
	  const deposit = doc.data().deposit
	  setDeposit(deposit)
	})
	
}, [])
   


    
       const Withdrawal = () => {
navigate('/dashboard');
       }

    return (
        <Wrapper className='section section-center'>
        
<h3  className="title">Withdrawal Form</h3>
<Form>
  <fieldset>
  <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput">Account Balance</Form.Label>
      <Form.Control disabled type='number' placeholder={Deposit} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput">Amount($)</Form.Label>
      <Form.Control type='number' placeholder="100" />
    </Form.Group>
 

    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
      <Form.Control type='email' placeholder="Email" />
    </Form.Group>
 

    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput">Address</Form.Label>
      <Form.Control type='textarea' placeholder="Bitcoin Address" />
    </Form.Group>
 


    
    <Button className='btn3' type="submit">Withdraw</Button>
  </fieldset>
</Form>



    </Wrapper>
    )
}


const Wrapper = styled.section`

`

export default Withdrawal
