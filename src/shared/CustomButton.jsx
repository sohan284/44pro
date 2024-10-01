import custom from "../assets/custom.png";
function CustomButton({ title, bgColor, txColor, link }) {
  return (
    <div>
      <div
        className={`flex justify-center ${bgColor} ${txColor} py-3 hover:opacity-90  rounded-md`}
      >
        <img className="w-5 h-5 mr-1 mt-1" src={custom} alt="" />
        <p className="text-center font-medium">{title}</p>
      </div>
    </div>
  );
}

export default CustomButton;
