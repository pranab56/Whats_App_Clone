import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./css/SlideBar.css";

const SlideChat = ({ addnewChat }) => {
  const [svg, setsvg] = useState("");
  useEffect(() => {
    setsvg(Math.random().toString(36).slice(2, 7));
  }, []);
  return !addnewChat ? (
    <div className="slide__chat">
      <Avatar
        src={`
https://api.dicebear.com/6.x/pixel-art/svg?seed=${svg}`}
      />
      <div className="Chat__text">
        <h4>Pranab kumar</h4>
        <p>last massage...</p>
      </div>
    </div>
  ) : (
    <div className="slide__chat">
      <h3>Add New Chat</h3>
    </div>
  );
};

export default SlideChat;
