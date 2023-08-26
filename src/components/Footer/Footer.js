import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="social-icons">
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <p>&copy; 2023 Entre4Growth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
