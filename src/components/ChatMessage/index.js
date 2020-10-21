import React from "react";

const ChatMessage = props => {
  return (
    <div className={"chat-message " + (props.className ? props.className : "")}>
      <img
        src={props.image}
        alt=""
        className="user-avatar"
      ></img>

      <div className="message-body">
        <p>{props.body}</p>
        {props.children}
      </div>
    </div>
  );
};

export default ChatMessage;
