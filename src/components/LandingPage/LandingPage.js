import React from "react";
import { Caraousel } from "../Caraousel/Caraousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LandingPage.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import Button from "react-bootstrap/Button";

export const LandingPage = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Entre4Growth</h1>
        <p>One Stop Platform for Budding Entrepreneurs</p>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-6">
          <Caraousel />
        </div>
      </div>
      <div className="row">
        <h1>Getting Started</h1>
        <div className="col-md-4 col-sm-6">
          {/* <p>We offer amazing services for entreprenuers</p> */}
          {/*  */}
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="./account.png"
                className="card-css"
              />
              <Card.Body>
                <Card.Title>Already Have an Account?</Card.Title>
                <Card.Text>
                  <div className="mb-3">
                    <a href="/login">
                      <Button variant="primary" size="lg">
                        Login
                      </Button>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div className="col-md-4 col-sm-6">
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="./entrepreneurship.png"
                className="card-css"
              />
              <Card.Body>
                <Card.Title>New User</Card.Title>
                <Card.Text>
                  <div className="mb-3">
                    <a href="/signup">
                      <Button variant="primary" size="lg">
                        Get Started
                      </Button>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div className="col-md-4 col-sm-6">
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="./investor.png"
                className="card-css"
              />
              <Card.Body>
                <Card.Title>Investor</Card.Title>
                <Card.Text>
                  <div className="mb-3">
                    <a href="/investor-signup">
                      <Button variant="primary" size="lg">
                        SignUp
                      </Button>
                    </a>
                    &nbsp;
                    <a href="/investor-login">
                      <Button variant="primary" size="lg">
                        Login
                      </Button>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};
