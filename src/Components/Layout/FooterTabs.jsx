import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css'

const FooterTabs = ({color, flexDirection}) => {

  const tabsListRow1 = [
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
  ]

  const tabsListRow2 = [
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
  const Tab = (title, to) => <Link className="row-item" style={{color}} to={to}>
    {title}
  </Link>
  return (
    <div className="footer-main" style={{flexDirection}}>
    <div className="footer-row-one">
    {
      tabsListRow1.map(item => Tab(item.name, item.key))
    }

  </div>
   <div className="footer-row-two">
   {
      tabsListRow2.map(item => Tab(item.name, item.key))
    }

  </div>
  </div>
  )
}

export default FooterTabs
