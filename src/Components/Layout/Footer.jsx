import React, { Fragment } from 'react';
import PinnacleLogo from '../../assets/Logo'
import FooterTabs from './FooterTabs'
import './footer.css'
const Footer = ({footerStyle, showBanner}) => {
  return (
    <div className="footer-box" style={{padding: "20px",...footerStyle}}>
      <FooterTabs />
    {showBanner && <div className="footer-text-main">
      <p className="footer-text">
      Webiste Proudly Created by Ahmad Noor and  Daniel
      </p>
    </div>}
    <div className="logo-section">
      <PinnacleLogo height={"70pt"} />
    </div>
  </div>

  )
}

export default Footer;
