import React from "react";

const Banner = (props) => {
  let { title, className, subtitle, image, body } = props;

  return (
    <div className={"banner " + (!!className ? className : "")}>
      <div className="banner-image">
        <img className="responsive" src={image} alt=""></img>
      </div>
      <div className="banner-content container">
        <h1 className="banner-title">
          {title}
          {!!subtitle && <small className="banner-subtitle">{subtitle}</small>}
        </h1>
        {body && <p className="feature">{body}</p>}
      </div>
    </div>
  );
};

export default Banner;
