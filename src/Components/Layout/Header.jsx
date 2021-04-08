import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { FaUserCircle } from "react-icons/fa";

import './header.css';
const { Header, Content, Footer } = Layout;

const HeaderTop = () => {
  return (
    <div>
        <header className="header-main">
          <div className="header-box">
            <div className="header-item">
              Home
            </div>
            <div className="header-item">
              Resource center
            </div>
            <div className="header-item">
              Counserls Coaching
            </div>
            <div className="header-item">
              Everyone's Journey
            </div>
            <div className="header-item">
              Sign In
            </div>
            <div className="header-item">
              Sign Up
            </div>
            <div className="header-item">
              <FaUserCircle style={{width: "30px", height: "30px"}} />
            </div>
          </div>
        </header>
    </div>

  )
}

export default HeaderTop;
