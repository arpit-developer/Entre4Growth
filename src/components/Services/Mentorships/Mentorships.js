import React, { useEffect, useState } from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import Mentors from './Mentors';
import './Mentorships.css';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Co-founder & CEO',
    image: './mentors/man.png', 
  },
  {
    name: 'Jane Smith',
    role: 'Co-founder & COO',
    image: './mentors/profile.png', 
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Developer',
    image: './mentors/girl.png', 
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    image: './mentors/man.png', 
  },
  {
    name: 'John Doe',
    role: 'Co-founder & CEO',
    image: './mentors/girl.png', 
  },
  {
    name: 'Jane Smith',
    role: 'Co-founder & COO',
    image: './mentors/man.png', 
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Developer',
    image: './mentors/human.png', 
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    image: './mentors/profile.png', 
  },
  
];
export const Mentorships = () => {
  const [, setMentors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/mentors')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setMentors(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        // You can set an error state here if needed
      });
  }, []);
  return (
    <div className="about-us">
      <Container>
      <div className="intro">
          <h1 className='meet'>Mentors Network Pillar</h1>
          <p>Entrepreneurship mentoring is a relationship in which an experienced and established entrepreneur supports,</p><p> teaches, and prepares novice entrepreneurs for potential business challenges.</p>
        </div>
        <div className="row">
          <h3>Are you a Mentor? Join us to enlighten young minds</h3>
          <div className='col-md-6 offset-md-3'>
        <a href='/mentorships/mentor-signup' ><Button variant="primary" size="lg" active>Join Us</Button></a></div>
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
