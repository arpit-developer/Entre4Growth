import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./Accounting.css";
export const SEOMarketing = () => {
  return (
    <div className="container">
      <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title text-center">
              <h1>SEO Marketing</h1>
            </div>
          </div>
        </div>
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Introduction to SEO Marketing</Accordion.Header>
          <Accordion.Body>
            <p>
              Welcome to the world of SEO (Search Engine Optimization) marketing! 🚀✨
            </p>
            <p>
              In this section, we'll provide an overview of SEO and how it can benefit your online presence.
            </p>
            <p>
              <strong>Topics covered:</strong>
            </p>
            <ul className="stylingul">
              <li>Understanding the importance of SEO</li>
              <li>Basic SEO terminology and concepts</li>
              <li>Key SEO principles</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>On-Page SEO Techniques</Accordion.Header>
          <Accordion.Body>
            <p>
              On-page SEO focuses on optimizing individual web pages for search engines.
            </p>
            <p>
              Learn how to:
            </p>
            <ul className="stylingul">
              <li>Optimize meta titles and descriptions</li>
              <li>Improve content quality and structure</li>
              <li>Use header tags and keyword placement</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="2">
          <Accordion.Header>Off-Page SEO and Link Building</Accordion.Header>
          <Accordion.Body>
            <p>
              Off-page SEO involves strategies to improve your website's authority and reputation.
            </p>
            <p>
              Explore techniques for:
            </p>
            <ul className="stylingul">
              <li>Building high-quality backlinks</li>
              <li>Social media signals and online mentions</li>
              <li>Guest posting and outreach</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="3">
          <Accordion.Header>Keyword Research and Analysis</Accordion.Header>
          <Accordion.Body>
            <p>
              Keywords are the foundation of SEO marketing.
            </p>
            <p>
              Discover how to:
            </p>
            <ul className="stylingul">
              <li>Conduct effective keyword research</li>
              <li>Identify high-potential keywords for your niche</li>
              <li>Use keyword analysis tools</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="4">
          <Accordion.Header>Technical SEO and Site Optimization</Accordion.Header>
          <Accordion.Body>
            <p>
              Technical SEO ensures that search engines can crawl and index your website efficiently.
            </p>
            <p>
              Learn about:
            </p>
            <ul className="stylingul">
              <li>Website speed and performance optimization</li>
              <li>XML sitemaps and robots.txt files</li>
              <li>Mobile-friendliness and structured data</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="5">
          <Accordion.Header>Local SEO Strategies</Accordion.Header>
          <Accordion.Body>
            <p>
              Local SEO is essential for businesses targeting local customers.
            </p>
            <p>
              Explore techniques for:
            </p>
            <ul className="stylingul">
              <li>Optimizing Google My Business listings</li>
              <li>Local keyword targeting</li>
              <li>Online reviews and local citations</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>SEO Tools and Analytics</Accordion.Header>
          <Accordion.Body>
            <p>
              Effective SEO relies on data and analysis.
            </p>
            <p>
              Discover essential SEO tools and analytics platforms, such as Google Analytics and Search Console.
            </p>
            <p>
              Learn how to track and measure SEO performance to make informed decisions.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
