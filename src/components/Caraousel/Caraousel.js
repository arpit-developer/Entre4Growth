import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Caraousel.css"; 

export const Caraousel = () => {
  return (
    <div className="slideshow">
      
        <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={3000}>
        <div>
          <img src="/pictures/image-1000x400.jpg"  alt="Slide 1" />
        </div>
        <div>
          <img src="/pictures/image-1000x400 (1).jpg"  alt="Slide 2" />
        </div>
        <div>
          <img src="/pictures/image-1000x400 (2).jpg"  alt="Slide 3" />
        </div>
        <div>
          <img src="/pictures/image-1000x400 (3).jpg"  alt="Slide 4" />
        </div>
        <div>
          <img src="/pictures/image-1000x400 (4).jpg"  alt="Slide 5" />
        </div>
        <div>
          <img src="/pictures/image-1000x400 (6).jpg"  alt="Slide 6" />
        </div>
        
      </Carousel>  
      
    </div>
  );
};
