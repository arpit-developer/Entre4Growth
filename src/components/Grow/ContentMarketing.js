import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./Accounting.css";

export const ContentMarketing = () => {
  return (
    <div className="container">
      <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title text-center">
              <h1>Content Marketing</h1>
            </div>
          </div>
        </div>
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Introduction to Content Marketing</Accordion.Header>
          <Accordion.Body>
            <p>
              Welcome to the world of Content Marketing! 📝✨
            </p>
            <p>
              In this section, we'll provide an overview of Content Marketing and how it can help your brand succeed.
            </p>
            <p>
              <strong>Topics covered:</strong>
            </p>
            <ul className="stylingul">
              <li>Understanding the role of content in marketing</li>
              <li>Key principles of effective content marketing</li>
              <li>Benefits of content marketing for businesses</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>Creating High-Quality Content</Accordion.Header>
          <Accordion.Body>
            <p>
              High-quality content is the cornerstone of successful content marketing.
            </p>
            <p>
              Learn how to:
            </p>
            <ul className="stylingul">
              <li>Identify your target audience and their needs</li>
              <li>Develop a content strategy and editorial calendar</li>
              <li>Produce engaging and valuable content</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="2">
          <Accordion.Header>Content Distribution and Promotion</Accordion.Header>
          <Accordion.Body>
            <p>
              Creating great content is only half the battle. Effective distribution and promotion are key.
            </p>
            <p>
              Explore techniques for:
            </p>
            <ul className="stylingul">
              <li>Using social media to share your content</li>
              <li>Email marketing and newsletter strategies</li>
              <li>Guest posting and influencer collaborations</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="3">
          <Accordion.Header>SEO for Content Marketing</Accordion.Header>
          <Accordion.Body>
            <p>
              SEO (Search Engine Optimization) plays a crucial role in content marketing success.
            </p>
            <p>
              Learn about:
            </p>
            <ul className="stylingul">
              <li>Keyword research and optimization</li>
              <li>On-page SEO techniques for content</li>
              <li>Link-building strategies</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="4">
          <Accordion.Header>Measuring Content Marketing Performance</Accordion.Header>
          <Accordion.Body>
            <p>
              Effective content marketing requires continuous assessment and optimization.
            </p>
            <p>
              Discover how to:
            </p>
            <ul className="stylingul">
              <li>Identify and track key performance metrics</li>
              <li>Use analytics tools to measure ROI</li>
              <li>Optimize your content strategy based on data</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="5">
          <Accordion.Header>Content Marketing Trends</Accordion.Header>
          <Accordion.Body>
            <p>
              Stay ahead of the curve by exploring the latest trends in content marketing.
            </p>
            <p>
              Topics include:
            </p>
            <ul className="stylingul">
              <li>Video marketing and live streaming</li>
              <li>Interactive content and user-generated content</li>
              <li>Voice search and AI-driven content</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>Content Marketing Tools and Resources</Accordion.Header>
          <Accordion.Body>
            <p>
              Discover essential tools and resources to streamline your content marketing efforts.
            </p>
            <p>
              Learn about content management systems, content creation tools, and content marketing courses.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
