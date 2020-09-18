import React, { Fragment } from "react";

const ParallaxStars = ({title, fixed=false}) => {
  return (
    <Fragment>
      <div className="parallax-stars">
        <div className={'stars' + (!!fixed && ' fixed')}>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div className="title">{title}</div>
      </div>
    </Fragment>
  );
};

export default ParallaxStars;
