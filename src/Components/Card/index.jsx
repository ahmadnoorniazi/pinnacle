import React from "react";
import { Card } from "antd";

const CardComponent = () => {
  return (
    <Card
      style={{
        width: "200px",
        background: "gray",
        color: "#fff",
        marginBottom: "20px"
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default CardComponent;
