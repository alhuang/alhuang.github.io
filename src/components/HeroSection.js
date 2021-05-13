import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/bgvideo.mp4" autoPlay loop muted />
      <h1>Andrew Huang</h1>
      <p>Hello</p>
      <div className="hero-btns">
        <Button
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
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
