import React from "react";

const UserProfile = props => {

  let { username, subtitle, image } = props;
  
  return (
    <div className="user-profile">
      <div className="user">
        <img src={image} className="user-image"></img>
        <div className="user-info">
          <span className="user-title">{username}</span>
          <span className="user-subtitle">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
