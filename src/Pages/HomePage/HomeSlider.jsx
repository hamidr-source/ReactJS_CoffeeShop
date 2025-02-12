import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProducts } from "../../Context/ProductContext";
import { useTheme } from "../../Context/ThemeContext";

const HomeSlider = () => {
  const { products } = useProducts();
  const { isDarkMode } = useTheme();
  const homeSliderProducts = products.slice(7, 12);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // arrows: true,
    // nextArrow: (
    //   <div className="slick-next">
    //     <i class="fa-light fa-arrow-right"></i>
    //   </div>
    // ),
    // prevArrow: (
    //   <div className="slick-prev">
    //     <i class="fa-light fa-arrow-left"></i>
    //   </div>
    // ),
  };

  return (
    <div className="relative h-3/5 w-3/4 mt-4 mx-auto ring-secondary-dark shadow-lg rounded-xl">
      <Slider {...settings} className={`h-full w-full  `}>
        {homeSliderProducts.map((product, index) => (
          <div className="" key={index}>
            <div className="h-1/3 w-full">
              <img src={product.image_url} alt={product.name} />
            </div>
            <div className="flex flex-col gap-2 px-4">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
