import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <hr />
        <div className="footer-icons">
          <a className="footer-icon" href="">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a className="footer-icon" href="">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a className="footer-icon" href="">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <p>Made by Andrew Huang &copy; 2021</p>
      </div>
    </div>
  );
}

export default Footer;
