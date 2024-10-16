import { useNavigate } from "react-router-dom";
import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";
import GlovesSVG from "../components/BuilderPage/CustomGloves/GlovesSVG";
import BatsSVG from "../components/BuilderPage/CustomBats/BatsSVG";

const CartPage = () => {
  const navigate = useNavigate();
  const cartItems = localStorage.getItem("cartItems");
  const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];

  const totalPrice = parsedCartItems.reduce(
    (total, item) => total + item.price,
    0
  );
  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="home-container ">
      <Navigation />
      <div className="bg-zinc-100">
        <div>
          <h1 className="text-6xl font-bold text-center text-zinc-900 pt-16">
            Cart
          </h1>
          {parsedCartItems.length === 0 ? (
            <div className="flex justify-center mt-10 pb-20">
              <p
                onClick={() => navigate("/builder/custom-gloves")}
                className="bg-blue-500 cursor-pointer hover:opacity-85 font-normal text-white px-5 py-3 rounded"
              >
                Build a Custom Glove
              </p>{" "}
              <p className="p-3 ">or </p>
              <p className="bg-gray-300 text-black px-5 py-3 rounded hover:opacity-85">
                View All Products
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-3 px-5">
              <div className="lg:col-span-2 col-span-3">
                {parsedCartItems?.map((item, i) => (
                  <div key={i}>
                    {item.title === "Custom Gloves" ? (
                      <div className="py-10 border-b" key={i}>
                        <div className="grid grid-cols-3 mb-10 border">
                          <div className="w-[50%]">
                            <GlovesSVG color={item.colors} />
                          </div>
                          <h1 className="text-xl font-medium my-10">
                            {item.title}
                          </h1>
                          <h1 className="text-xl text-[tomato] font-medium my-10">
                            ${item.price}
                          </h1>
                        </div>
                        <div className="grid lg:grid-cols-3 grid-cols-2 gap-1">
                          <p>
                            <span className="font-medium">Gloves Size : </span>
                            {item?.size}
                          </p>
                          <p>
                            <span className="font-medium">Personalize : </span>
                            {item?.personalize}
                          </p>
                          <p>
                            <span className="font-medium">Lather 1 : </span>
                            {item?.colors?.lather1}
                          </p>
                          <p>
                            <span className="font-medium">Lather 2 : </span>
                            {item?.colors?.lather2}
                          </p>
                          <p>
                            <span className="font-medium">Lather 3 : </span>
                            {item?.colors?.lather3}
                          </p>
                          <p>
                            <span className="font-medium">Lather 4 : </span>
                            {item?.colors?.lather4}
                          </p>
                          <p>
                            <span className="font-medium">Lather 5 : </span>
                            {item?.colors?.lather5}
                          </p>
                          <p>
                            <span className="font-medium">Lather 6 : </span>
                            {item?.colors?.lather6}
                          </p>
                          <p>
                            <span className="font-medium">Lather 7 : </span>
                            {item?.colors?.lather7}
                          </p>
                          <p>
                            <span className="font-medium">Lather 8 : </span>
                            {item?.colors?.lather8}
                          </p>
                          <p>
                            <span className="font-medium">Web : </span>
                            {item?.colors?.web}
                          </p>
                          <p>
                            <span className="font-medium">Palm: </span>
                            {item?.colors?.palm}
                          </p>
                          <p>
                            <span className="font-medium">Wrist : </span>
                            {item?.colors?.wrist}
                          </p>
                          <p>
                            <span className="font-medium">Binding : </span>
                            {item?.colors?.binding}
                          </p>
                          <p>
                            <span className="font-medium">Logo : </span>
                            {item?.colors?.logo}
                          </p>
                          <p>
                            <span className="font-medium">Laces : </span>
                            {item?.colors?.laces}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="py-10 border-b" key={i}>
                        <div className="grid grid-cols-3 mb-10 border">
                          <div className="w-[50%]">
                            <BatsSVG color={item.colors} />
                          </div>
                          <h1 className="text-xl font-medium my-10">
                            {item.title}
                          </h1>
                          <h1 className="text-xl text-[tomato] font-medium my-10">
                            ${item.price}
                          </h1>
                        </div>
                        <div className="grid lg:grid-cols-3 grid-cols-2 gap-1">
                          <p>
                            <span className="font-medium">Bats Size : </span>
                            {item?.size}
                          </p>
                          <p>
                            <span className="font-medium">Personalize : </span>
                            {item?.personalize}
                          </p>
                          <p>
                            <span className="font-medium">Base Color : </span>
                            {item?.colors?.base}
                          </p>
                          <p>
                            <span className="font-medium">
                              Model Graphic :{" "}
                            </span>
                            {item?.colors?.modelGraphic}
                          </p>
                          <p>
                            <span className="font-medium">
                              Handle Graphic:{" "}
                            </span>
                            {item?.colors?.handleGraphic}
                          </p>
                          <p>
                            <span className="font-medium">Grip Color : </span>
                            {item?.colors?.grip}
                          </p>
                          <p>
                            <span className="font-medium">
                              Grip Up Color :{" "}
                            </span>
                            {item?.colors?.gripUp}
                          </p>
                          <p>
                            <span className="font-medium">Brand Color : </span>
                            {item?.colors?.brand}
                          </p>
                          <p>
                            <span className="font-medium">Logo : </span>
                            {item?.colors?.logo}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="col-span-1 my-10">
                <div className="bg-white shadow-xl p-5 lg:mx-10 w-[350px]">
                  <h2 className="text-xl font-semibold flex justify-between">
                    Total <span>${totalPrice.toFixed(2)}</span>
                  </h2>
                  <p className="text-zinc-500 font-thin text-sm my-5">
                    Final shipping and taxes will calculated at checkout
                  </p>
                  <div
                    onClick={() => handleNavigate("/checkout")}
                    className="text-center bg-blue-500 rounded text-white py-3 cursor-pointer hover:opacity-85"
                  >
                    {" "}
                    Proceed to Checkout{" "}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
