import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/sarajevo.jpeg";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt=""/>
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                Embark on the Ultimate Sarajevo Pub Crawl
                </h1>
                <p className='primary-text'>
                Dive into the Heart of Sarajevo's Nightlife Scene: Unleash the City's Vibrant and Unforgettable Nighttime Adventures!
                </p>
                <button className='secondary-button'>
                    Book Now <FiArrowRight/>{""}
                </button>
            </div>
            <div className='home-image-section'>
            <img src={BannerImage} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Home