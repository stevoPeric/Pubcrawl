import React from "react";
import Logo from "../Assets/Logo.svg";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img alt="Sarajevo Sips" />
        </div>
        <div className="footer-icons">
          <TwitterIcon />
          <YouTubeIcon />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="#top-section">Back to Top</a>
          <a href="#about-section">About</a>
          <a href="#testimonial-section">Testimonials</a>
        </div>
        <div className="footer-section-columns">
          <span>Contact Us:</span>
          <br />
          <span>064/422-1599</span>
          <span>71123, East Sarajevo</span>
          <span>Bosnia and Herzegovina</span>
          <span>Stevogk@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Copyright © 2024 SarajevoPubCrawl, Inc</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;