import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import "./Accounting.css";

export const WebDevelopment = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        <div className="section-title text-center">
          <h1>Web Development</h1>
        </div>
      </div>
    </div>
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Introduction to Website Development</Accordion.Header>
          <Accordion.Body>
            <p>
              Welcome to the world of Website Development! 🌐✨
            </p>
            <p>
              In this section, we'll provide an overview of website development and its importance in the digital age.
            </p>
            <p>
              <strong>Topics covered:</strong>
            </p>
            <ul className="stylingul">
              <li>Understanding the basics of web development</li>
              <li>The role of web development in creating online presence</li>
              <li>Benefits of a well-designed website</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>Front-End Development</Accordion.Header>
          <Accordion.Body>
            <p>
              Front-end development focuses on the user interface and user experience of a website.
            </p>
            <p>
              Learn how to:
            </p>
            <ul className="stylingul">
              <li>Create responsive and visually appealing designs</li>
              <li>Write HTML, CSS, and JavaScript for web pages</li>
              <li>Ensure cross-browser compatibility</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="2">
          <Accordion.Header>Back-End Development</Accordion.Header>
          <Accordion.Body>
            <p>
              Back-end development powers the functionality and data management of a website.
            </p>
            <p>
              Explore techniques for:
            </p>
            <ul className="stylingul">
              <li>Building server-side applications with languages like Node.js or Python</li>
              <li>Database design and management</li>
              <li>API development and integration</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="3">
          <Accordion.Header>Content Management Systems (CMS)</Accordion.Header>
          <Accordion.Body>
            <p>
              CMS platforms simplify website development and management.
            </p>
            <p>
              Learn about:
            </p>
            <ul className="stylingul">
              <li>Popular CMS options like WordPress, Drupal, and Joomla</li>
              <li>Customizing and extending CMS functionality</li>
              <li>Choosing the right CMS for your project</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="4">
          <Accordion.Header>Web Hosting and Deployment</Accordion.Header>
          <Accordion.Body>
            <p>
              Hosting and deployment are critical steps in making your website accessible on the internet.
            </p>
            <p>
              Explore topics such as:
            </p>
            <ul className="stylingul">
              <li>Choosing a web hosting provider</li>
              <li>Domain registration and DNS configuration</li>
              <li>Deploying a website to a live server</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="5">
          <Accordion.Header>Web Development Frameworks</Accordion.Header>
          <Accordion.Body>
            <p>
              Frameworks provide structure and efficiency in web development.
            </p>
            <p>
              Learn about:
            </p>
            <ul className="stylingul">
              <li>Popular front-end and back-end frameworks</li>
              <li>Using frameworks to streamline development</li>
              <li>Best practices for framework-based projects</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>Web Development Tools and Resources</Accordion.Header>
          <Accordion.Body>
            <p>
              Discover essential tools, libraries, and resources to enhance your web development skills.
            </p>
            <p>
              Learn about code editors, version control systems, and online learning platforms.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
