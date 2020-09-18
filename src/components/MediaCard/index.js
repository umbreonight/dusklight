import React from "react";

const MediaCard = (props) => {
  const { title, overline, subtitle, image, video, children } = props;

  return (
    <div className="card">
      <div className="card-image">
        {!!video && 
          <video controls={true} poster={!!image ? image : ""}>
            <source src={video} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        }
        {!!image && <img src={image} alt={title}></img>}
      </div>
      <div className="card-content">
        {!!title && <span className="card-title">{title}</span>}
        {children}
      </div>
    </div>
  );
};

export default MediaCard;
