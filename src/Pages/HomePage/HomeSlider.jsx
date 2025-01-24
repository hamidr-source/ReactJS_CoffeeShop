import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: (
      <div className="slick-next">
        <i class="fa-light fa-arrow-right"></i>
      </div>
    ),
    prevArrow: (
      <div className="slick-prev">
        <i class="fa-light fa-arrow-left"></i>
      </div>
    ),
  };

  return (
    <div className="relative h-3/5 w-3/4 mt-4 mx-auto">
      <Slider {...settings} className="h-full w-full">
        {children}
      </Slider>
    </div>
  );
};

export default HomeSlider;
