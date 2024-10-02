import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosStar } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import redLine from "../../assets/redLine.svg";
const Clubhouse = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="my-20 px-2">
      <div className="container mx-auto">
        <div>
          <p>From The Clubhouse</p>
          <div className="flex justify-between mb-10">
            <p className="text-5xl my-3 font-bold flex justify-center">
              What
              <div className="flex mx-5 flex-col justify-center">
                <p>Players </p>
                <img className="w-[160px]" src={redLine} alt="" />
              </div>
              Are Saying
            </p>
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
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1} // Default to 1 slide for all devices
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide on mobile
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5, // 2.5 slides on tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.5, // 4.5 slides on desktops
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <SwiperSlide key={i}>
            <div className="bg-gray-100 p-5">
              <div>
                <p className="text-yellow-500 text-xl flex mb-3">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </p>
                <p className="font-thin">
                  Great purchase! Emails kept me in the know of what stage the
                  glove was in and when it shipped. Great options to choose from
                  and glove is great quality leather! You absolutely cant beat
                  the price for this quality of glove!
                </p>
              </div>
              <div>
                <hr className="border-1 border-gray-500 mb-5" />
                <p>Drew F</p>
                <p>Custom Glove</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clubhouse;
