import * as React from "react";
import RSC from "react-scrollbars-custom";
import Card from "../../Components/Card";
import { Scrollbars } from "react-custom-scrollbars";
import Carousal from "../../Components/Carousal";

const Article = () => {
  return (
    <div className="articles-main-section">
      <div className="articles-side-bar">
        <Scrollbars style={{ height: 450 }}>
          <Card />
          <Card />
          <Card />
        </Scrollbars>
      </div>
      <div className="articles-carousal-component">
        <Carousal />
      </div>
    </div>
  );
};

export default Article;
