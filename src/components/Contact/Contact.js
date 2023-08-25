import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import {
  BsFillPersonFill,
  BsFillEnvelopeAtFill,
  BsFillChatSquareTextFill,
  BsFillPhoneFill,
} from "react-icons/bs";
import { InputGroup, FormControl } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import "./Contact.css";
import "leaflet/dist/leaflet.css";

export const Contact = () => {
  const mapCenter = [28.613939, 77.209023];
  return (
    <div className="contact-us">
      <Container>
        <h1>Contact Us</h1>
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
            <Form>
              <InputGroup>
                <InputGroup.Text>
                  <BsFillPersonFill />
                </InputGroup.Text>
                <FormControl placeholder="Full Name " />
              </InputGroup>
              <div className="row">
                <InputGroup>
                  <InputGroup.Text>
                    <BsFillEnvelopeAtFill />
                  </InputGroup.Text>
                  <FormControl placeholder="Email Address " />
                </InputGroup>
              </div>
              <div className="row">
                <InputGroup>
                  <InputGroup.Text>
                    <BsFillChatSquareTextFill />
                  </InputGroup.Text>
                  <FormControl
                    as="textarea"
                    rows={4}
                    placeholder="Your Message Here! "
                  />
                </InputGroup>
              </div>
              <div className="row">
                <Button variant="primary" type="submit">
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
