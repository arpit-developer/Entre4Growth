import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE } from "@fortawesome/free-solid-svg-icons";
import { fa4 } from "@fortawesome/free-solid-svg-icons";
import { faG } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(()=>{
    document.body.className = theme;
  },[theme]);
  return (
    <Navbar expand="lg" className="header">
      <Navbar.Brand href="/" className="logo">
        <FontAwesomeIcon
          icon={faE}
          beatFade
          size="xl"
          style={{ color: "orange" }}
        />
        <FontAwesomeIcon
          icon={fa4}
          beatFade
          size="xl"
          style={{ color: "#fff" }}
        />
        <FontAwesomeIcon
          icon={faG}
          beatFade
          size="xl"
          style={{ color: "green" }}
        />
        <p className="logoname">Entre4Growth</p>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-links">
          <Nav.Link href="/about">About Us</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown1">
            <NavDropdown.Item href="/startups">Startups</NavDropdown.Item>
            <NavDropdown.Item href="/investors">Investors</NavDropdown.Item>
            <NavDropdown.Item href="/mentorships">Mentorship</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Grow" id="basic-nav-dropdown2">
            <NavDropdown.Item href="/accounting">Accounting</NavDropdown.Item>
            <NavDropdown.Item href="/financialplanning">
              Financial Planning
            </NavDropdown.Item>
            <NavDropdown.Item href="/digitalmarketing">
              Digital Marketing
            </NavDropdown.Item>
            <NavDropdown.Item href="/smmarketing">
              Social Media Marketing
            </NavDropdown.Item>
            <NavDropdown.Item href="/seomarketing">
              SEO Marketing
            </NavDropdown.Item>
            <NavDropdown.Item href="/contentmarketing">
              Content Marketing
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Enable" id="basic-nav-dropdown3">
            {/* <NavDropdown.Item href="/courses">Courses</NavDropdown.Item> */}
            <NavDropdown.Item href="/resources">Resources</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/e4gcommunity">
              E4G Community
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/businesstools">Business Tools</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link onClick={toggleTheme}>
            <img src="/night-mode.png" alt="dark" width="22px" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
