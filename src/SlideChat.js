import { Avatar } from '@mui/material';
import React from 'react';
import './css/SlideBar.css'

const SlideChat = () => {
    return (
        <div className='slide__chat'>
            
                <Avatar/>
                <div className="Chat__text">
                    <h3>Pranab kumar</h3>
                    <p>last massage...</p>
                
            </div>
            
        </div>
    );
};

export default SlideChat;