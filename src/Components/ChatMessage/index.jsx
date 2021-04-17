import React, { createElement, useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { FaUserCircle } from "react-icons/fa";


const ChatMessage = ({second}) => {
  return (
    <div>
    <div className="message-date">
      <h5>Yesterday 2:40 Pm</h5>
    </div>
  <div className={`user-message-card-body ${second && 'second-person'}`}>
    <div  className={`user-message-card-logo ${second && 'second-person-logo'}`}>
    {/* <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        /> */}
              <FaUserCircle style={{width: "30px", height: "30px", color: "#fff"}} />

    </div>
    <div>

    <div className="user-message-box">
      Abccccccccccc sdfdsf fsdf dsf fs ff sf sfsfsffsdfsfsdfasdf fadssdfsdffdsfsdf sdfadsf sddfsdfdsfsdfsdfds fafdsfdsasdf dsfs
    </div>
    <div className={`message-time ${second && 'float-right'}`}>
      <p>2:40 pm</p>
    </div>
    </div>

   </div>

   </div>

  );
};

export default ChatMessage;
