import { Avatar, IconButton } from "@mui/material";
import React from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./css/SlideBar.css";
import { Search } from "@mui/icons-material";
import SlideChat from "./SlideChat";

const SildeBar = () => {
  return (
    <div className="slidebar">
      <div className="slide__header">
        <Avatar
          src={`
https://api.dicebear.com/6.x/pixel-art/svg?seed=John`}
        />
        <div className="slide__header_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="slide__search">
        <div className="slide__searchContainer">
          <Search></Search>
          <input type="text" placeholder="Search or Start a new Chat" />
        </div>
      </div>
      <div className="Chat_Slide">
        <SlideChat addnewChat />
        <SlideChat />
        <SlideChat />
        <SlideChat />
      </div>
    </div>
  );
};

export default SildeBar;
