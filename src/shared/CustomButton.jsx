import PropTypes from "prop-types";
import custom from "../assets/custom.png";
function CustomButton({ title, bgColor, txColor, handleClick }) {
  return (
    <div onClick={handleClick}>
      <div
        className={`flex px-8 cursor-pointer justify-center ${bgColor} ${txColor} py-3 hover:opacity-90  rounded-md`}
      >
        <img className="w-5 h-5 mr-1 mt-1" src={custom} alt="" />
        <p className="text-center font-medium">{title}</p>
      </div>
    </div>
  );
}
CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  txColor: PropTypes.string.isRequired,
  handleClick: PropTypes.string.isRequired,
};

export default CustomButton;
