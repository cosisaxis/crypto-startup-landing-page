import React from "react";
import './HeroSection.css'
import eth from '../assets/eth.gif'

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
      {/* hero section left sided */}
      <div className="first-half">
        <p>Buy and sell NFTs</p>
        <h1>Purchase the most in demand NFT's</h1>
        <p>Buy and sell</p>
        <div className="input-container">
          <input type="email" placeholder="Email" />
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* hero section second half */}
      <div className="second-half">
          <div className="image">
          <img src={eth} alt=''/>
          </div>
          

      </div>
      </div>
    </div>
  );
};

export default HeroSection;
