import React from "react";

const Card = (props) => {
  const { title, overline, children } = props;

  return (
    <div className="card">
      <div className="card-content">
        {!!overline && <span className="overline">{overline}</span>}
        {!!title && <span className="card-title">{title}</span>}
        {children}
      </div>
      <div className="card-actions">
        <a href="#">Link</a>
      </div>
    </div>
  );
};

export default Card;
