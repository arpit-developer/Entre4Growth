import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './Contact.css';


export const Contact = () => {
  const mapCenter = [28.613939, 77.209023];
  return (
    <div className="contact-us">
    <Container>
      <h1>Contact Us</h1>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message here" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
        <div className="map-responsive">
              <MapContainer center={mapCenter} zoom={13}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={mapCenter} />
              </MapContainer>
            </div>
          </Col>
          
      </Row>
    </Container>
  </div>
  )
}
