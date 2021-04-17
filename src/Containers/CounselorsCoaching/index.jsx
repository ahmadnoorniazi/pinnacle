import React from "react";
import Layout from "../../Components/Layout";
// import Footer from "../../Components/Layout/Footer";
import ChatProfile from './ChatSideBar'
import ChatMessages from './MessagesSideBar'
import FooterHover from '../../Components/Layout/FooterHover'
import "./index.css";
const MainStory = () => {
  return (
    <div>
      <Layout>
        <div className="coaching-content">
          <div className="coaching-heading-one">
            <h1>
              Counsalor's Coaching
            </h1>
          </div>
          <div className="coaching-heading-second">
          <h5>
          Your messages and wisdom can impect the youth to help them see their full potential
          </h5>
          </div>
          <div className="coaching-chat-main">
            <div className="coaching-chat-profile-section">
            <ChatProfile />
            </div>
            <div className="coaching-chat-messages-section">
            <ChatMessages />
            </div>
          </div>
        </div>
        <div>

        <FooterHover color="black" />
        </div>

      </Layout>
    </div>
  );
};

export default MainStory;
