import React from "react";

const Card = (props) => {
  const { title, overline, subtitle, image, video, children } = props;

  return (
    <div className="card">
      <div className="card-content">
        <span className="overline">overline</span>
        <span className="card-title">Card Title</span>
        <p>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </p>
      </div>
      <div className="card-actions">
        <a href="#">This is a link</a>
        <a href="#">This is a link</a>
      </div>
    </div>
  );
};

export default Card;
