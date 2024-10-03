import { Link } from "react-router-dom"; // Import Link from react-router-dom
import builderGloves from "../../assets/builderGloves.png";
import builderBGloves from "../../assets/builderBGloves.png";
import builderBat from "../../assets/builderBat.png";

const items = [
  {
    image: builderGloves,
    title: "Baseball Gloves",
    link: "/builder/custom-gloves", // Add link for navigation
  },
  {
    image: builderBat,
    title: "Baseball Bats",
    link: "/builder/custom-bats", // Add link for navigation
  },
  {
    image: builderGloves,
    title: "Baseball Gloves",
    link: "/builder/custom-gloves", // Add link for navigation
  },
  {
    image: builderBGloves,
    title: "Batting Gloves",
    link: "/builder/custom-batting-gloves", // Add link for navigation
  },
];

const CustomBuilder = () => {
  return (
    <div className="py-10">
      <p className="text-6xl pb-10 text-zinc-800 text-center font-bold">
        Custom Builder
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 container mx-auto gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-md text-zinc-800 p-5 flex flex-col justify-between h-full" // Add flex properties
          >
            <img src={item.image} alt={item.title} className="mx-auto" />
            <p className="text-3xl">{item.title}</p>
            <Link
              to={item.link}
              className="bg-[#fd9b4b] text-center text-white text-2xl py-2 rounded-md mt-5 hover:opacity-85 cursor-pointer"
            >
              Select
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomBuilder;
