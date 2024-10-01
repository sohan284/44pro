import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import experiencebg from "../../assets/experienceBg.jpg";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import curated1 from "../../assets/curated1.png";
import curated10 from "../../assets/curated10.png";
import curated2 from "../../assets/curated2.png";
import curated3 from "../../assets/curated3.png";
import curated4 from "../../assets/curated4.png";
import curated5 from "../../assets/curated5.png";
import curated6 from "../../assets/curated6.png";
import curated7 from "../../assets/curated7.png";
import curated8 from "../../assets/curated8.png";
import curated9 from "../../assets/curated9.png";
import CustomButton from "../../shared/CustomButton";

const CustomCurated = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const curateds = [
    { title: "Duck Hunt", img: curated1, brand: "Infield / Pro 44" },
    { title: "Spring Season", img: curated2, brand: "Infield / Pro 44" },
    { title: "Lightning", img: curated3, brand: "Infield / Pro 44" },
    { title: "Cherry Blossom", img: curated4, brand: "Alloy XP BBCOR" },
    { title: "The Jocker", img: curated5, brand: "Alloy XP BBCOR" },
    { title: "The Bachelor", img: curated6, brand: "Infield / Pro 44" },
    { title: "USA", img: curated7, brand: "Alloy XP BBCOR" },
    { title: "The Mint", img: curated8, brand: "Infield / Pro 44" },
    { title: "City Connect", img: curated9, brand: "Alloy XP BBCOR" },
    { title: "Faith", img: curated10, brand: "Alloy XP BBCOR" },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${experiencebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingBlock: "40px",
      }}
      className="my-20 py-10 px-2"
    >
      <div className="container mx-auto">
        <div>
          <p>Custom Curated</p>
          <div className="flex justify-between mb-10">
            <p className="text-5xl my-3 font-bold">Trending Collection</p>
            <div className="mb-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className={`p-4 mr-2 ${
                  isBeginning ? "bg-red-300" : "bg-red-600"
                } text-white rounded transition-opacity`}
                disabled={isBeginning}
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className={`p-4 ${
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
              <img src={curated.img} alt={curated.title} />
              <div className="flex justify-between">
                <div>
                  <p>{curated.brand}</p>
                  <p className="text-xl font-semibold">{curated.title}</p>
                </div>
                <CustomButton title="Custom" bgColor="bg-zinc-800 text-white" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCurated;
