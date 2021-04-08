import React from 'react';
import Layout from '../../Components/Layout'
import Footer from '../../Components/Layout/Footer'
import Logo from '../../assets/Logo'
import './index.css'
const Homepage = () => {
  return (
    <div>
      <Layout>
        <div>
          <div>
            <Logo />
          </div>
          <div className="home-main-text">
            An Alternative Method of Copying Without a Face to Face Interaction
          </div>
        </div>
      </Layout>
      {/* <Footer /> */}

    </div>
  )
}

export default Homepage
