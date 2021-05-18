import React from "react";
import "./ScrollIndication.css";

function ScrollIndication() {
  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  window.onscroll = function () {
    myFunction();
  };
  return (
    <div className="progress-container">
      <div className="progress-bar" id="myBar" />
    </div>
  );
}

export default ScrollIndication;
