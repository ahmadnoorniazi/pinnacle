import * as React from "react";
import Card from "../../Components/UserCard";
import { Scrollbars } from "react-custom-scrollbars";
import ChatMessage from "../../Components/ChatMessage"
import { Form, Input, Button, Checkbox } from 'antd';

const ChatMessages = () => {
  return (
    <div className="coaching-chat-profile" style={{position: "relative"}}>
        <Scrollbars style={{ height: 450 }}>
         <div>
         <ChatMessage />
         <ChatMessage second />
         <ChatMessage second />
         <ChatMessage second />
         <ChatMessage />
         <ChatMessage />
         </div>
        </Scrollbars>
        <div style={{paddingRight: "30px", paddingLeft: "30px", marginTop: "10px", marginBottom: "20px"}}>
        <Input style={{borderRadius: "10px", padding: "10px"}} placeholder="Type Here"/>
        </div>
    </div>
  );
};

export default ChatMessages;
