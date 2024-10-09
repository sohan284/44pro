import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";
import GlovesSVG from "../components/BuilderPage/CustomGloves/GlovesSVG";
import custom from "../assets/custom.png";
import { useNavigate } from "react-router-dom";
const Team44Page = () => {
  const navigate = useNavigate();
  const players = [
    {
      name: "Joe Musgrove",
      gloves: {
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
      },
    },
    {
      name: "Yoan Moncada",
      gloves: {
        lather1: "black",
        lather2: "black",
        lather3: "black",
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
      },
    },
  ];
  const handleNavigate = (route) => {
    navigate(route);
  };
  return (
    <div className=" bg-zinc-100">
      <Navigation />
      <h1 className="text-6xl font-bold text-center text-zinc-900 pt-16">
        Team 44
      </h1>

      <div className=" container mb-20 mx-auto gap-5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 rounded my-10">
        {players?.map((player) => (
          <div key={player?.id} className="">
            <div>
              {" "}
              <GlovesSVG color={player.gloves} />
            </div>
            <p>{player.name}</p>
            <div
              onClick={() => handleNavigate("/builder/custom-gloves")}
              className={`flex px-8 justify-center text-white bg-zinc-800 py-3 hover:opacity-90  rounded-md`}
            >
              <img className="w-5 h-5 mr-1 mt-0.5" src={custom} alt="" />
              <p className="text-center font-medium">Customize</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Team44Page;
