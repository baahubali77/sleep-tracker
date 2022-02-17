import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="main">
        <div className="header-logo">
          <h2>SLEEP-TRACKER</h2>
        </div>
        <div className="page-icon">
          <ul className="page-icon-list">
            <li id="Home-icon">
              <a href="/Home" id="Home-link">
                Home
              </a>
            </li>
            <li id="Sleepy-icon">
              <a href="/Sleepy" id="Sleepy-link">
                Sleepy
              </a>
            </li>
            <li id="About-icon">
              <a href="/About" id="About-link">
                About
              </a>
            </li>
            <li id="About-icon">
              <a href="/profile" id="About-link">
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="social-media-icon">
          <ul className="social-media-icon-list">
            <li className="icon">
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
            </li>
            <li className="icon">
              <a href="https://www.facebook.com">
                <FaInstagram />
              </a>
            </li>
            <li className="icon">
              <a href="https://www.facebook.com">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
