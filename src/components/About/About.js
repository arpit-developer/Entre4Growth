import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import TeamMember from './TeamMember';
import './About.css';

const teamMembers = [
  {
    name: 'Arpit Bhatnagar',
    role: 'Co-founder & CEO',
    description:
      'Passionate about entrepreneurship and technology, Arpit is dedicated to helping young entrepreneurs turn their ideas into successful businesses.',
    image: './Arpit_bhatnagar.jpg', 
  },
  {
    name: 'Deepak Srivastava',
    role: 'Co-founder & COO',
    description:
      'With a background in business operations, Jane ensures that our platform runs smoothly and efficiently. Her focus is on providing entrepreneurs with the best resources to foster growth.',
    image: './Deepak_Srivastava.jpeg', 
  },
  {
    name: 'Ashutosh Verma',
    role: 'Lead Developer',
    description:
      'Michael is the tech guru behind our platform. His expertise in web development ensures that our users have a seamless experience while using our tools and resources.',
    image: 'Ashutosh_Verma.jpeg', 
  },
  {
    name: 'Dipika Borse',
    role: 'Marketing Specialist',
    description:
      'Emily is responsible for spreading the word about our platform. Her creative marketing strategies help us reach budding entrepreneurs who can benefit from our services.',
    image: 'Dipika_Borse.jpeg', 
  },
];
export const About = () => {
  return (
    <div className="container">
      <Container>
      <div className="intro">
          <h1 className='meet'>Welcome to Entre4Growth</h1>
          <p>
            At Entre4Growth, we are committed to empowering the next generation of entrepreneurs. Our platform provides a comprehensive set of tools, resources, and guidance to help aspiring business owners turn their ideas into successful ventures.
          </p>
          <p>
            Whether you're just starting out or looking to take your startup to the next level, we have the expertise and resources to support your journey. From business planning and funding strategies to marketing and growth hacking, we've got you covered.
          </p>
          <p>
            Join our thriving community of like-minded individuals who share your passion for innovation and business success. Explore our platform, connect with mentors, and access a wealth of resources that will pave the way for your entrepreneurial success.
          </p>
        </div>
        <h2 className='meet'>Meet Our Team</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={3} sm={6}>
              <TeamMember member={member} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default About;
