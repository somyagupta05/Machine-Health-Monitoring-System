import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import About from "./About";
import Navbar from "./Navbar";
const Footer = () => {
  return (
    <>
      <Navbar />
      <About />
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <h4>About Us</h4>
              <p>
                We specialize in predictive maintenance solutions to help
                industries reduce downtime and improve efficiency.
              </p>
            </div>

            <div className={styles.column}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Contact Us</h4>
              <p>
                123 Industrial Ave, Suite 456
                <br /> City, State, Zip
              </p>
              <p>Email: info@example.com</p>
              <p>Phone: +1 (234) 567-8900</p>
            </div>

            <div className={styles.column}>
              <h4>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
