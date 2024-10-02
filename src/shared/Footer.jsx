import { IoLogoInstagram } from "react-icons/io";
import darkBg from "../assets/darkBg.jpg";
import logo from "../assets/logo2.svg";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo2 from "../assets/44.svg";
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${darkBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // paddingBlock: "40px",
      }}
      className=" py-16 px-2"
    >
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3">
        <div className="lg:block hidden">
          <img src={logo} alt="" />
        </div>
        <div className="text-white">
          <p className="text-xl font-semibold mb-5">Product</p>
          <p className="my-2 hover:opacity-80">Gift Cards</p>
          <p className="my-2 hover:opacity-80">Custom Gloves</p>
          <p className="my-2 hover:opacity-80">Custom Baseball Bats</p>
          <p className="my-2 hover:opacity-80">Custom Guards</p>
          <p className="my-2 hover:opacity-80">Stock Products</p>
          <p></p>
        </div>
        <div>
          <div className="text-white mt-16 lg:mt-0 md:mt-0">
            <p className="text-xl font-semibold mb-5">Support</p>
            <p className="my-2 hover:opacity-80">Support Center</p>
            <p className="my-2 hover:opacity-80">Return Policy</p>
            <p className="my-2 hover:opacity-80">Warranty Information</p>
            <p className="my-2 hover:opacity-80">Check Order Status</p>
            <p className="my-2 hover:opacity-80">Check Gift Card Balance</p>
            <p className="my-2 hover:opacity-80">About Us</p>
            <p className="my-2 hover:opacity-80">Careers</p>
            <p className="my-2 hover:opacity-80">Ambassador Program</p>
            <p></p>
          </div>
        </div>
        <div className="text-white mt-16 lg:mt-0 md:mt-0">
          <p className="text-xl font-semibold mb-5">Follow Us</p>
          <p className="my-5 hover:opacity-80 flex">
            <IoLogoInstagram
              style={{ fontSize: "28px", marginRight: "8px", color: "orange" }}
            />{" "}
            @44procustom
          </p>
          <p className="my-5 hover:opacity-80 flex">
            <FaTiktok
              style={{ fontSize: "24px", marginRight: "10px", color: "orange" }}
            />{" "}
            @44pro
          </p>
          <p className="my-5 hover:opacity-80 flex">
            <FaYoutube
              style={{ fontSize: "24px", marginRight: "10px", color: "orange" }}
            />{" "}
            44 Pro
          </p>
          <p className="my-5 hover:opacity-80 flex">
            <FaXTwitter
              style={{ fontSize: "26px", marginRight: "10px", color: "orange" }}
            />{" "}
            @44ProCustom
          </p>
          <p className="my-5 hover:opacity-80 flex">
            <FaFacebookF
              style={{ fontSize: "24px", marginRight: "10px", color: "orange" }}
            />{" "}
            44 Pro
          </p>
        </div>
      </div>
      <div className="flex mt-8 container mx-auto">
        <div className="border-t border-zinc-600 w-[50%] mt-3"></div>
        <img src={logo2} alt="" className=" w-16 ml-8" />
        <div className="border-t border-zinc-600 w-[50%] mt-3"></div>
      </div>
      <div className="flex justify-between container mx-auto mt-10 text-white text-center flex-col lg:flex-row-reverse ">
        <p className="hover:opacity-80">Privacy Policy - Terms of Use</p>
        <p>© Copyright 2024 - 44 Pro Sports - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
