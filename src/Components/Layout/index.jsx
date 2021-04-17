import React from "react";
import Header from "./Header";
const Layout = ({ children, height, position }) => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/mountain-1.jpg')",
        height: height || "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        position
      }}
    >
      <Header />
      <div
        style={{ paddingRight: "20px", paddingLeft: "20px" }}
        className="main-content"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
