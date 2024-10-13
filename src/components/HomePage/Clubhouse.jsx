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
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Great purchase! Emails kept me in the know of what stage the glove was in and when it shipped. Great options to choose from and glove is great quality leather! You absolutely can't beat the price for this quality of glove!",
      name: "Drew F",
      product: "Custom Glove",
    },
    {
      id: 2,
      rating: 4,
      text: "The glove fits perfectly and feels amazing. The customer service was also very helpful in answering my questions. Highly recommend!",
      name: "Sarah K",
      product: "Pro Model Glove",
    },
    {
      id: 3,
      rating: 5,
      text: "I love my new glove! The leather is soft and broken in right out of the box. Fast shipping too!",
      name: "Mike T",
      product: "Youth Glove",
    },
    {
      id: 4,
      rating: 4,
      text: "Good quality glove, but I wish it had more color options. Overall, a great buy!",
      name: "Emily R",
      product: "Fielding Glove",
    },
    {
      id: 5,
      rating: 5,
      text: "Fantastic glove! I've used it in several games already and it performs beautifully. Definitely worth the investment.",
      name: "Jason L",
      product: "Catcher's Mitt",
    },
    {
      id: 6,
      rating: 3,
      text: "Decent glove, but it took longer than expected to break in. Still a solid choice for the price.",
      name: "Liam M",
      product: "Training Glove",
    },
    {
      id: 7,
      rating: 5,
      text: "Amazing quality and great fit! The glove arrived quickly, and I couldn't be happier with my purchase.",
      name: "Olivia S",
      product: "First Base Mitt",
    },
    {
      id: 8,
      rating: 4,
      text: "Really happy with my glove. It's very comfortable, and the padding is just right. Highly recommended!",
      name: "Sophia B",
      product: "Outfield Glove",
    },
    {
      id: 9,
      rating: 5,
      text: "This is the best glove I've ever owned! The craftsmanship is top-notch and it looks fantastic.",
      name: "Ethan C",
      product: "Professional Glove",
    },
    {
      id: 10,
      rating: 4,
      text: "Great glove for beginners. It’s easy to use and very forgiving. My kids love it!",
      name: "Natalie J",
      product: "Beginner Glove",
    },
  ];

  return (
    <div className="my-20 px-2">
      <div className="container mx-auto">
        <div>
          <p>From The Clubhouse</p>
          <div className="flex  justify-between mb-10">
            <p className="text-5xl flex-wrap my-3 font-bold flex justify-center">
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
        {reviews.map(({ id, rating, text, name, product }) => (
          <SwiperSlide key={id}>
            <div className="bg-gray-100 p-5">
              <div>
                <p className="text-yellow-500 text-xl flex mb-3">
                  {Array.from({ length: rating }, (_, index) => (
                    <IoIosStar key={index} />
                  ))}
                </p>
                <p className="font-thin">{text}</p>
              </div>
              <div>
                <hr className="border-1 border-gray-500 mb-5" />
                <p>{name}</p>
                <p>{product}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clubhouse;
