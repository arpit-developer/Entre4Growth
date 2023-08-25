import React from "react";
import { Card } from "react-bootstrap";
import "./BusinessTools.css";
export const BusinessTools = () => {
  return (
    <div className="tools">
      <Card border="primary" style={{ width: '25rem' }}>
        <Card.Header>Tool 1</Card.Header>
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Text>
            Lorem ipsum
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="secondary" style={{ width: '25rem' }}>
        <Card.Header>Tool 2</Card.Header>
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Text>
          Lorem ipsum
          Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="danger" style={{ width: '25rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
