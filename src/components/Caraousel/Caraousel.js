import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Caraousel.css"; 

export const Caraousel = () => {
  return (
    <div className="slideshow">
      
        <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={3000}>
        <div>
          <img src="/pictures/(1).jpeg"  alt="Slide 1" width="400px" />
        </div>
        <div>
          <img src="/pictures/(10).jpeg"  alt="Slide 2" />
        </div>
        <div>
          <img src="/pictures/(14).jpeg"  alt="Slide 3" />
        </div>
        <div>
          <img src="/pictures/(12).jpeg"  alt="Slide 4" />
        </div>
        <div>
          <img src="/pictures/(4).jpeg"  alt="Slide 5" />
        </div>
      </Carousel>  
      
    </div>
  );
};
