import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";
import GlovesSVG from "../components/BuilderPage/CustomGloves/GlovesSVG";
import custom from "../assets/custom.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGloveColors } from "../store/features/colorSlice";
import players from "../data/players.json";
const Team44Page = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCustomize = (route, colors) => {
    dispatch(setGloveColors(colors));
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
            <p className="text-center text-xl font-semibold my-3">
              {player.name}
            </p>
            <div
              onClick={() =>
                handleCustomize("/builder/custom-gloves", player.gloves)
              }
              className={`flex px-8 w-[80%] mx-auto cursor-pointer justify-center text-white bg-zinc-800 py-3 hover:opacity-90  rounded-md`}
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
