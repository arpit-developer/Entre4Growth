import React ,{useState} from 'react'
import { Container, Form,Card,Row,Button } from 'react-bootstrap';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import {
  BsFillEnvelopeAtFill,
  BsFillPhoneFill,
} from "react-icons/bs";
import { FcContacts } from "react-icons/fc";

export const FindStartups = ({pitchBusinessData}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const handleReset =() =>{
    setQuery("");
  }
  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/startups?query=${query}`);
      if (!response.ok) {
        console.error('Request failed with status:', response.status);
        return;
      }
      
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        setResults(data);
      } else {
        console.error('Response is not in JSON format');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
    <div className='viewport'>
      <Container>
      <h1>Search Startups</h1>
      <Form>
        <Form.Control
          type="text"
          placeholder="Search Startups Company ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className='row'>
        <div className='col-md-6 offset-md-3'><button type="button" className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>{' '}
        <button type="button" className="btn btn-info" onClick={handleReset} >Reset</button></div>
        </div>
      </Form>
      <Row xs={1} md={2} className="g-4">
        {results.map((users) => (
          <Card key={users._id} className="mb-3" style={{ width: '18rem' , margin: '10px' }}>
            <Card.Body>
              <Card.Title>{users.companyName}</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">{users}</Card.Subtitle> */}
              <Card.Text>
                 Name: {users.firstName} {users.lastName}
                <br />
                Mobile No: {users.mobileNo}
                <br />
                Email: {users.workemail}
              </Card.Text>
               {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Header as="h3">Contact</Popover.Header>
                        <Popover.Body>
                          <strong>
                            <BsFillPhoneFill /> {users.mobileNo}
                          </strong>{" "}
                          <br />
                          <strong>
                            <BsFillEnvelopeAtFill /> {users.workemail}
                          </strong>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="light">
                      <FcContacts size={30} />{" "} Contact
                    </Button>
                  </OverlayTrigger>
                ))}
            
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
    </div>
  )
}
export default FindStartups;
