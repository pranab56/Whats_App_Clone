import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./css/SlideBar.css";
import { Search } from "@mui/icons-material";
import SlideChat from "./SlideChat";
import db from "./firebase";

const SildeBar = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

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
        {rooms.map((room) => (
          <SlideChat key={room.id} id={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default SildeBar;
