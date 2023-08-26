import React from 'react'
import "./Investors.css";
import Cards from "./Cards-Investors";

export const Investors = () => {
  return (
    <div className='container'>
      <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h1>Join us to Elevate your Investment Journey</h1>
            </div>
          </div>
        </div>
      <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="feature-step-item">
              <div className="mid-item">
                <h1>Find Startups to invest in and nurture their potential</h1>
              </div>
              <div className="feature-step-info">
                <h6 className="feature-step-title">
                Scouting for startups with investment potential to support innovation.
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
            <div className="feature-step-item">
              <div className="mid-item">
                <h1>From Vision To Success!</h1>
              </div>
              <div className="feature-step-info">
                <h6 className="feature-step-title">
                Vision-driven marketing propels team growth and fuels success.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="feature-step-item">
              <div className="mid-item">
                <h1>Find Startups to invest in and nurture their potential</h1>
              </div>
              <div className="feature-step-info">
                <h6 className="feature-step-title">
                Scouting for startups with investment potential to support innovation.
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
            <div className="feature-step-item">
              <div className="mid-item">
                <h1>From Vision To Success!</h1>
              </div>
              <div className="feature-step-info">
                <h6 className="feature-step-title">
                Vision-driven marketing propels team growth and fuels success.
                </h6>
              </div>
            </div>
          </div>
        </div>
        
        
        
        <div className='row'>
        <h1>Explore Solutions</h1>
          <Cards/>
        </div>
          
      
    </div>
  )
}
