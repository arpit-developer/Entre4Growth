import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Mentors from './Mentors';
import './Mentorships.css';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Co-founder & CEO',
    description:
      'Passionate about entrepreneurship and technology.',
    image: './.jpg', 
  },
  {
    name: 'Jane Smith',
    role: 'Co-founder & COO',
    description:
      'With a background in business operations',
    image: './.jpeg', 
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Developer',
    description:
      'Michael is the tech guru behind our platform. ',
    image: '.jpeg', 
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    description:
      'Emily is responsible for spreading the word about our platform.',
    image: '.jpeg', 
  },
  {
    name: 'John Doe',
    role: 'Co-founder & CEO',
    description:
      'Passionate about entrepreneurship and technology.',
    image: './.jpg', 
  },
  {
    name: 'Jane Smith',
    role: 'Co-founder & COO',
    description:
      'With a background in business operations',
    image: './.jpeg', 
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Developer',
    description:
      'Michael is the tech guru behind our platform. ',
    image: '.jpeg', 
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    description:
      'Emily is responsible for spreading the word about our platform.',
    image: '.jpeg', 
  },
  {
    name: 'John Doe',
    role: 'Co-founder & CEO',
    description:
      'Passionate about entrepreneurship and technology.',
    image: './.jpg', 
  },
  {
    name: 'Jane Smith',
    role: 'Co-founder & COO',
    description:
      'With a background in business operations',
    image: './.jpeg', 
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Developer',
    description:
      'Michael is the tech guru behind our platform. ',
    image: '.jpeg', 
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    description:
      'Emily is responsible for spreading the word about our platform.',
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
