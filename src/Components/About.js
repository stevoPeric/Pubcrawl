import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-about-subheading">About</p>
        <h1 className="primary-about-heading">
        Explore Sarajevo's Nightlife with Our Legendary Pub Crawl!
        </h1>
        <p className="primary-text">
        Join the Ultimate Adventure through Sarajevo's Hidden Gems
        </p>
        <p className="primary-text">
        Immerse Yourself in Local Culture, Music, and Cheers at Every Turn! Whether You're a Traveler Exploring the City or a Local Looking for a Night to Remember, Everyone's Invited to Experience the Best Pub Crawl in Town!
        </p>
        
      </div>
    </div>
  );
};

export default About;