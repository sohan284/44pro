import PropTypes from "prop-types";

const CustomColors = ({ handleColor }) => {
  const colors = [
    { name: "Black", value: "black" },
    { name: "Gray", value: "gray" },
    { name: "White", value: "white" },
    { name: "Wheat", value: "wheat" },
    { name: "Khaki", value: "Khaki" },
    { name: "Gold", value: "Gold" },
    { name: "Yellow", value: "yellow" },
    { name: "Orange", value: "orange" },
    { name: "Tomato", value: "tomato" },
    { name: "Chocolate", value: "chocolate" },
    { name: "Brown", value: "brown" },
    { name: "Pink", value: "pink" },
    { name: "Red", value: "red" },
    { name: "Darkred", value: "darkred" },
    { name: "Maroon", value: "maroon" },
    { name: "Purple", value: "purple" },
    { name: "Blue", value: "blue" },
    { name: "Darkblue", value: "darkblue" },
    { name: "MidnightBlue", value: "MidnightBlue" },
    { name: "Lightgreen", value: "lightgreen" },
    { name: "Skyblue", value: "skyblue" },
    { name: "Aqua", value: "aqua" },
    { name: "DarkTurquoise", value: "DarkTurquoise" },
    { name: "Teal", value: "Teal" },
    { name: "DarkSlateGray", value: "DarkSlateGray" },
    { name: "Olive", value: "Olive" },
  ];
  return (
    <div className="grid bg-white grid-cols-5 gap-5 px-10 pt-5 pb-5 shadow-lg">
      {colors.map(({ name, value }) => (
        <div
          key={name}
          onClick={() => handleColor(value)}
          className="flex flex-col text-center overflow-hidden cursor-pointer"
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
