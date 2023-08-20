import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Mentors from './Mentors';
import './Mentorships.css';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Co-founder & CEO',
    description:
      'Passionate about entrepreneurship and technology, John is dedicated to helping young entrepreneurs turn their ideas into successful businesses. He brings a wealth of experience from his previous startup ventures.',
    image: './.jpg', 
  },
  {
    name: 'Jane Smith',
    role: 'Co-founder & COO',
    description:
      'With a background in business operations, Jane ensures that our platform runs smoothly and efficiently. Her focus is on providing entrepreneurs with the best resources to foster growth.',
    image: './.jpeg', 
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Developer',
    description:
      'Michael is the tech guru behind our platform. His expertise in web development ensures that our users have a seamless experience while using our tools and resources.',
    image: '.jpeg', 
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    description:
      'Emily is responsible for spreading the word about our platform. Her creative marketing strategies help us reach budding entrepreneurs who can benefit from our services.',
    image: '.jpeg', 
  },
];
export const Mentorships = () => {
  return (
    <div className="about-us">
      <Container>
      <div className="intro">
          <h1 className='meet'>Mentors Network Pillar</h1>
          <p>Entrepreneurship mentoring is a relationship in which an experienced and established entrepreneur supports,</p><p> teaches, and prepares novice entrepreneurs for potential business challenges.</p>
        </div>
        <h2 className='meet'>Meet Our Mentors</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={3} sm={6}>
              <Mentors member={member} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Mentorships;
