import React from 'react'

import "./Resources.css"
import { Container } from 'react-bootstrap';


export const Book = () => {
  return (
    <div className='resources'>
   
      <nav>
        
   
        <ul className='tags'> 
         <li><a href="Resources">Articles</a></li>
         <li> <a href="Visteblogs">Blog Post</a></li>
         <li>   <a href="Vistpod">PodCast</a></li>
         <li>   <a href="Book">Book</a></li>
        <Container>
        <img className='book-img' src="/book/TheLeanStartup.png" alt="" />
        </Container>
      
         
     
        </ul>   
        </nav>
        <hr></hr>
        


        </div>
  
  );
};
export default Book;