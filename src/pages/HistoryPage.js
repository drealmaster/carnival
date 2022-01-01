import React from 'react'
import Table from 'react-bootstrap/Table'

const HistoryPage = () => {
    return (
        <div className='section section-center'>
            <h2  className="title">Transaction History</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Transaction Type</th>
      <th>Amount</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  
  </tbody>
</Table>
        </div>
    )
}

export default HistoryPage
