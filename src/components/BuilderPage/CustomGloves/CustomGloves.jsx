import { useRef, useState } from "react";
import GlovesSVG from "./GlovesSVG";
import Footer from "../../../shared/Footer";
import NavBar from "../../../shared/navBar";
import CustomColors from "../CustomColors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomGloves = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [color, setColor] = useState({
    lather1: "#aca9a9",
    lather2: "#c4c4c4",
    lather3: "#aca9a9",
    lather4: "#c4c4c4",
    lather5: "#aca9a9",
    lather6: "#c4c4c4",
    lather7: "#aca9a9",
    lather8: "#aca9a9",
    web: "#bdbdb1",
    wrist: "#edffedee",
    palm: "#868686",
    binding: "#787280",
    logo: "#7e8292ee",
    laces: "#cad0d1",
  });

  const [activeTab, setActiveTab] = useState("colors");

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

  // Define an array for the parts of the glove
  const gloveParts = [
    { name: "LEATHER 1", key: "lather1" },
    { name: "LEATHER 2", key: "lather2" },
    { name: "LEATHER 3", key: "lather3" },
    { name: "LEATHER 4", key: "lather4" },
    { name: "LEATHER 5", key: "lather5" },
    { name: "LEATHER 6", key: "lather6" },
    { name: "LEATHER 7", key: "lather7" },
    { name: "LEATHER 8", key: "lather8" },
    { name: "PALM", key: "palm" },
    { name: "WEB", key: "web" },
    { name: "WRIST", key: "wrist" },
    { name: "BINDING", key: "binding" },
    { name: "LOGO COLOR", key: "logo" },
    { name: "LACES", key: "laces" },
  ];

  // Define sizes
  const sizes = ["Small", "Medium", "Large", "Extra Large"];

  return (
    <div>
      <NavBar />
      <div className="grid px-5 bg-zinc-300 lg:grid-cols-3 grid-cols-1">
        <div className="col-span-2 lg:w-[70%]">
          <GlovesSVG color={color} />
        </div>
        <div className="col-span-1 mt-5">
          {/* Tabs for Color and Size */}
          <div className="grid grid-cols-3  mt-4">
            <button
              onClick={() => setActiveTab("sizes")}
              className={`lg:p-6 p-2 text-start shadow-sm shadow-black ${
                activeTab === "sizes"
                  ? "bg-[#ffa959]"
                  : "bg-zinc-300 hover:bg-zinc-400"
              }`}
            >
              Base
            </button>
            <button
              onClick={() => setActiveTab("colors")}
              className={`lg:p-6 p-2 shadow-sm shadow-black text-start ${
                activeTab === "colors"
                  ? "bg-[#ffa959]"
                  : "bg-zinc-300 hover:bg-zinc-400"
              }`}
            >
              Colors
            </button>
            <button
              onClick={() => setActiveTab("sizes")}
              className={`lg:p-6 p-2 text-start shadow-sm shadow-black  ${
                activeTab === "personalize"
                  ? "bg-[#ffa959]"
                  : "bg-zinc-300 hover:bg-zinc-400"
              }`}
            >
              Personalize
            </button>
          </div>
          <div className="flex justify-between bg-zinc-200 ">
            <div>
              <p
                onClick={() => swiperRef.current?.slidePrev()}
                className={`p-4 mr-2 ${
                  isBeginning ? "hidden" : "flex"
                } text-blue-500 rounded transition-opacity font-semibold cursor-pointer`}
              >
                <FaArrowLeft style={{ fontSize: "14px", margin: "5px" }} />
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

          {/* Swiper for Colors and Sizes */}
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
            {activeTab === "colors" &&
              gloveParts.map(({ name, key }) => (
                <SwiperSlide key={key}>
                  <p className="p-10 py-5 bg-zinc-100 text-xl">{name}</p>
                  <CustomColors
                    color={color}
                    handleColor={(value) => handleColor(key, value)}
                  />
                </SwiperSlide>
              ))}
            {activeTab === "sizes" &&
              sizes.map((size) => (
                <SwiperSlide key={size}>
                  <p className="p-10 py-5 text-xl">{size}</p>
                  <button className="p-2 bg-blue-500 text-white rounded">
                    Select {size}
                  </button>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomGloves;
