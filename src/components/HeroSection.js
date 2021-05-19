import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/bgvideo_1.mp4" autoPlay loop muted />
      <h1>Andrew Huang</h1>
      <p>Software Engineer and UX Designer based in Seattle</p>
      <div className="hero-btns">
        <div className="hero-icons">
          <a className="hero-icon" href="mailto:ahuang91@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="3x" className={"icon"} />
          </a>
          <a
            className="hero-icon"
            href="https://www.linkedin.com/in/ahuang91/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" className={"icon"} />
          </a>
          <a
            className="hero-icon"
            href="https://github.com/alhuang"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" className={"icon"} />
          </a>
        </div>
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Button 1
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Button 2
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
