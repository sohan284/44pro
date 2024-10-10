import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";
import GlovesSVG from "../components/BuilderPage/CustomGloves/GlovesSVG";
import custom from "../assets/custom.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGloveColors } from "../store/features/gloveSlice";
const Team44Page = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const players = [
    {
      name: "Joe Musgrove",
      gloves: {
        lather1: "chocolate",
        lather2: "chocolate",
        lather3: "chocolate",
        lather4: "chocolate",
        lather5: "chocolate",
        lather6: "chocolate",
        lather7: "chocolate",
        lather8: "chocolate",
        web: "chocolate",
        wrist: "chocolate",
        palm: "chocolate",
        binding: "yellow",
        logo: "yellow",
        laces: "yellow",
      },
    },
    {
      name: "Yoan Moncada",
      gloves: {
        lather1: "black",
        lather2: "black",
        lather3: "black",
        lather4: "black",
        lather5: "black",
        lather6: "black",
        lather7: "black",
        lather8: "black",
        web: "wheat",
        wrist: "wheat",
        palm: "wheat",
        binding: "white",
        logo: "red",
        laces: "red",
      },
    },
    {
      name: "Freddy Peralta",
      gloves: {
        lather1: "wheat",
        lather2: "wheat",
        lather3: "wheat",
        lather4: "wheat",
        lather5: "wheat",
        lather6: "wheat",
        lather7: "wheat",
        lather8: "wheat",
        web: "wheat",
        wrist: "wheat",
        palm: "wheat",
        binding: "darkblue",
        logo: "darkblue",
        laces: "darkblue",
      },
    },
    {
      name: "Genesis Cabrera",
      gloves: {
        lather1: "DarkTurquoise",
        lather2: "DarkTurquoise",
        lather3: "DarkTurquoise",
        lather4: "DarkTurquoise",
        lather5: "DarkTurquoise",
        lather6: "DarkTurquoise",
        lather7: "DarkTurquoise",
        lather8: "DarkTurquoise",
        web: "DarkTurquoise",
        wrist: "DarkTurquoise",
        palm: "DarkTurquoise",
        binding: "darkred",
        logo: "darkred",
        laces: "darkred",
      },
    },
    {
      name: "Diego Castillo",
      gloves: {
        lather1: "DarkTurquoise",
        lather2: "DarkTurquoise",
        lather3: "DarkTurquoise",
        lather4: "DarkTurquoise",
        lather5: "DarkTurquoise",
        lather6: "DarkTurquoise",
        lather7: "DarkTurquoise",
        lather8: "DarkTurquoise",
        web: "DarkTurquoise",
        wrist: "DarkTurquoise",
        palm: "DarkTurquoise",
        binding: "teal",
        logo: "DarkTurquoise",
        laces: "teal",
      },
    },
    {
      name: "Emmanuel Clase",
      gloves: {
        lather1: "black",
        lather2: "black",
        lather3: "black",
        lather4: "black",
        lather5: "black",
        lather6: "black",
        lather7: "black",
        lather8: "black",
        web: "black",
        wrist: "black",
        palm: "darkred",
        binding: "darkred",
        logo: "darkred",
        laces: "darkred",
      },
    },
  ];
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
