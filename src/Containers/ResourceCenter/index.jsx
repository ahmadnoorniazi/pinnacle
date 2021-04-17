import React from "react";
import Layout from "../../Components/Layout";
import FooterHover from "../../Components/Layout/FooterHover";
import Articles from "./ExternalArticles";
import "./index.css";
const MainStory = () => {
  return (
    <div>
      <Layout height="600px">
        <div className="articles-content">
          <Articles />
        </div>
      </Layout>
      <div
        className="resource-second"
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp6119235.jpg')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Articles />
        <FooterHover />
      </div>
    </div>
  );
};

export default MainStory;
