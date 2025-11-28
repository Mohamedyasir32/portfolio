import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand / Logo */}
        <h2 className="footer-logo">Mohamed <span>Yasir</span></h2>
        <p className="footer-tagline">
          Frontend / Full-Stack Developer • Crafting clean & modern web apps
        </p>

        {/* Social Icons */}
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:mohamedyasir123@gmail.com?subject=Project%20Inquiry&body=Hi%20Yasir,%0A%0AI%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.%0A%0ARegards,">
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Menu */}
        <ul className="footer-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Project">Projects</a></li>
          <li><a href="/Skills">Skills</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>

        {/* Copyright */}
        <p className="copyright">
          © {new Date().getFullYear()} Mohamed Yasir — All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
