import React from "react";
import { Carousel } from 'react-bootstrap';
import "./Caraousel.css"; 

export const Caraousel = () => {
  return (
    <div className="slideshow">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/400x200?text=First+Slide" // Adjust the width and height here
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/400x200?text=Second+Slide" // Adjust the width and height here
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/400x200?text=Third+Slide" // Adjust the width and height here
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
