import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './header.css';
const { Header, Content, Footer } = Layout;

const HeaderTop = () => {
  const [activeTab, setActiveTab] = useState("")

  useEffect(() => {
    const currentTab = window.location.pathname
    setActiveTab(currentTab)
  },[])
console.log("active Tab", activeTab)
  const tabsList = [
    {
      name: 'Home',
      key: "/",
      to: "/"
    },
    {
      name: 'Create a Story',
      key: "/create-a-story",
      to: "/"
    },
    {
      name: 'Resource center',
      key: "/resource-center",
      to: "/"
    },
    {
      name: 'Counserls Coaching',
      key: "/counselors-coaching",
      to: "/counselors-coaching"
    },
    {
      name: 'Everyones Journey',
      key: "/everyones-journey",
      to: "/"
    },
    {
      name: 'Sign In',
      key: '/sign-in',
      to: "/"
    },
    {
      name: 'Sign Up',
      key: '/sign-up',
      to: "/"
    }
  ]
  return (
    <div>
        <header className="header-main">
          <div className="header-box">
           {tabsList.map(item =>
           <Link className="header-item" to={item.key} style={activeTab === item.key ? {borderBottom: "3px solid #fff", textDecoration: "none"} : {}}>
              {item.name}
            </Link>)}

            <div className="header-item">
              <FaUserCircle style={{width: "30px", height: "30px"}} />
            </div>
          </div>
        </header>
    </div>

  )
}

export default HeaderTop;
