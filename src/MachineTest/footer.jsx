
import React from "react";
import "./Footer.css";
import one from "./one.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={one} alt="Learn and Achieve" />{" "}
          </div>
          <p>
            Learn and Achieve is dedicated to enhancing the educational
            experience of students across India.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTimes />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#bharat-sat">Bharat SAT</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#rewards">Rewards</a>
            </li>
            <li>
              <a href="#join-as-coordinator">Join As A Coordinator</a>
            </li>
            <li>
              <a href="#faqs">FAQ's</a>
            </li>
            <li>
              <a href="#terms-conditions">Terms & Conditions</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Get In Touch</h4>
          <p>
            <FaEnvelope className="footer-icon" />
            <a href="mailto:support@learnandachieve.in">
              support@learnandachieve.in
            </a>
          </p>
          <p>
            <FaPhone className="footer-icon" /> +91 9136955362
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          COPYRIGHT © 2024 LEARN AND ACHIEVE. ALL RIGHTS RESERVED. | POWERED BY:
          DIGIHOST
        </p>
      </div>
    </footer>
  );
};

export default Footer;
