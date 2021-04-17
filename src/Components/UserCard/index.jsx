import React from "react";
import { Card } from "antd";
import { FaUserCircle } from "react-icons/fa";
import './index.css'
const CardComponent = () => {
  return (
    <Card
      style={{
        width: "250px",
        background: "transparent",
        color: "#fff",
        marginBottom: "20px"
      }}
    >
      <div className="user-profile-card-body">
      <div className="user-card-logo">
      <FaUserCircle style={{width: "30px", height: "30px"}} />
      </div>
      <div className="user-card-message">
        Abccccccccccc sdfdsf fsdf dsf fs ff sf sfsfsffsdfsfsdfasdf fadssdfsdffdsfsdf sdfadsf sddfsdfdsfsdfsdfds fafdsfdsasdf dsfs
      </div>
      </div>
    </Card>
  );
};

export default CardComponent;
