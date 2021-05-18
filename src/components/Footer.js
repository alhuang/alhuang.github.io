import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <a className="footer-icon" href="mailto:ahuang91@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a
            className="footer-icon"
            href="https://www.linkedin.com/in/ahuang91/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            className="footer-icon"
            href="https://github.com/alhuang"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <p>Made by Andrew Huang &copy; 2021</p>
      </div>
    </div>
  );
}

export default Footer;
