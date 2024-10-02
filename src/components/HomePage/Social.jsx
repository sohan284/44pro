import { FaCheckCircle, FaInstagram } from "react-icons/fa";
import line from "./../../assets/redLine.svg";
import image1 from "../../assets/social1.jpg";
import image2 from "../../assets/social2.jpg";
import image3 from "../../assets/social3.jpg";
import image4 from "../../assets/social4.jpg";
import image5 from "../../assets/social5.jpg";
import image6 from "../../assets/social6.jpg";
import player from "../../assets/social7.jpg";
import "./Social.css";

const Social = () => {
  return (
    <div className="bg-image-dark pt-20">
      <div className="flex justify-center w-full text-white">
        <div className="text-center relative">
          <p className="text-lg">Latest From Instagram</p>
          <h1 className="text-4xl xl:text-5xl font-bold mt-2">
            Join Over 430k+ Followers
          </h1>
          <div className="flex justify-center mt-10">
            <div>
              <div
                className={`flex px-8 justify-center bg-slate-50 text-black py-3 hover:opacity-90  rounded-md`}
              >
                <FaInstagram className="mr-2 mt-1" />
                <p className="text-center font-medium">Follow @44procustom</p>
              </div>
            </div>
          </div>
          <img
            src={line}
            alt="sdsd"
            className="hidden xl:block absolute bottom-1/2 left-[37%] w-32 "
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-10">
        <a href="" target="blank" className="relative group overflow-hidden">
          <img
            src={image1}
            alt=""
            className="w-80 h-80 object-cover transition duration-200 ease-in-out transform "
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in-out"></div>
        </a>
        <a href="" target="blank" className="relative group overflow-hidden">
          <img
            src={image2}
            alt=""
            className="w-80 h-80 object-cover transition duration-200 ease-in-out transform "
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in-out"></div>
        </a>
        <a href="" target="blank" className="relative group overflow-hidden">
          <img
            src={image3}
            alt=""
            className="w-80 h-80 object-cover transition duration-200 ease-in-out transform "
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in-out"></div>
        </a>
        <a href="" target="blank" className="relative group overflow-hidden">
          <img
            src={image4}
            alt=""
            className="w-80 h-80 object-cover transition duration-200 ease-in-out transform "
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in-out"></div>
        </a>
        <a href="" target="blank" className="relative group overflow-hidden">
          <img
            src={image5}
            alt=""
            className="w-80 h-80 object-cover transition duration-200 ease-in-out transform "
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in-out"></div>
        </a>
        <a href="" target="blank" className="relative group overflow-hidden">
          <img
            src={image6}
            alt=""
            className="w-80 h-80 object-cover transition duration-200 ease-in-out transform "
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in-out"></div>
        </a>
      </div>
      <div className="flex">
        <div className="bg-image-light w-full xl:w-1/2 xl:pl-32 xl:pt-32 px-4 py-10">
          <div className="text-center xl:text-left">
            <p className="text-lg">Sign Up Today</p>
            <h1 className="text-4xl xl:text-5xl font-bold mt-2">
              Join The 44 Pro Team
            </h1>
          </div>
          <div className="text-center mt-5  xl:flex gap-5">
            <p className="flex items-center gap-2">
              {" "}
              <FaCheckCircle className="text-green-500" /> New Product Launch
              Info
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <FaCheckCircle className="text-green-500" /> Advanced Notice On
              Sales
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <FaCheckCircle className="text-green-500" /> Subscriber Exclusive
              Deals
            </p>
          </div>
          <div className="mt-10 xl:mt-20">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="mb-2 text-lg font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="p-3 mb-5 w-full xl:w-1/2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 text-lg font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full xl:w-1/2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <button className="p-3 mt-2 rounded-md bg-zinc-800 hover:opacity-90 text-white px-5">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="xl:w-1/2 ">
          <img
            src={player}
            alt=""
            className="hidden xl:block w-full object-cover bg-top h-[800px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
