import { useRef, useState, useEffect } from "react";
import Footer from "../../../shared/Footer";
import CustomColors from "../CustomColors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCartCount } from "../../../store/features/cartSlice";
import Navigation from "../../../shared/Navigation";
import { toast } from "react-toastify";
import BatsSVG from "./BatsSVG";
import { setBatColors } from "../../../store/features/colorSlice";

const CustomBats = () => {
  const cartItems = localStorage.getItem("cartItems");
  const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
  const dispatch = useDispatch();
  const cartCount = parsedCartItems.length;
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const colors = useSelector((state) => state.color.batColors);

  const [activeTab, setActiveTab] = useState("colors");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPersonalize, setSelectedPersonalize] = useState("");
  const [price, setPrice] = useState(249);

  const handleColor = (part, value) => {
    dispatch(setBatColors({ [part]: value }));
  };

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const batParts = [
    { name: "Base Color", key: "base" },
    { name: "Model Graphic", key: "modelGraphic" },
    { name: "Handle Graphic", key: "handleGraphic" },
    { name: "Grip Color", key: "grip" },
    { name: "Grip Up Color", key: "gripUp" },
    { name: "Brand Color", key: "brand" },
    { name: "Logo Color", key: "logo" },
  ];

  const sizes = ['31"', '31.5"', '32"', '33"', '33.5"'];
  const personalizeOptions = [
    "Right Handed Hitter",
    "Left Handed Hitter ($20+)",
  ];

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handlePersonalizeChange = (option) => {
    setSelectedPersonalize(option);
  };

  useEffect(() => {
    // Update price based on selected personalization
    if (selectedPersonalize === "Right Handed Hitter") {
      setPrice(149);
    } else {
      setPrice(169);
    }
  }, [selectedPersonalize]);

  const handleCart = () => {
    const itemDetails = {
      title: "Custom Bats",
      colors: colors,
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
      toast.warning("This item is already in your cart!");
    } else {
      existingCart.push(itemDetails);
      localStorage.setItem("cartItems", JSON.stringify(existingCart));
      dispatch(setCartCount(cartCount + 1));
      toast.success("Item added to cart!");
      dispatch(setBatColors(batParts));
      setSelectedSize("");
      setSelectedPersonalize("");
    }
  };

  return (
    <div>
      <Navigation />
      <div className="bg-zinc-300 px-5">
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="col-span-2 flex justify-center">
            <BatsSVG color={colors} />
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
                Sizes
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
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
            >
              {activeTab === "colors" &&
                batParts.map(({ name, key }) => (
                  <SwiperSlide key={key}>
                    <p className="p-10 py-5 bg-zinc-100 text-xl">{name}</p>
                    <CustomColors
                      color={colors}
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

export default CustomBats;
