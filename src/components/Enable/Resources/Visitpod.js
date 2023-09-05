import React from "react";

import { Navbar, Nav } from "react-bootstrap";

import "./Resources.css";

export const Visitpod = () => {
  return (
    <div>
      <div className="resources">
        <Navbar expand="lg" className="header">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-links">
              <Nav.Link href="/resources">Articles</Nav.Link>
              <Nav.Link href="/visteblogs">Blogs</Nav.Link>
              <Nav.Link href="/vistpod">Podcasts </Nav.Link>
              <Nav.Link href="/book">Books</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="row">
        <h2>Podcasts</h2>
      </div>
      <div className="row">
        <h3>Youtube Podcasts</h3>
      </div>
      <div className="yotube-box">
  <iframe
    width={560}
    height={315}
    src="https://www.youtube.com/embed/MN7yfV4UuCI?si=J9TCtgNlYnk37krz"
    title="YouTube video player1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen=""
  />
  <iframe
    width={560}
    height={315}
    src="https://www.youtube.com/embed/REFExrj1Jgg?si=x85pMULGyNBGG1Ik"
    title="YouTube video player2"
    
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen=""
  />
  <iframe
    width={560}
    height={315}
    src="https://www.youtube.com/embed/xxtmt62-Pq0?si=3xqnAPrPyzOTJwjl"
    title="YouTube video player3"
    
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen=""
  />
</div>

      <div className="yotube-box">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vb0cPkDegpw?si=MRBls1r8SfRT0Zf7"
          title="YouTube video player4"
          allow="accelerometer;
 autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen=""
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/j1p2PbfNk0c?si=jERDE9XVtG2dxHGx"
          title="YouTube video player5"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen=""
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HAnw168huqA?si=SLUF7oAtJ81Dkptx"
          title="YouTube video player6"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen=""
        ></iframe>
      </div>

      <div className="yotube-box">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Tuw8hxrFBH8?si=ecc8v8Okdzhcrg5c"
          title="YouTube video player7"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen=""
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nnEZVVC4Ap8?si=G49oIiS_WbEF6mTY"
          title="YouTube video player8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen=""
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ihs4VFZWwn4?si=afQ4pK_FJ3uyTlzK"
          title="YouTube video player9"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
  web-share"
          allowfullscreen=""
        ></iframe>
      </div>
      <div className="row">
        <h3>Audio Podcasts</h3>
      </div>
      <div>
  <iframe
    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
    height={175}
    title="YouTube video player90"
    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
    src="https://embed.podcasts.apple.com/us/podcast/spending-money-gods-way-w-michael-delon/id1525609755?i=1000566337046&theme=auto"
  />
</div>

    </div>
  );
};
export default Visitpod;
