import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Header.css";

export const Header = () => {
  return (
    <Navbar expand="lg" className="header">
    <Navbar.Brand href="/" className="logo">
    <img src="/e-solid.svg"  // Replace with the correct path to your logo image
          alt="Logo"
          className="logo-image"/>
          {/*<FontAwesomeIcon icon={solid("e")} beatFade size="xs" style={{color: "#ffffff",}} />
          */}
      Entre4Growth</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto nav-links">
        <Nav.Link href="/about">About Us</Nav.Link>
        <NavDropdown title="Services" id="basic-nav-dropdown1">
        <NavDropdown.Item href="/startups">Startups</NavDropdown.Item>
        <NavDropdown.Item href="/investors">Investors</NavDropdown.Item>
        <NavDropdown.Item href="/mentorship">Mentorship</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Grow" id="basic-nav-dropdown2">
        <NavDropdown.Item href="/accounting">Accounting</NavDropdown.Item>
        <NavDropdown.Item href="/financialplanning">Financial Planning</NavDropdown.Item>
        <NavDropdown.Item href="/digitalmarketing">Digital Marketing</NavDropdown.Item>
        <NavDropdown.Item href="/smmarketing">Social Media Marketing</NavDropdown.Item>
        <NavDropdown.Item href="/seomarketing">SEO Marketing</NavDropdown.Item>
        <NavDropdown.Item href="/contentmarketing">Content Marketing</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Enable" id="basic-nav-dropdown3">
        <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>
        <NavDropdown.Item href="/resources">Resources</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/community">E4G Community</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/businesstools">Business Tools</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};
export default Header;
