import React,{ useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import FindStartups from './FindStartups';
import './InvestorDashboard.css';


export const InvestorDashboard = () => {
  const [investorData, setInvestorData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/investordata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        console.log(data);

        if (data.data === "token expired") {
          alert("Session Expired. Please Login Again.");
          window.localStorage.clear();
          window.location.href = "/investor-login";
        } else {
          setInvestorData(data.data);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='viewport'>
    <div className="investor-dashboard">
    <div className='row'><h1>Investor Dashboard</h1></div>
    <div className='row'>
      <div className='col-md-8 offset-md-2'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name of Startup</th>
          <th>Email</th>
          <th>Level of Funding</th>
          <th>Key Note</th>
        </tr>
      </thead>
      <tbody>
      {/* investorData={investorData} */}
      {/* {investorData.emailid}
        {investorData.map(investor => (
          <tr key={investor.id}>
            <td>{investor.id}</td>
            <td>{investor.name}</td>
            <td>{investor.emailid}</td>
          </tr>
        ))} */}
      </tbody>
    </Table>
    </div>
    </div>
  </div>
  <>
  <FindStartups investorData={investorData}/>
  </>
  </div>
  );
}
