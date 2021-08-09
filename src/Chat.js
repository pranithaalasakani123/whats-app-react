import {Avatar , IconButton} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import React from 'react'
import "./Chat.css"

function Chat({ messages }) {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                   <h3>Room Name</h3>
                   <p>Last seen at ....</p>
                </div>
                <div className="chat__headerRight">
                  <IconButton>
                    <SearchOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <AttachFileOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <MoreVertOutlinedIcon />
                  </IconButton>
                </div>
            </div>

            <div className="chat__body">
               {messages.map((message)=>{
                 return(
                 <p className={'chat__message ${message.received && " chat__reciever"}'}>
                   <span className="chat__name">{message.name}</span>
                   {message.message}
                   <span className="chat__timestamp">
                      {message.timestamp}
                   </span>
                 </p>
                 )
               })}
               <p className=" chat__reciever chat__message">
                   <span className="chat__name">pranitha</span>
                   this is a message
                   <span className="chat__timestamp">
                      {new Date().toUTCString()}
                   </span>
               </p>
            </div>

            <div className="chat__footer">
               <EmojiEmotionsOutlinedIcon />
               <form>
                 <input placeholder="Type a message"
                 type="text" />
                 <button type="submit"> send </button>
               </form>
               <MicNoneOutlinedIcon />
            </div>
        </div>
    )
}

export default Chat
