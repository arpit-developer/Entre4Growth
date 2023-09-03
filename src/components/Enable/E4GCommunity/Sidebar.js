import React from "react";
import { Card, ListGroup } from "react-bootstrap";
const pointerStyle = {
  cursor: "pointer",
};
export const Sidebar = ({ onSelectTag }) => {
  const tags = [
    "React",
    "Node.js",
    "Entrepreneurship",
    "E-commerce",
    "Business",
    "Networking",
    "Startups",
    "Funding",
    "Branding",
    "Challenges",
  ];
  return (
    <div>
      <Card>
        <Card.Header>Tags</Card.Header>
        <ListGroup variant="flush">
          {tags.map((tag, index) => (
            <ListGroup.Item
              style={pointerStyle}
              key={index}
              onClick={() => onSelectTag(tag)}
            >
              {tag}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};
export default Sidebar;
