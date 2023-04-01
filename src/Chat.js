import { Avatar, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import './css/Chat.css';

const Chat = () => {
  return (
    <div className="chat1">
      <div className="chat__header">
    <Avatar/>
    <div className="chat__info">
    <h3>React Developer</h3>
    <p>last seen Wed, sep,2020</p>
    </div>
    <div className="header__right">
    <IconButton>
        <SearchIcon/>
    </IconButton>
    <IconButton>
        <AttachFileIcon/>
    </IconButton>
    <IconButton>
        <MoreVertIcon/>
    </IconButton>
    </div>
      </div>
    <div className="chat__body">
        <p className="chat__massage chat_recever">
            <span className="chat_name">Pranab kumar</span>
            This is test massage
            <span className="chat_time">12:40pm</span>
        </p>
        <p className="chat__massage chat_recever">
            <span className="chat_name">Pranab kumar</span>
            This is test massage 
            <span className="chat_time">12:40pm</span>
        </p>
        <p className="chat__massage ">
            <span className="chat_name">Pranab kumar</span>
            This is test massage
            <span className="chat_time">12:40pm</span>
        </p>
    </div>
    </div>
  );
};

export default Chat;
