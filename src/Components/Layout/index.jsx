import React from 'react';
import Header from './Header'
const Layout = ({children}) => {
  return (
    <div style={{backgroundImage: "url('/assets/mountain-1.jpg')", height: "500px"
  }}>
      <Header />
      <div style={{paddingRight: "20px", paddingLeft: "20px"}} className="main-content">
      {children}
      </div>
    </div>

  )
}

export default Layout;
