import React, { useState } from "react";
import {
  Container,
  Form,
  Card,
  Row,
  Button,
  InputGroup,
  FormControl,
  Toast,
} from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import {
  BsLinkedin,
  BsFillEnvelopeAtFill,
  BsFillPhoneFill,
  BsBuildingsFill,
  BsFileText,
  BsPatchCheckFill,
} from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FcContacts, FcGlobe } from "react-icons/fc";
import Modal from "react-bootstrap/Modal";

export const FindInvestor = ({ userData }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleReset = () => {
    setQuery("");
    setResults([]);
  };
  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/investors?query=${query}`
      );
      if (!response.ok) {
        console.error("Request failed with status:", response.status);
        return;
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setResults(data);
      } else {
        console.error("Response is not in JSON format");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Modal Submit

  const [formData, setFormData] = useState({
    workemail: "",
    investorcompanyName: "",
    leveloffunding: "",
    keynote: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 2000);
    e.preventDefault();
    
      results.map(
        (investor) =>
          (formData.investorcompanyName = investor.investorcompanyName)
      );
    
    formData.workemail = userData.workemail;
    try {
      const response = await fetch("http://localhost:5000/pitch-business", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Data sent to server:", data);
        setSubmittedData(data);
        setShow(true);
        // setResults([]);
      } else {
        console.error("Failed to send data to server");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <div className="viewport">
      <Container>
        <h1>Investor Search</h1>
        <Form>
          <Form.Control
            type="text"
            placeholder="Search Company or investors..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSearch}
                disabled={loading}
              >
                Search
              </button>{" "}
              <button
                type="button"
                className="btn btn-info"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </Form>
        {/* <ListGroup>
        {results.map((investor) => (
          <ListGroup.Item key={investor._id}>
            {investor.investorcompanyName} - {investor.firstName} -{investor.mobileNo} -{investor.website}
          </ListGroup.Item>
        ))}
      </ListGroup> */}
        <Row xs={1} md={2} className="g-4">
          {results.map((investor) => (
            <Card
              key={investor._id}
              className="mb-3"
              style={{ width: "18rem", margin: "10px" }}
            >
              <Card.Body>
                <Card.Title>{investor.investorcompanyName}</Card.Title>
                <hr />
                <Card.Subtitle className="mb-2 text-muted">
                  {investor.investmentSector}
                </Card.Subtitle>
                <Card.Text>
                  Name: {investor.firstName} {investor.lastName}
                  <br />
                  About: {investor.about} {userData.firstName}
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
                            <BsFillPhoneFill /> {investor.mobileNo}
                          </strong>{" "}
                          <br />
                          <strong>
                            <BsFillEnvelopeAtFill /> {investor.emailid}
                          </strong>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="light">
                      <FcContacts size={30} />{" "}
                    </Button>
                  </OverlayTrigger>
                ))}

                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={
                    <Popover id={`popover-website-details`}>
                      <Popover.Header as="h3">Website Details</Popover.Header>
                      <Popover.Body>
                        <strong>Website: </strong>
                        <a
                          href={investor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {investor.website}
                        </a>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="inflighto">
                    <FcGlobe size={30} />
                  </Button>
                </OverlayTrigger>

                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={
                    <Popover id={`popover-website-details`}>
                      <Popover.Header as="h3">LinkedIn</Popover.Header>
                      <Popover.Body>
                        <strong>LinkedIn: </strong>
                        <a
                          href={investor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {investor.linkedin}
                        </a>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="light">
                    <BsLinkedin size={30} />
                  </Button>
                </OverlayTrigger>
                <hr />

                <Button variant="primary" onClick={handleShow}>
                  Pitch My Business
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>"Let's Talk Business"</Modal.Title>
                  </Modal.Header>
                  <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                      <h4>Begin Your Funding Pitch</h4>

                      <div className="row">
                        <input
                          type="hidden"
                          value={userData.workemail}
                          name="workemail"
                        />
                        <InputGroup>
                          <InputGroup.Text>
                            <BsBuildingsFill />
                          </InputGroup.Text>
                          <FormControl
                            type="text"
                            name="investorcompanyName"
                            value={investor.investorcompanyName}
                            disabled
                          />
                        </InputGroup>
                      </div>
                      <div className="row">
                        <InputGroup>
                          <InputGroup.Text>
                            <AiOutlineFundProjectionScreen />
                          </InputGroup.Text>

                          <Form.Select
                            value={formData.leveloffunding}
                            name="leveloffunding"
                            autoFocus
                            onChange={handleChange}
                          >
                            <option value="">Level of Funding</option>
                            <option value="Pre-Seed Funding">
                              Pre-Seed Funding
                            </option>
                            <option value="Seed Funding">Seed Funding</option>
                            <option value="Series A Funding">
                              Series A Funding
                            </option>
                            <option value="Series B Funding">
                              Series B Funding
                            </option>
                            <option value="Series C Funding">
                              Series C Funding
                            </option>
                            <option value="Late-Stage Funding">
                              Late-Stage Funding
                            </option>
                            <option value="IPO (Initial Public Offering)">
                              IPO (Initial Public Offering)
                            </option>
                          </Form.Select>
                        </InputGroup>
                      </div>
                      <div className="row">
                        <Form.Label>Key Note to Investor(Why you?)</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <BsFileText />
                          </InputGroup.Text>
                          <FormControl
                            as="textarea"
                            rows={3}
                            name="keynote"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                          {submittedData && (
                            <Toast
                              className="d-inline-block m-2"
                              bg={"success"}
                              onClose={() => setShow(false)}
                              show={show}
                              delay={5000}
                              autohide
                            >
                              <Toast.Body className={"text-white"}>
                                <BsPatchCheckFill size={30} /> Pitch has sent to
                                Investor. See you Soon.
                              </Toast.Body>
                            </Toast>
                          )}
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        loading={showLoader}
                        disabled={showLoader}
                      >
                        Send
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default FindInvestor;
