import React from "react";
import Cards from "./Cards";
import Button from "react-bootstrap/Button";
import { BsArrowRightSquare, BsPower } from "react-icons/bs";
import "./Startups.css";

export const Startups = () => {
  return (
    <div className="start-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title text-center">
              <h1>Why should you join us?</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="feature-step-item">
              <div className="feature-step-icon">
                <i>
                  <img className="img-fluid" src="/images/(1).png" alt="" />
                </i>
              </div>
              <div className="feature-step-info">
                <h6 className="feature-step-title">Corporate Credit</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="feature-step-item">
              <div className="feature-step-icon">
                <i>
                  <img className="img-fluid" src="/images/(2).png" alt="" />
                </i>
              </div>
              <div className="feature-step-info">
                <h6 className="feature-step-title">Curated Investors</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="feature-step-item">
              <div className="feature-step-icon">
                <i>
                  <img className="img-fluid" src="/images/(3).png" alt="" />
                </i>
              </div>
              <div className="feature-step-info">
                <h6 className="feature-step-title">0% Success Fee</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="feature-step-item">
              <div className="feature-step-icon">
                <i>
                  <img className="img-fluid" src="/images/4.png" alt="" />
                </i>
              </div>
              <div className="feature-step-info">
                <h6 className="feature-step-title">E4G Community</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h2>Take the leap and join us</h2>
          {/* <p>Get started and pave your path to success</p> */}
          <a href="/signup">
            <Button variant="primary" size="lg">
              <BsArrowRightSquare />
              Get onboard
            </Button>
          </a>{" "}
          {/* <p>Log in and open doors to growth</p> */}
          <a href="/login">
            <Button variant="primary" size="lg">
              <BsPower size={25} />
              Login
            </Button>
          </a>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="mid-item">
              <div className="feature-step-item">
                <h1>Find Investors &amp; Get Funding</h1>
                <h6 className="feature-step-title">
                  Discover the right investors for your startup.
                </h6>
              </div>
            </div>
          </div>
          {/* <div className="feature-step-item">
              <div className="mid-item">
                <h1>Find Investors &amp; Get Funding</h1>
              </div>
              <div className="feature-step-info">
                <h6 className="feature-step-title">
                  Discover the right investors for your startup.
                </h6>
              </div>
            </div> */}

          <div className="col-md-6 col-sm-6">
            <div className="feature-step-item">
              <div className="feature-step-icon">
                <i>
                  <img className="img-fluid" src="./pictures/(6).jpeg" alt="" />
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
                  <img className="img-fluid" src="./pictures/(19).jpg" alt="" />
                </i>
              </div>
              <div className="feature-step-info"></div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="mid-item">
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
          <h1>Explore Opportunity</h1>
          <Cards />
        </div>
      </div>
    </div>
  );
};
