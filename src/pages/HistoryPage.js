import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { db } from "../firebase"
import { useAuth } from '../context/AuthContext'
import {
	collection,
	getDoc,
	doc,
	  } from 'firebase/firestore'

const HistoryPage = () => {
  const { user } = useAuth()
	const UserColRef = doc(db, 'users', user.uid)
  const [History1, setHistory1] = useState([])
  const [History2, setHistory2] = useState({})
  const [History3, setHistory3] = useState({})
  const [History4, setHistory4] = useState({})

  
useEffect(() => {
	getDoc(UserColRef)
	.then((doc) => {
	  const history1 = doc.data().history1
	  const history2 = doc.data().history2
	  const history3 = doc.data().history3
	  const history4 = doc.data().history4
    console.log(history1);
	  setHistory1(history1)
	  setHistory2(history2)
	  setHistory3(history3)
	  setHistory4(history4)

   
	})
	
}, [])

console.log(History1);
    return (
        <div className='section section-center'>
            <h2  className="title">Transaction History</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Transaction Type</th>
      <th>Amount($)</th>
      <th>Date</th>
    </tr>
  </thead>
 {History1.id !== 1 ? "No Transaction" : 
 <tbody>
    <tr>
      <td>{History1.id}</td>
      <td>{History1.type}</td>
      <td>{History1.amount}</td>
      <td>{History1.date}</td>
    </tr>
  
     <tr>
      <td>{History2.id}</td>
      <td>{History2.type}</td>
      <td>{History2.amount}</td>
      <td>{History2.date}</td>
    </tr>

    <tr>
      <td>{History3.id}</td>
      <td>{History3.type}</td>
      <td>{History3.amount}</td>
      {/* <td>{History3.date}</td> */}
    </tr>
  
    <tr>
      <td>{History4.id}</td>
      <td>{History4.type}</td>
      <td>{History4.amount}</td>
      {/* <td>{History4.date}</td> */}
    </tr>
  
  
  </tbody>
  }
</Table>
        </div>
    )
}

export default HistoryPage
