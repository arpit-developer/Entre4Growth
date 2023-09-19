import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./book.css";

export const Book = () => {
  const handleClick = () => {
    // Handle the click event here
    console.log("Image clicked");
  };

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
        <h3>Books</h3>
      </div>
      {/* Books Available Online Section */}
      <h2>Books Available Online</h2>
      <div className="col-md-12">
      <div className="art1">
        <a
          href="https://www.amazon.in/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          {/*1*/}
          <img className="book-img" src="/book/TheLeanStartup.png" alt="Book" />
        </a>

        <a
          href="https://www.amazon.in/Hard-Thing-about-Building-Business/dp/0062273205/ref=pd_bxgy_img_sccl_2/262-9699536-9199864?pd_rd_w=4LwuA&content-id=amzn1.sym.2f895d58-7662-42b2-9a98-3a18d26bef33&pf_rd_p=2f895d58-7662-42b2-9a98-3a18d26bef33&pf_rd_r=ZKKDBHJJ1937YDGD6J5W&pd_rd_wg=KIn3e&pd_rd_r=bcc4885f-b811-4794-ac25-60e245a89814&pd_rd_i=0062273205&psc=1"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          <img
            className="book-img"
            src="/book/51NCFyHpkxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            alt="Book"
          />
        </a>
        {/*2*/}
        <a
          href="https://www.amazon.in/Zero-One-Start-Build-Future/dp/0753555190/ref=pd_bxgy_img_sccl_1/262-9699536-9199864"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          <img
            className="book-img"
            src="/book/51F3R8cI3zL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            alt="Book"
          />
        </a>

        <a
          href=" https://www.amazon.in/Buy-Then-Build-Acquisition-Entrepreneurs/dp/154453566X/ref=sr_1_1_sspa?crid=17BSTVDILRKA1&keywords=buy+by+build&qid=1693749564&sprefix=buy+by+build%2Caps%2C306&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1
       "
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          <img
            className="book-img"
            src="/book/https___m.media-amazon.com_images_I_41PI5bCqPxL._SL500_.jpg"
            alt="Book"
          />
        </a>

        {/*4*/}
        <a
          href="https://www.amazon.in/Thinking-Fast-Penguin-Press-Non-Fiction/dp/0141033576/ref=sr_1_2?crid=NPBIEJ66F57R&keywords=thinking+fast+and+slow&qid=1693749727&sprefix=thinking+%2Caps%2C277&sr=8-2https"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          <img className="book-img" src="/book/download2.jpg" alt="Book" />
        </a>
        {/*5*/}
        <a
          href="https://www.amazon.in/Good-Great-Some-Companies-Others/dp/0712676090"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          <img className="book-img" src="/book/download.jpg" alt="Book" />
        </a>
        {/*6*/}
        <a
          href="https://www.amazon.in/Disrupted-My-Misadventure-Start-Up-Bubble/dp/0316306096/ref=sr_1_1?crid=E5UJ33NBOQY8&keywords=disrupted&qid=1693749972&sprefix=disrupted%2Caps%2C247&sr=8-1"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          <img
            className="book-img"
            src="/book/51EWU1nX2bL-200x300.jpg"
            alt="Book"
          />
        </a>
      </div>
</div>
      {/* Offline Books Section */}
      <h2>Offline Books</h2>
      <div className="art1">
        <a
          href="https://www.blinkist.com/en/books/the-art-of-possibility-en"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          {/*1*/}
          <img className="book-img" src="/book/download (1).png" alt="Book" />
        </a>
        <a
          href="https://www.amazon.in/Blue-Ocean-Strategy-Uncontested-Competition/dp/1625274491/"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          <img className="book-img" src="/book/download3.jpg" alt="Book" />
        </a>
        {/*2*/}
        <a
          href="https://www.amazon.in/ReWork-Change-Way-Work-Forever/dp/0091929784"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          <img className="book-img" src="/book/download5.jpg" alt="Book" />
        </a>
        {/*3*/}
        <a
          href="https://www.amazon.in/Start-Why-Leaders-Inspire-Everyone/dp/0241958229"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          <img className="book-img" src="/book/download.png" alt="Book" />
        </a>

        {/*5*/}
        <a
          href="https://www.amazon.in/Founders-Work-Stories-Startups-Early/dp/1590597141"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          <img className="book-img" src="/book/download4.jpg" alt="Book" />
        </a>

        <a
          href="https://www.amazon.in/Zero-One-Start-Build-Future/dp/0753555190/ref=pd_bxgy_img_sccl_1/262-9699536-9199864"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          <img
            className="book-img"
            src="/book/61CSzmk-twL._AC_UL600_SR600,600_.jpg"
            alt="Book"
          />
        </a>

        <a
          href="https://www.amazon.in/Psychology-Selling-Increase-Thought-Possible/dp/1404108734/ref=sr_1_2?crid=3VMUEEJFYDPRD&keywords=the+psychology+of+selling&qid=1693750088&sprefix=the+psychology+of+selling%2Caps%2C283&sr=8-2"
          target="_blank"
          onClick={handleClick}
          rel="noreferrer"
        >
          <img className="book-img" src="/book/7-197x300.jpg" alt="Book" />
        </a>
      </div>
    </div>
  );
};

export default Book;
