import builderGloves from "../../assets/builderGloves.png";
import builderBGloves from "../../assets/builderBGloves.png";
import builderBat from "../../assets/builderBat.png";
import GlovesSVG from "./GlovesSVG";
const CustomBuilder = () => {
  return (
    <div className="py-10">
      <p className="text-6xl pb-10 text-zinc-800 text-center font-bold">
        Custom Builder
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 container mx-auto gap-5">
        <div className="bg-white rounded shadow-md text-3xl text-zinc-800 p-5">
          <img src={builderGloves} alt="" />
          <p>Baseball Gloves</p>
          <div className="bg-[#fd9b4b] text-center text-white text-2xl py-2 rounded-md mt-5 hover:opacity-85 cursor-pointer">
            Select
          </div>
        </div>
        <div className="bg-white rounded shadow-md text-3xl text-zinc-800 p-5">
          <img src={builderBat} alt="" />
          <p>Baseball Bats</p>
          <div className="bg-[#fd9b4b] text-center text-white text-2xl py-2 rounded-md mt-5 hover:opacity-85 cursor-pointer">
            Select
          </div>
        </div>
        <div className="bg-white rounded shadow-md text-3xl text-zinc-800 p-5">
          <img src={builderGloves} alt="" />
          <p>Baseball Gloves</p>
          <div className="bg-[#fd9b4b] text-center text-white text-2xl py-2 rounded-md mt-5 hover:opacity-85 cursor-pointer">
            Select
          </div>
        </div>
        <div className="bg-white rounded shadow-md text-3xl text-zinc-800 p-5">
          <img src={builderBGloves} alt="" className="w-[75%]" />
          <p>Batting Gloves</p>
          <div className="bg-[#fd9b4b] text-center text-white text-2xl py-2 rounded-md mt-5 hover:opacity-85 cursor-pointer">
            Select
          </div>
        </div>
      </div>
      <GlovesSVG />
    </div>
  );
};

export default CustomBuilder;
