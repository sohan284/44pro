import PropTypes from "prop-types";

const CustomColors = ({ handleColor }) => {
  const colors = [
    { name: "Black", value: "black" },
    { name: "Gray", value: "#888888" },
    { name: "White", value: "#ffffff" },
    { name: "Wheat", value: "wheat" },
    { name: "Yellow", value: "yellow" },
    { name: "Orange", value: "orange" },
    { name: "Tomato", value: "tomato" },
    { name: "Chocolate", value: "chocolate" },
    { name: "Brown", value: "brown" },
    { name: "Pink", value: "pink" },
    { name: "Red", value: "red" },
    { name: "Maroon", value: "maroon" },
    { name: "Purple", value: "purple" },
    { name: "Blue", value: "blue" },
    { name: "Darkblue", value: "darkblue" },
    { name: "Skyblue", value: "skyblue" },
    { name: "Mint", value: "#33d7ff" },
    { name: "Green", value: "green" },
    { name: "Darkgreen", value: "darkgreen" },
    { name: "Lightgreen", value: "lightgreen" },
  ];
  return (
    <div className="grid grid-cols-5 gap-5 px-10 mb-10 pb-5 shadow-lg">
      {colors.map(({ name, value }) => (
        <div
          key={name}
          onClick={() => handleColor(value)}
          className="flex flex-col text-center cursor-pointer"
        >
          <div
            style={{ backgroundColor: value }}
            className={`h-12 shadow-lg rounded-lg`}
          ></div>
          {name}
        </div>
      ))}
    </div>
  );
};
CustomColors.propTypes = {
  handleColor: PropTypes.any,
};
export default CustomColors;
