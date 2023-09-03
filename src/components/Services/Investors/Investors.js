import React from "react";
import "./Investors.css";
import Cards from "./Cards-Investors";
import Button from "react-bootstrap/Button";
import { BsPower, BsBuildingAdd } from "react-icons/bs";

export const Investors = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h1>Join us to Elevate your Investment Journey</h1>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <h2>Want to invest ? Invest with us </h2>
        <a href="/investor-signup">
          <Button variant="primary" size="lg">
            <BsBuildingAdd size={25} />
            Get Started
          </Button>
        </a>
        {' '}
        <a href="/investor-login">
          <Button variant="primary" size="lg">
            <BsPower size={25} />
            Login
          </Button>
        </a>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div className="mid-item-investor">
            <div className="feature-step-item">
              <h1>Find Startups to invest in and nurture their potential</h1>

              <h6 className="feature-step-title">
                Scouting for startups with investment potential to support
                innovation.
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="feature-step-item">
            <div className="feature-step-icon">
              <i>
                <img className="img-fluid" src="./pictures/20_.jpeg" alt="" />
              </i>
            </div>
            <div className="feature-step-info"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div className="feature-step-item">
            <div className="feature-step-icon">
              <i>
                <img className="img-fluid" src="./pictures/(21).jpg" alt="" />
              </i>
            </div>
            <div className="feature-step-info"></div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6">
          <div className="mid-item-investor">
            <div className="feature-step-item">
              <h1>From Vision To Success!</h1>

              <h6 className="feature-step-title">
                Vision-driven marketing propels team growth and fuels success.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div className="mid-item-investor">
            <div className="feature-step-item">
              <h1>Find Startups to invest in and nurture their potential</h1>

              <h6 className="feature-step-title">
                Scouting for startups with investment potential to support
                innovation.
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="feature-step-item">
            <div className="feature-step-icon">
              <i>
                <img className="img-fluid" src="./pictures/(22).jpg" alt="" />
              </i>
            </div>
            <div className="feature-step-info"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div className="feature-step-item">
            <div className="feature-step-icon">
              <i>
                <img className="img-fluid" src="./pictures/(24).jpg" alt="" />
              </i>
            </div>
            <div className="feature-step-info"></div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6">
          <div className="mid-item-investor">
            <div className="feature-step-item">
              <h1>From Vision To Success!</h1>

              <h6 className="feature-step-title">
                Vision-driven marketing propels team growth and fuels success.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h1>Explore Solutions</h1>
        <Cards />
      </div>
    </div>
  );
};
