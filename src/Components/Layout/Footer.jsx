import React, { Fragment } from 'react';
import PinnacleLogo from '../../assets/Logo'
import './footer.css'
const Footer = () => {
  return (
    <div className="footer-box">
    <div className="footer-main">
      <div className="footer-row-one">
        <div className="footer-row-one-item row-item">
          Home
        </div>
        <div className="footer-row-one-item row-item">
          Create a story
        </div>
        <div className="footer-row-one-item row-item">
          Resource center
        </div>
        <div className="footer-row-one-item row-item">
          Counserls Coaching
        </div>

    </div>
     <div className="footer-row-two">
       <div className="footer-row-two-item row-item">
        Everyone's Journey
       </div>
       <div className="footer-row-two-item row-item">
        SignIn
       </div>
       <div className="footer-row-two-item row-item">
        SignUp
       </div>

    </div>
    </div>
    <div className="footer-text-main">
      <p className="footer-text">
      Webiste Proudly Created by Ahmad Noor and  Daniel
      </p>
    </div>
    <div className="logo-section">
      <PinnacleLogo height={"90pt"} />
    </div>
  </div>

  )
}

export default Footer;
