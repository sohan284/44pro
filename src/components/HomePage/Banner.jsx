import React, { useRef } from "react";
import Slider from "react-slick";
import banner1 from "../../assets/banner1.jpg";
import banner11 from "../../assets/banner1.1.png";
import banner12 from "../../assets/banner1.2.png";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.jpg";

function Banner() {
  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200000,
  };
  return (
    <div className="slider-container">
      {/* <div
        className="bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${banner1})`, height: "500px" }}
      >
        <img src={banner11} alt="" />
      </div> */}
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div
          className="bg-cover bg-banner1 relative bg-no-repeat"
          style={{ backgroundImage: `url(${banner1})`, height: "500px" }}
        >
          <img src={banner1} alt="" className="w-full" />
          <div className="absolute lg:block hidden top-5 right-5">
            <img src={banner11} alt="" className="h-[400px]" />
          </div>
          <div className="absolute lg:block hidden top-5 left-5">
            <img src={banner12} alt="" className="h-[400px]" />
          </div>
        </div>

        <div>
          <img src={banner2} alt="" />
        </div>
        <div>
          <img src={banner3} alt="" />
        </div>
        <div>
          <img src={banner4} alt="" />
        </div>
      </Slider>
    </div>
  );
}
export default Banner;
