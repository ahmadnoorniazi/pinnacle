import React from 'react';
import './index.css';
import { Popover, Button } from 'antd';
import PinnacleLogo from '../../assets/Logo'
import FooterTabs from './FooterTabs'
import './footer.css'


const content = (
  <div>
   <FooterTabs color="black" flexDirection="column"/>
  </div>
);

const FooterHover = () => {
  return (
    <Popover content={content} title="Footer" placement="topRight">
     <div className="logo-section">
      <PinnacleLogo height={"70pt"} />
    </div>
  </Popover>
  )
}

export default FooterHover
