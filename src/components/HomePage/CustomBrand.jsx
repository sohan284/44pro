import treatmentBg from "../../assets/treatmentBg.jpg";
import brandbg from "../../assets/brandBg.jpg";
import CustomButton from "../../shared/CustomButton";
function CustomBrand() {
  return (
    <div>
      <div
        className="container mx-auto mt-10 rounded-md"
        style={{
          backgroundImage: `url(${brandbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "20px",
        }}
      >
        <div className="bg-black/85 lg:w-2/6 text-white p-10 m-10 rounded-md">
          <h3 className="text-lg font-bold text-yellow-600">
            44 Pro #1 Custom Brand
          </h3>
          <h1 className="text-3xl font-bold mb-5">Custom Is More Than Color</h1>
          <p className="text-lg mb-8">
            High performance gear personalized to match your style of play.
          </p>
          <CustomButton
            title="Build Your Custom 44"
            bgColor="bg-zinc-200"
            txColor="text-black"
          />
        </div>
      </div>
      <div
        className="container flex justify-end mx-auto mt-10 rounded-md"
        style={{
          backgroundImage: `url(${treatmentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "20px",
        }}
      >
        <div className="bg-black/85 lg:w-2/6 text-white p-10 m-10 rounded-md">
          <h3 className="text-lg font-bold text-yellow-600">
            Get The Pro Treatment
          </h3>
          <h1 className="text-3xl font-bold mb-5">
            Highest Quality Materials in the Game
          </h1>
          <p className="text-lg mb-8">
            Crafted with the same pro grade Japanese Kip leather that pro
            players demand, your glove is meticulously handcrafted side by side
            with some of the games most elite players like Justin Turner, Nestor
            Cortes, Joe Musgrove, and hundreds more!
          </p>
          <CustomButton
            title="Build Your Custom 44"
            bgColor="bg-zinc-200"
            txColor="text-black"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomBrand;
