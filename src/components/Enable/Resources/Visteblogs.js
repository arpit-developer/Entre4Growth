import React from 'react'
import { Card } from "react-bootstrap";
import "./Resources.css"


export const Vistblogs = () => {
  return (
    <div>
    < div className='resources'>
      <nav>
        
   
        <ul className='tags'> 
         <li><a href="Resources">Articles</a></li>
         <li> <a href="Visteblogs">Blog Post</a></li>
         <li>   <a href="Vistpod">PodCast</a></li>
         <li>   <a href="Book">Book</a></li>
        
      
         
     
        </ul>   
        </nav>
        <hr></hr>
        <div className='art1'>
        <Card >
     <Card.Body  style={{ width: '25rem' }}>
          <Card.Title> <a href="Blogfirst">Business Leadership and Change: Lessons from Your Funky Office Furniture</a></Card.Title>
          <Card.Text>
          <img className='first-img' src="/blogs/office+furniture.jpg" alt="" /> 
          <hr></hr>
         </Card.Text>
          </Card.Body>
         </Card>

         
      

         <Card >
     <Card.Body  style={{ width: '25rem' }}>
          <Card.Title> <a href="Blogsecond">Build entrepreneurship in your community</a></Card.Title>
          <Card.Text>
          <img   src="/blogs/large-open-for-business-1024x680.jpg" alt="" />
          <hr></hr>
         </Card.Text>
          </Card.Body>
         </Card>

         <Card >
     <Card.Body  style={{ width: '25rem' }}>
          <Card.Title> <a href="Blogthird">Understanding the 2021 Scale-Ups Accelerator’s Selection Criteria</a></Card.Title>
          <Card.Text>
          <img className='first-img' src="/blogs/10.png" alt="" /> 
          <hr></hr>
         </Card.Text>
          </Card.Body>
         </Card>
</div>




        </div>
   </div>
  );
};
export default Vistblogs;