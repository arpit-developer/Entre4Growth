import React from 'react'
import { Table } from "react-bootstrap";
export const InvestorDashboardTable = ({pitchBusinessData}) => {
  return (
    <div>
      <div className='row'>
        <h3>Pitch Request List</h3>
      </div>
         <div className="row" style={{height:500}}>
          <div className="col-md-8 offset-md-2">
            <Table striped bordered hover>
            <thead>
          <tr>
            <th>Startup Company Name</th>
            <th>Email</th>
            <th>Level of Funding</th>
            <th>Keynote</th>
          </tr>
        </thead>
        <tbody>
          {pitchBusinessData.map((business) => (
            <tr key={business._id}>
              <td>{business.workemail}</td>
              <td>{business.investorcompanyName}</td>
              <td>{business.leveloffunding}</td>
              <td>{business.keynote}</td>
            </tr>
          ))}
        </tbody>
            </Table>
          </div>
        </div>
    </div>
  )
}
export default InvestorDashboardTable