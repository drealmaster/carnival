import React, {useState} from 'react'
import { db } from "../firebase"
import styled from 'styled-components'
import FeaturedProducts from './FeaturedProducts'
import { useAuth } from '../context/AuthContext'
import {
collection,
getDoc,
doc,
  } from 'firebase/firestore'
  import { useTranslation } from 'react-i18next'
  import { Link } from 'react-router-dom'
import { Plans } from '../pages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UserDashboard = () => {
  const { t, i18n } = useTranslation();
  const { user } = useAuth()
    const UserColRef = doc(db, 'users', user.uid)
    const [Name, setName] = useState('')
    const [Deposit, setDeposit] = useState('')
    const [Payout, setPayout] = useState('')

    getDoc(UserColRef)
       .then((doc) => {
         console.log(doc.data(), doc.id);
         const name = doc.data().name
         const deposit = doc.data().deposit
         const payout = doc.data().payout
         setName(name)
         setDeposit(deposit)
         setPayout(payout)
         console.log(Name);
       })


    // UserColRef.doc(user.uid).get().then(doc => {
    //   const name = doc.data().name
    //   console.log(name);
    // })
    // const q = query(UserColRef)

    // onSnapshot(q, ((snapshot) => {
    //     let books = []
    //     snapshot.docs.forEach((doc) => {
    //   books.push({ ...doc.data(), id: doc.id })
    //     })
    //     console.log(books[1]);
    //   }))
    
    return (
<Wrapper className='section section-center'>
        <div className="content-wrapper">
       <div className="user">
       <h3> Welcome!!! </h3> 
       <h3>{Name}</h3>
       </div>

       <div className="deposit">
<h5>Total Deposit</h5>
<p>$ {Deposit}</p>
       </div>

       <div className="total">
<h5>Total Payouts</h5>
    <p>$ {Payout}</p>
       </div>

        </div>
 
<Plans />

<h3>Deposit Form</h3>
<Form>
  <fieldset>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput">Amount($)</Form.Label>
      <Form.Control type='number' placeholder="200" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput">Account Balance</Form.Label>
      <Form.Control disabled type='number' placeholder={Deposit} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledSelect">Plan</Form.Label>
      <Form.Select>
      {t('Pricing', {returnObjects: true}).map((pricing) => {
        const {Plan} = pricing;
         return ( 
          <option>{Plan}</option>
         )
})}
      </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledSelect">Service</Form.Label>
      <Form.Select id="disabledSelect">
        <option>Forex</option>
        <option>CBD</option>
        <option>Real Estate</option>
      </Form.Select>
    </Form.Group>

    
    <Button className='btn3' type="submit">Deposit</Button>
  </fieldset>
</Form>



      </Wrapper>
    )
}

const Wrapper = styled.section`
.content-wrapper{
  margin-bottom: 2rem;
}
.deposit{
    /* background: var(--clr-primary-7) !important; */
    background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(81,106,166,1) 81%, rgba(54,142,196,1) 91%, rgba(72,118,176,1) 95%, rgba(0,212,255,1) 100%);
    padding: 0.5rem 0.5rem 0.001rem 1.4rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.total{
    /* background-color: var(--clr-red-light);
     */
     background: #44A7C4;
    padding: 0.5rem 0.5rem 0.001rem 1.4rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
}

.btn3{
  display: block;
  background-color: #696fdd;
  padding: 10px;
  margin-top: 20px;
  color: #f6f6fe;
  border-radius: 5px;
}
.plans{
  text-align: center;
  margin-top: 3rem;
}

h5, p{
    color: #fff;
    font-size:1.5rem;
}

.title{
    h3{
        margin-top: 4rem;
    }
}


.content-wrapper{
    display: grid;
    row-gap: 1rem;


    @media (min-width: 600px) {
    grid-template-columns: repeat(3,1fr);
    column-gap: 5rem;
  }
}
 

`

export default UserDashboard
