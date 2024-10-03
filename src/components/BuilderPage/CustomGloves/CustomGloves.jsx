import { useRef, useState } from "react";
import GlovesSVG from "./GlovesSVG";
import Footer from "../../../shared/Footer";
import NavBar from "../../../shared/navBar";
import CustomColors from "../CustomColors";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomGloves = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [color, setColor] = useState({
    lather1: "wheat",
    lather2: "wheat",
    lather3: "wheat",
    lather4: "wheat",
    lather5: "wheat",
    lather6: "wheat",
    lather7: "wheat",
    lather8: "wheat",
    palm: "wheat",
    web: "wheat",
    wrist: "wheat",
    binding: "wheat",
    homePlate: "wheat",
    stitching: "wheat",
    logo: "white",
    laces: "wheat",
  });

  const handleColor = (part, value) => {
    setColor((prevColor) => ({
      ...prevColor,
      [part]: value,
    }));
    console.log(part, value);
  };

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div>
      <NavBar />
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div>
          <GlovesSVG color={color} />
        </div>
        <div className="">
          <div className="flex justify-between bg-zinc-100 ">
            <div>
              <p
                onClick={() => swiperRef.current?.slidePrev()}
                className={`p-4 mr-2 ${
                  isBeginning ? "hidden" : "flex"
                } text-blue-500 rounded transition-opacity font-semibold cursor-pointer`}
              >
                <FaArrowLeft style={{ fontSize: "14px", margin: "5px" }} />{" "}
                Previous
              </p>
            </div>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className={`p-4 ${
                isEnd ? "hidden" : "flex"
              } text-blue-500 rounded transition-opacity font-semibold cursor-pointer`}
            >
              Next <FaArrowRight style={{ fontSize: "14px", margin: "5px" }} />
            </button>
          </div>
          <Swiper
            ref={swiperRef}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // Save the swiper instance
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            <SwiperSlide>
              <p className="p-10 text-xl">LEATHER 1</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("lather1", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">LEATHER 2</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("lather2", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">LEATHER 3</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("lather3", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">LEATHER 4</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("lather4", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">LEATHER 5</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("lather5", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">LEATHER 6</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("lather6", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">LEATHER 7</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("lather7", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">LEATHER 8</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("lather8", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">PALM</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("palm", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">WEB</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("web", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">WRIST</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("wrist", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">BINDING</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("binding", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">LOGO COLOR</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("logo", value)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <p className="p-10 text-xl">LACES</p>
              <CustomColors
                color={color}
                handleColor={(value) => handleColor("laces", value)}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomGloves;
