import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import {
  BsFillPersonFill,
  BsFillEnvelopeAtFill,
  BsFillChatSquareTextFill,
  BsFillPhoneFill,
  BsPatchCheckFill,
} from "react-icons/bs";
import { InputGroup, FormControl } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import Alert from "react-bootstrap/Alert";
import "./Contact.css";
import "leaflet/dist/leaflet.css";

export const Contact = () => {
  const mapCenter = [28.613939, 77.209023];
  const [showLoader, setShowLoader] = useState(false);
  const [show, setShow] = useState(false);
  const [formData ,setFormData] = useState({
    fullName:"",
    email:"",
    message:"",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 2000);
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
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
        setFormData({
          fullName: '',
          email: '',
          message: ''
        });
      } else {
        console.error("Failed to send data to server");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <div className="contact-us">
      <Container>
      
        <h1>Contact Us</h1>
        {submittedData && (
        <Toast  className="d-inline-block m-1"
        bg={"success"} onClose={() => setShow(false)} show={show} delay={5000} autohide>
          <Toast.Body className={'text-white'}><BsPatchCheckFill size={30}/> Woohoo, We'll contact you soon!</Toast.Body>
        </Toast>
      )}
        <Row>
          <Col md={6}>
            <Alert variant="primary">
              <div className="row">
                <div className="col-md-2">
                  <InputGroup>
                    <BsFillEnvelopeAtFill size={50} />
                  </InputGroup>
                </div>
                <div className="col-md-8">
                  <strong>entre4growth@gmail.com</strong>
                  <br />
                  We will respond as soon as possible
                </div>
              </div>
            </Alert>
          </Col>
          <Col md={6}>
            <Alert variant="primary">
            <div className="row">
                <div className="col-md-2">
              <InputGroup>
                <BsFillPhoneFill size={50}/>
              </InputGroup>
              </div>
              <div className="col-md-8">
              <strong>+91 98765 43210</strong>
              <br />
              Helpline, Mon - Sat 10:30am - 6:30pm
              </div>
              </div>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <InputGroup.Text>
                  <BsFillPersonFill />
                </InputGroup.Text>
                <FormControl value={formData.fullName} placeholder="Full Name " type="text" name="fullName" onChange={handleChange} required />
              </InputGroup>
              <div className="row">
                <InputGroup>
                  <InputGroup.Text>
                    <BsFillEnvelopeAtFill />
                  </InputGroup.Text>
                  <FormControl value={formData.email} placeholder="Email Address " type="email" name="email" onChange={handleChange} required />
                </InputGroup>
              </div>
              <div className="row">
                <InputGroup>
                  <InputGroup.Text>
                    <BsFillChatSquareTextFill />
                  </InputGroup.Text>
                  <FormControl value={formData.message}
                    as="textarea"
                    rows={4}
                    placeholder="Your Message Here! " name ="message" onChange={handleChange} required
                  />
                </InputGroup>
              </div>
              <div className="row">
                <Button variant="primary" type="submit"  loading={showLoader}
            disabled={showLoader}>
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={6}>
            <div>
              <MapContainer center={mapCenter} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={mapCenter}></Marker>
              </MapContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
