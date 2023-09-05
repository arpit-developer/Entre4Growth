import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Resources.css";

export const Vistblogs = () => {
  return (
    <div>
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
        <h3>Blogs</h3>
      </div>
      <div className="art1">
        <div
          className="multi-carousel-item p-2"
          style={{ width: "29%", marginLeft: 0 }}
        >
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
                src="/blogs/office+furniture.jpg"
                className="card_img"
                style={{
                  height: 175,
                  borderRadius: 8,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                alt="Mentorship Hub"
              />
            </div>
            <div className="card-body" style={{ width: "100%" }}>
              <p
                className=" sp-break line-3 text-sm"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  lineHeight: "1.43",
                  height: "auto",
                }}
              >
                <a href="Blogfirst">
                  Business Leadership and Change: Lessons from Your Funky Office
                  Furniture
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* <div className="multi-carousel-item p-2"
          style={{ width: "30%", marginLeft: 0 }}
        >
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
                src="/blogs/large-open-for-business-1024x680.jpg"
                className="card_img"
                style={{
                  height: 175,
                  borderRadius: 8,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                alt="Mentorship Hub"
              />
            </div>
            <div className="card-body">
              <p
                className=" sp-break line-3 text-sm"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  lineHeight: "1.43",
                  height: "auto",
                }}
              >
                <a href="Blogsecond">
                  Build entrepreneurship in your community
                </a>
              </p>
            </div>
          </div>
        </div> */}

        {/* <div
          className="multi-carousel-item p-2"
          style={{ width: "25%", marginLeft: 0 }}
        >
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
                src="/blogs/10.png"
                className="card_img"
                style={{
                  height: 175,
                  borderRadius: 8,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                alt="Mentorship Hub"
              />
            </div>
            <div className="card-body">
              <p
                className=" sp-break line-3 text-sm"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  lineHeight: "1.43",
                  height: "auto",
                }}
              >
                <a href="Blogthird">
                  Understanding the 2021 Scale-Ups Accelerator's Selection
                  Criteria
                </a>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Vistblogs;
