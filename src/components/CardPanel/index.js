import React from "react";

const CardPanel = (props) => {
  const { title, overline, subtitle, image, video, children } = props;

  return (
    <div className="card-panel">
      <p>
        I am a very simple card. I am good at containing small bits of
        information. I am convenient because I require little markup to use
        effectively.
      </p>
    </div>
  );
};

export default CardPanel;
