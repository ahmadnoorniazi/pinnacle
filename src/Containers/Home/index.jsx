import React from 'react';
import Layout from '../../Components/Layout'
import Footer from '../../Components/Layout/Footer'
import Logo from '../../assets/Logo'

import './index.css'
const Homepage = () => {
  return (
    <div>
      <Layout height="600px">
        <div>
          <div>
            <Logo />
          </div>
          <div className="home-main-text">
            An Alternative Method of Copying Without a Face to Face Interaction
          </div>
          <div className="header-text-box">
            <h5>An Alternative Method of Copying Without a Face to Face Interaction...</h5>
            <h5>An Alternative Method of Copying Without a Face to Face Interaction An Alternative Method of Copying Without a Face to Face Interaction</h5>
          </div>
        </div>
      </Layout>
      <div className="home-second" style={{background: "url('https://wallpapercave.com/wp/wp6119235.jpg')", height: "600px"}}>
        <div className="home-second-detail">
          <h1>Reach your Pinnacle</h1>
          </div>
          <div className="header-text-box" style={{marginTop: "80px"}}>
            <h5>An Alternative Method of Copying Without a Face to Face Interaction An Alternative Method of Copying Without a Face to Face Interaction abc xyz</h5>
          </div>
        <Footer footerStyle={{position: "absolute",}} showBanner />
        </div>
    </div>
  )
}

export default Homepage
