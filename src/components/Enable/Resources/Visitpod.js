import React from 'react'
import ReactPlayer from 'react-player'
import "./Resources.css"

export const Vistpod = () => 
   {return (
      <div className='resources'>
    <nav>
        
   
        <ul className='tags'> 
         <li><a href="Resources">Articles</a></li>
         <li> <a href="Visteblogs">Blog Post</a></li>
         <li>   <a href="Vistpod">PodCast</a></li>
         <li>   <a href="Book">Book</a></li>
        
      
         
     
        </ul>   
        </nav>
        <hr></hr>
        <div className='yotube-box'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MN7yfV4UuCI?si=J9TCtgNlYnk37krz" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         
<iframe width="560" height="315" src="https://www.youtube.com/embed/REFExrj1Jgg?si=x85pMULGyNBGG1Ik" title="YouTube video player" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/xxtmt62-Pq0?si=3xqnAPrPyzOTJwjl" title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



</div>
<div className='yotube-box'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/vb0cPkDegpw?si=MRBls1r8SfRT0Zf7" title="YouTube video player" frameborder="0" allow="accelerometer;
 autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
<iframe width="560" height="315" src="https://www.youtube.com/embed/j1p2PbfNk0c?si=jERDE9XVtG2dxHGx" title="YouTube video player" frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/HAnw168huqA?si=SLUF7oAtJ81Dkptx" title="YouTube video player" frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
  
  <div className='yotube-box'>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Tuw8hxrFBH8?si=ecc8v8Okdzhcrg5c" title="YouTube video player" frameborder="0"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 <iframe width="560" height="315" src="https://www.youtube.com/embed/nnEZVVC4Ap8?si=G49oIiS_WbEF6mTY" title="YouTube video player" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 <iframe width="560" height="315" src="https://www.youtube.com/embed/Ihs4VFZWwn4?si=afQ4pK_FJ3uyTlzK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
  web-share" allowfullscreen></iframe>
 
  </div>
  <div>
  <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175"  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/us/podcast/spending-money-gods-way-w-michael-delon/id1525609755?i=1000566337046&theme=auto"></iframe>
  </div>

</div>
  );
}
export default Vistpod;