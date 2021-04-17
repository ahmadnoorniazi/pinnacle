import React from "react";
import Layout from "../../Components/Layout";
import FooterHover from "../../Components/Layout/FooterHover";
import BookSlider from '../../Components/BookSlider'
import Carousal from "../../Components/Carousal";

import "./index.css";
const EveryoneJourney = () => {
  return (
    <div>
      <Layout height="800px">
        <div className="journey-content">
          <div className="journey-main-heading">
            <h2>Everyone is special and Everyone has a Journey that is special and We want you to know that</h2>
          </div>
          <div className="journey-book-slider-section">
          <BookSlider />
          <h1>Most Viewed Stories</h1>
          </div>
          <div className="story-slider-section">
            <div style={{width:"700px"}}>
            <Carousal />
            </div>

          </div>
        </div>
      </Layout>
      {/* <div
        className="resource-second"
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp6119235.jpg')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FooterHover />
      </div> */}
    </div>
  );
};

export default EveryoneJourney;
