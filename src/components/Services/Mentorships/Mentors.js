import React from 'react';
import { Card } from 'react-bootstrap';

const Mentors = ({ member }) => {
  const cardStyle = {
    height: '80%',
  };
  return (
    <Card className="team-member" style={cardStyle}>
      <Card.Img variant="top" src={member.image} alt={member.name} />
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Text className="role">{member.role}</Card.Text>
        {/* <Card.Text className="description">{member.description}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default Mentors;