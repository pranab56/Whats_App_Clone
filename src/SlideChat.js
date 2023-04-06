import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./css/SlideBar.css";
import db from "./firebase";

const SlideChat = ({id,room, addnewChat }) => {
  // console.log(room);
  const [svg, setsvg] = useState("");
  useEffect(() => {
    setsvg(Math.random().toString(36).slice(2, 7));
  }, []);

  const createRooms=()=>{
    const room=prompt('Please inter your room name .')
    if(room){
      db.collection('rooms').add({
        name:room
      })
    }
  }


  return !addnewChat ? (
    <div className="slide__chat">
      <Avatar
        src={`
https://api.dicebear.com/6.x/pixel-art/svg?seed=${svg}`}
      />
      <div className="Chat__text">
        <h4>{room.data.name}</h4>
        <p>last massage...</p>
      </div>
    </div>
  ) : (
    <div className="slide__chat" onClick={createRooms}>
      <h3>Add New Chat</h3>
    </div>
  );
};

export default SlideChat;
