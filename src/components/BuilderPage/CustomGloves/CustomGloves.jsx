import { useRef, useState, useEffect } from "react";
import GlovesSVG from "./GlovesSVG";
import Footer from "../../../shared/Footer";
import CustomColors from "../CustomColors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCartCount } from "../../../store/features/cartSlice";
import Navigation from "../../../shared/Navigation";

const CustomGloves = () => {
  const cartItems = localStorage.getItem("cartItems");
  const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
  const dispatch = useDispatch();
  const cartCount = parsedCartItems.length;
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [color, setColor] = useState({
    lather1: "darkgray",
    lather2: "lightgray",
    lather3: "darkgray",
    lather4: "lightgray",
    lather5: "darkgray",
    lather6: "lightgray",
    lather7: "darkgray",
    lather8: "darkgray",
    web: "gray",
    wrist: "wheat",
    palm: "darkgray",
    binding: "gray",
    logo: "black",
    laces: "black",
  });

  const [activeTab, setActiveTab] = useState("colors");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPersonalize, setSelectedPersonalize] = useState("");
  const [price, setPrice] = useState(249);

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

  const sizes = ['11"', '11.5"', '12"', '14"'];
  const personalizeOptions = [
    "44 Logo",
    "Custom Number",
    "Graphic",
    "Premium Graphic (+$10)",
  ];

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handlePersonalizeChange = (option) => {
    setSelectedPersonalize(option);
  };

  useEffect(() => {
    // Update price based on selected personalization
    if (selectedPersonalize === "Premium Graphic (+$10)") {
      setPrice(259); // Base price + additional cost
    } else {
      setPrice(249);
    }
  }, [selectedPersonalize]);

  const handleCart = () => {
    const itemDetails = {
      title: "Custom Gloves",
      colors: color,
      size: selectedSize,
      personalize: selectedPersonalize,
      price: price,
    };

    // Retrieve existing cart items from local storage
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the item already exists in the cart
    const itemIndex = existingCart.findIndex(
      (item) =>
        item.size === itemDetails.size &&
        JSON.stringify(item.colors) === JSON.stringify(itemDetails.colors) &&
        item.personalize === itemDetails.personalize
    );

    if (itemIndex > -1) {
      // If the item already exists, you can either update it or simply show a message
      alert("This item is already in your cart!");
    } else {
      // If it doesn't exist, add it to the cart
      existingCart.push(itemDetails);
      localStorage.setItem("cartItems", JSON.stringify(existingCart));
      dispatch(setCartCount(cartCount + 1));
      alert("Item added to cart!");
    }
  };

  return (
    <div className="">
      <Navigation />
      <div className="bg-zinc-300 px-5 ">
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="col-span-2 lg:w-[70%]">
            <GlovesSVG color={color} />
          </div>
          <div className="col-span-1 mt-5">
            <div className="grid grid-cols-3 mt-4">
              <button
                onClick={() => setActiveTab("sizes")}
                className={`p-5 text-start shadow-sm shadow-black ${
                  activeTab === "sizes"
                    ? "bg-[#ffa959]"
                    : "bg-zinc-300 hover:bg-zinc-400"
                }`}
              >
                Base
              </button>
              <button
                onClick={() => setActiveTab("colors")}
                className={`p-5 shadow-sm shadow-black text-start ${
                  activeTab === "colors"
                    ? "bg-[#ffa959]"
                    : "bg-zinc-300 hover:bg-zinc-400"
                }`}
              >
                Colors
              </button>
              <button
                onClick={() => setActiveTab("personalize")}
                className={`p-5 text-start shadow-sm shadow-black ${
                  activeTab === "personalize"
                    ? "bg-[#ffa959]"
                    : "bg-zinc-300 hover:bg-zinc-400"
                }`}
              >
                Personalize
              </button>
            </div>
            {activeTab === "colors" && (
              <div className="flex justify-between bg-zinc-200">
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
                  Next{" "}
                  <FaArrowRight style={{ fontSize: "14px", margin: "5px" }} />
                </button>
              </div>
            )}

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
            </Swiper>

            {/* Size Selection */}
            {activeTab === "sizes" && (
              <div className="bg-white rounded">
                <p className="p-10 py-5 bg-zinc-100 text-xl">SIZE</p>

                {sizes.map((size) => (
                  <div
                    className={`flex items-center border p-10 py-5 cursor-pointer ${
                      selectedSize === size
                        ? "bg-[#e3ffe3]"
                        : "hover:bg-zinc-100"
                    }`}
                    key={size}
                    onClick={() => handleSizeChange(size)}
                  >
                    <input
                      type="checkbox"
                      id={size}
                      name="size"
                      checked={selectedSize === size}
                      onChange={() => handleSizeChange(size)}
                      className="custom-checkbox"
                    />
                    <label htmlFor={size} className="text-lg font-thin flex-1">
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            )}
            {/* Personalization Selection */}
            {activeTab === "personalize" && (
              <div className="bg-white rounded">
                <p className="p-10 py-5 bg-zinc-100 text-xl uppercase">
                  Personalize
                </p>

                {personalizeOptions.map((option) => (
                  <div
                    className={`flex items-center border p-10 py-5 cursor-pointer ${
                      selectedPersonalize === option
                        ? "bg-[#e3ffe3]"
                        : "hover:bg-zinc-100"
                    }`}
                    key={option}
                    onClick={() => handlePersonalizeChange(option)}
                  >
                    <input
                      type="checkbox"
                      id={option}
                      name="personalize"
                      checked={selectedPersonalize === option}
                      onChange={() => handlePersonalizeChange(option)}
                      className="custom-checkbox"
                    />
                    <label
                      htmlFor={option}
                      className="text-lg font-thin flex-1"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
            <p
              className="bg-zinc-200 shadow-sm inline-block mb-20 px-10 mt-5 cursor-pointer text-xl text-zinc-800 rounded-md py-2"
              onClick={handleCart}
            >
              Add To Cart ${price}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomGloves;
