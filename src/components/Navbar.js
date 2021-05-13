import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <LinkS
            activeClass="active"
            to="hero-container"
            spy={true}
            smooth={true}
            offset={-100}
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <img src="/favicon.png" />
          </LinkS>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <LinkS
                to="hero-container"
                spy={true}
                smooth={true}
                offset={-100}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                className="nav-links"
                to="cards"
                spy={true}
                smooth={true}
                offset={-50}
                onClick={closeMobileMenu}
              >
                Design Projects
              </LinkS>
            </li>
            <li className="nav-item">
              <Link
                to="/developer-work"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Developer Projects
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Resume</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
