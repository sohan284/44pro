import { useState } from "react";
import GlovesSVG from "../components/BuilderPage/GlovesSVG";
import Footer from "../shared/Footer";
import NavBar from "../shared/navBar";

const CustomGloves = () => {
  const [color, setColor] = useState();

  const handleColor = (value) => {
    setColor(value);
  };

  return (
    <div>
      <NavBar />
      <div className="text-center grid grid-cols-2">
        <div>
          <GlovesSVG color={color} />
        </div>
        <div className="grid grid-cols-5 gap-5">
          <div
            onClick={() => handleColor("#000000")}
            className="flex flex-col text-center"
          >
            <div className=" h-12 bg-black shadow-lg rounded-lg"></div>
            Black
          </div>
          <div
            onClick={() => handleColor("#888888")}
            className="flex flex-col text-center"
          >
            <div className=" h-12 bg-gray-500 shadow-lg rounded-lg"></div>
            Gray
          </div>
          <div
            onClick={() => handleColor("#ffffff")}
            className="flex flex-col text-center"
          >
            <div className=" h-12 bg-white shadow-lg rounded-lg"></div>
            White
          </div>
          <div
            onClick={() => handleColor("#000000")}
            className="flex flex-col text-center"
          >
            <div className=" h-12 bg-[wheat] shadow-lg rounded-lg"></div>
            Wheat
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[yellow] shadow-lg rounded-lg"></div>
            Yellow
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-orange-500 shadow-lg rounded-lg"></div>
            Orange
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[tomato] shadow-lg rounded-lg"></div>
            Tomato
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[chocolate] shadow-lg rounded-lg"></div>
            Chocolate
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[brown] shadow-lg rounded-lg"></div>
            Brown
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[pink] shadow-lg rounded-lg"></div>
            Pink
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[red] shadow-lg rounded-lg"></div>
            Red
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[maroon] shadow-lg rounded-lg"></div>
            Maroon
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[purple] shadow-lg rounded-lg"></div>
            Purple
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[blue] shadow-lg rounded-lg"></div>
            Blue
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[darkblue] shadow-lg rounded-lg"></div>
            Darkblue
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[skyblue] shadow-lg rounded-lg"></div>
            Skyblue
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[#33d7ff] shadow-lg rounded-lg"></div>
            Mint
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[green] shadow-lg rounded-lg"></div>
            Green
          </div>

          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[darkgreen] shadow-lg rounded-lg"></div>
            Darkgreen
          </div>
          <div className="flex flex-col text-center">
            <div className=" h-12 bg-[lightgreen] shadow-lg rounded-lg"></div>
            Lightgreen
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomGloves;
