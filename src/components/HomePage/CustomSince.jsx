import since1 from "../../assets/since1.jpg";
import since2 from "../../assets/since2.jpg";
import redLine from "../../assets/redLine.svg";
function CustomSince() {
  return (
    <div className="container mx-auto mt-20  text-center mb-20">
      <div className="flex flex-col">
        <p>Always Custom Since 2011</p>
        <p className="text-5xl my-3 flex-wrap font-bold flex justify-center">
          Over{" "}
          <div className="flex mx-5 flex-col justify-center">
            <p> 500,000 </p>
            <img className="w-[200px]" src={redLine} alt="" />
          </div>
          Players Choose 44
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="hover:underline ">
            <img src={since1} className="lg:h-[88%] hover:opacity-90" alt="" />
            <p className="text-start mt-3 text-[red] font-medium ">
              End Of Season Sale
            </p>
            <p className="text-start">
              Save 40% off your new custom bat while supplies last
            </p>
          </div>
          <div className="cursor-pointer hover:underline ">
            <img src={since2} alt="" className="hover:opacity-90" />
            <p className="text-start mt-3 text-[red] font-medium  ">
              Need It Fast?
            </p>
            <p className="text-start ">
              {" "}
              Get Speed Custom Infield or Outfield models in 2 weeks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomSince;
