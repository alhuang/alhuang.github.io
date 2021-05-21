import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./TopofPageButton.css";

function TopofPageButton(props) {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <HashLink smooth className="top-page-button" to={props.path}>
          <div id="top-button">
            <FontAwesomeIcon
              icon={faChevronUp}
              size="2x"
              className="top-button-icon"
            />
          </div>
        </HashLink>
      )}
    </>
  );
}

export default TopofPageButton;
