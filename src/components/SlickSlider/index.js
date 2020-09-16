import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <i className="icon icon-36 slick-arrow slick-prev" onClick={onClick}>
      chevron_left
    </i>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <i className="icon icon-36 slick-arrow slick-next" onClick={onClick}>
      chevron_right
    </i>
  );
};

const SlickSlider = props => {

  let { children, options } = props;

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    fade: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const slick = {...settings, ...options}; 

  return (
    <div className="slider">
      <Slider {...slick}>
        {children}
      </Slider>
    </div>
  );
};

export default SlickSlider;
