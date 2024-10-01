import { useRef } from "react";
import Slider from "react-slick";
import banner1 from "../../assets/banner1.jpg";
import banner11 from "../../assets/banner1.1.png";
import banner12 from "../../assets/banner1.2.png";
import banner13 from "../../assets/banner1.3.png";
import banner2 from "../../assets/banner2.jpg";
import banner21 from "../../assets/banner2.1.png";
import banner22 from "../../assets/banner2.2.png";
import banner23 from "../../assets/banner2.3.png";
import banner3 from "../../assets/banner3.jpg";
import banner31 from "../../assets/banner3.1.png";
import banner32 from "../../assets/banner3.2.png";
import banner33 from "../../assets/banner3.3.png";
import banner4 from "../../assets/banner4.jpg";
import banner41 from "../../assets/banner4.1.png";
import banner42 from "../../assets/banner4.2.png";
import banner43 from "../../assets/banner4.3.png";
import custom from "../../assets/custom.png";
function Banner() {
  let sliderRef = useRef(null);
  console.log(sliderRef);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200000,
  };
  return (
    <div className="slider-container overflow-hidden">
      {/* <div
        className="bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${banner1})`, height: "500px" }}
      >
        <img src={banner11} alt="" />
      </div> */}
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div className="relative">
          <img src={banner1} alt="" className="w-full" />
          <div className="absolute lg:block hidden top-5 right-24">
            <img src={banner11} alt="" className="h-[600px]" />
          </div>
          <div className="absolute lg:block hidden top-5 left-24">
            <img src={banner12} alt="" className="h-[620px]" />
          </div>
          <div className="absolute lg:block hidden top-20 left-36">
            <img src={banner13} alt="" className="h-[280px]" />
            <p className="m-2 p-2 py-3 px-4 w-[40%] flex  bg-[#ff0666] text-white ml-10 cursor-pointer rounded-md text-[15px]">
              <img className="w-5 h-5" src={custom} alt="" /> Customize Your PRX
            </p>
          </div>
        </div>

        <div className="h-full relative">
          <img src={banner2} alt="" className="w-full" />
          <div className="absolute lg:block hidden top-20 right-28">
            <img src={banner21} alt="" className="h-[480px]" />
          </div>
          <div className="absolute lg:block hidden top-5 left-24">
            <img src={banner22} alt="" className="h-[612px]" />
          </div>
          <div className="absolute lg:block hidden top-28 left-40">
            <img src={banner23} alt="" className="h-[280px]" />
            <p className="m-2 p-2 py-3 px-4 w-[40%] flex ml-10 bg-gradient-to-r from-[#81ffe0] to-[#00ffea] text-black cursor-pointer rounded-md text-[15px]">
              <img className="w-5 h-5" src={custom} alt="" /> Build Your Custom
              44
            </p>
          </div>
        </div>

        <div className="h-full relative">
          <img src={banner3} alt="" className="w-full" />
          <div className="absolute lg:block hidden top-5 right-60">
            <img src={banner31} alt="" className="h-[612px]" />
          </div>
          <div className="absolute lg:block hidden top-5 left-72">
            <img src={banner32} alt="" className="h-[612px]" />
          </div>
          <div className="absolute lg:block hidden top-28 left-72">
            <img src={banner33} alt="" className="h-[280px]" />
            <p className="m-2 p-2 py-3 px-4 w-[40%] flex ml-24 bg-gradient-to-r  from-[#81ffe0] to-[#00ffea] text-black cursor-pointer rounded-md text-[15px]">
              <img className="w-5 h-5" src={custom} alt="" /> Build Your Custom
              44
            </p>
          </div>
        </div>

        <div className="h-full relative">
          <img src={banner4} alt="" className="w-full" />
          <div className="absolute lg:block hidden top-36 right-1">
            <img src={banner41} alt="" className="h-[300px]" />
          </div>
          <div className="absolute lg:block hidden top-5 left-48">
            <img src={banner42} alt="" className="h-[612px]" />
          </div>
          <div className="absolute lg:block hidden top-48 left-72">
            <img src={banner43} alt="" className="h-[280px]" />
            <p className="m-2 p-2 py-3 px-4 w-[50%] flex  bg-gradient-to-r from-[#acff5e] to-[#ffd000] text-black cursor-pointer rounded-md text-[15px]">
              <img className="w-5 h-5" src={custom} alt="" /> Customize Your Bat
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default Banner;
