import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Resources.css";

export const Resources = () => {
  return (
    <div className="viewport">
      <div className="resources">
        <Navbar expand="lg" className="header">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-links">
              <Nav.Link href="/resources">Articles</Nav.Link>
              <Nav.Link href="/visteblogs">Blogs</Nav.Link>
              <Nav.Link href="/vistpod">Podcasts </Nav.Link>
              <Nav.Link href="/book">Books</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="row">
        <h2>Articles</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div
            className="multi-carousel-item p-2"
            style={{ width: "87%", marginLeft: 10 }}
          >
            <a href="First">
            <div className="card">
              <div
                className="img_card"
                style={{
                  height: 175,
                  borderRadius: 8,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                <img
                  src="/articles/2_1.png"
                  className="card_img"
                  style={{
                    height: 175,
                    borderRadius: 8,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  alt="Mentorship Hub"
                />
                <div className="card-img-overlay text-white pt-1">
                 
                </div>
              </div>
              <div className="card-body" style={{ width: "330px" }}>
                
                  <p className=" sp-break line-3 text-sm">
                    How to Identify Your Ideal Customers
                  </p>
              </div>
            </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="multi-carousel-item p-2"
            style={{ width: "87%", marginLeft: 0 }}
          >
             <a href="Second">
            <div className="card">
              <div
                className="img_card"
                style={{
                  height: 175,
                  borderRadius: 8,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                <img
                  src="/articles/second.jpg"
                  className="card_img"
                  style={{
                    height: 175,
                    borderRadius: 8,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  alt="Mentorship Hub"
                />
                <div className="card-img-overlay text-white pt-1">
                  
                </div>
              </div>
              <div className="card-body" style={{ width: "330px" }}>
                <p
                  className=" sp-break line-3 text-sm"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    lineHeight: "1.43",
                    height: "auto",
                  }}
                >
                    7 Ways to Protect Your Small Business from Risk{" "}
                </p>
              </div>
            </div>
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="multi-carousel-item p-2"
            style={{ width: "86%", marginLeft: 0 }}
          >
              <a href="Fourth">
            <div className="card">
              <div
                className="img_card"
                style={{
                  height: 175,
                  borderRadius: 8,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                <img
                  src="/articles/factors-that-cause-business-failures.jpg"
                  className="card_img"
                  style={{
                    height: 175,
                    borderRadius: 8,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  alt="Mentorship Hub"
                />
                <div className="card-img-overlay text-white pt-1">
                 
                </div>
              </div>
              <div className="card-body" style={{ width: "330px" }}>
                <p
                  className=" sp-break line-3 text-sm"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    lineHeight: "1.43",
                    height: "auto",
                  }}
                >
                Top Five Reasons why Entrepreneurs Fail
                </p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resources;
