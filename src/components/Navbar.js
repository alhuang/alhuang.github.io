import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

function Navbar(props) {
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

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <HashLink
            smooth
            to="/#top"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <motion.svg
              initial="hidden"
              animate="visible"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M27.9286 39.5L25.5579 31.2028L20.2143 12.5L12.5 39.5L48.0999 16.625C44.4487 8.02867 35.9284 2 26 2C12.7452 2 2 12.7452 2 26C2 39.2548 12.7452 50 26 50C39.2548 50 50 39.2548 50 26C50 24.7243 49.9005 23.4719 49.7087 22.25M31.7857 12.5L35.3514 24.9798L39.5 39.5"
                stroke="white"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={pathVariants}
              />
            </motion.svg>
          </HashLink>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#top"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#cards-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Design Projects
              </HashLink>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/developer-work"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Developer Projects
              </Link>
            </li> */}
          </ul>
          {button && <Button buttonStyle="btn--outline">Resume</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
