import React from "react";

const Media = props => {

  const { className, image, title, children } = props;
  
  return (
    <div className={"media " + (!!className && className)}>
      <img
        src={image}
        alt=""
        className="media-asset"
      ></img>

      <div className="media-content">
        {title && <h2 className="media-heading">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Media;
