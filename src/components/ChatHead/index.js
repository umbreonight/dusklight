import React from "react";

const ChatHead = props => {
  return (
    <div className="chat-head">
      <div className="user">
        <img src={props.image} className="user-image"></img>
        <div className="chat-head-info">
          <span className="chat-head-user">{props.username}</span>
          <span className="chat-head-subtitle">{props.subtitle}</span>
        </div>
      </div>
    </div> 
    );
};

export default ChatHead;
