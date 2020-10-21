import React from "react";

const CompactCard = (props) => {
  return (
    <div className={"card small"}>
      <div className="card-image">
        <img src={props.image} alt=""></img>
      </div>
      <div className="card-content">
        <span className="overline">{props.overline}</span>
        <span className="card-title">{props.title}</span>
        <span className="caption">{props.caption}</span>
      </div>
    </div>
  );
};

export default CompactCard;
