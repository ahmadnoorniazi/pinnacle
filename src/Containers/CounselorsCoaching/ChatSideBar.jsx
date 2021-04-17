import * as React from "react";
import Card from "../../Components/UserCard";
import { Scrollbars } from "react-custom-scrollbars";

const Article = () => {
  return (
    <div className="coaching-chat-profile">
        <Scrollbars style={{ height: 450 }}>
          <Card />
          <Card />
          <Card />
        </Scrollbars>
    </div>
  );
};

export default Article;
