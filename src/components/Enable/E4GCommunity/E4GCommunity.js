import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QuestionList from './QuestionList';
import Sidebar from './Sidebar';
import './E4GCommunity.css';

export const E4GCommunity = () => {
  
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagSelection = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className="viewport">
      <div className='row'>
        <h1>E4G Community</h1>
      </div>
      <Container fluid>
        <Row>
          <Col md={3}>
            
            <Sidebar onSelectTag={handleTagSelection} />
          </Col>
          <Col md={9}>
            
            <QuestionList selectedTag={selectedTag} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default E4GCommunity;