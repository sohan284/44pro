import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import experiencebg from "../../assets/experienceBg.jpg";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CustomButton from "../../shared/CustomButton";
import redLine from "../../assets/redLine.svg";
import GlovesSVG from "../BuilderPage/CustomGloves/GlovesSVG";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGloveColors } from "../../store/features/colorSlice";
import curateds from "../../data/curateds.json";
const CustomCurated = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handleClick = (colors) => {
    dispatch(setGloveColors(colors));
    navigate("/builder/custom-gloves");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${experiencebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // paddingBlock: "40px",
      }}
      className="mt-20 py-20 px-2"
    >
      <div className="container mx-auto">
        <div>
          <p>Custom Curated</p>
          <div className="flex justify-between mb-10">
            <p className="text-5xl flex-wrap my-3 font-bold flex justify-center">
              <div className="flex  mr-5 flex-col justify-center">
                <p>Trending </p>
                <img className="w-[200px]" src={redLine} alt="" />
              </div>
              Collection
            </p>
            <div className="mb-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className={`p-4 m-1 ${
                  isBeginning ? "bg-red-300" : "bg-red-600"
                } text-white rounded transition-opacity`}
                disabled={isBeginning}
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className={`p-4 m-1 ${
                  isEnd ? "bg-red-300" : "bg-red-600"
                } text-white rounded transition-opacity`}
                disabled={isEnd}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        className="lg:ml-44"
        spaceBetween={15}
        slidesPerView={4.5} // Default to 1 slide
        breakpoints={{
          320: {
            slidesPerView: 1, // For very small mobile screens (320px)
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1.5, // Small devices (e.g., iPhone SE, 480px width)
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2, // Mobile devices (640px width)
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5, // Tablets (768px width)
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.5, // Desktop and larger screens (1024px and up)
            spaceBetween: 20,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {curateds.map((curated) => (
          <SwiperSlide key={curated.title}>
            <div className="bg-white p-5">
              {/* <img src={curated.img} alt={curated.title} /> */}
              <GlovesSVG color={curated.colors} />
              <div className="flex justify-between">
                <div>
                  <p>{curated.brand}</p>
                  <p className="text-xl font-semibold">{curated.title}</p>
                </div>
                <CustomButton
                  handleClick={() => handleClick(curated.colors)}
                  title="Custom"
                  bgColor="bg-zinc-800 text-white"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCurated;
