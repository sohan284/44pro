import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.svg";
import { Divider } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import custom from "../assets/custom.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setCartCount } from "../store/features/cartSlice";
function Navigation() {
  const dispatch = useDispatch();

  const cartCount = useSelector((state) => state.cart.cartCount);
  React.useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];

    const cartCount = parsedCartItems.length;
    dispatch(setCartCount(cartCount));
  }, []);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [showCustomCrafted, setShowCustomCrafted] = React.useState(false);

  const toggleCustomCrafted = () => {
    setShowCustomCrafted((prev) => !prev);
  };
  return (
    <div className="">
      <div className="bg-zinc-200 py-3 text-center flex justify-center font-medium text-xl">
        <p>FREE USA SHIPPING EVERYDAY </p>{" "}
        <p
          onClick={() => handleNavigate("/builder")}
          className="ml-3 font-thin text-lg cursor-pointer border hover:opacity-85 thin-underline"
        >
          Start Your Custom
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between py-5">
          <Typography
            variant="h6"
            component="div"
            sx={
              {
                //   flexGrow: 1,
                //   display: { xs: "none", sm: "block" },
              }
            }
          >
            <img
              onClick={() => handleNavigate("/")}
              className="h-10 px-5"
              src={logo}
            />
          </Typography>
          <div className="w-full ml-10 hidden  xl:flex text-[18px]">
            <div className="flex mt-2">
              <CustomDropdown />
              <p className="text-black m-2 mx-4 cursor-pointer">
                Stock Products
              </p>
              <p className="text-black m-2 mx-4 cursor-pointer">
                Trending Designs
              </p>
              <p className="text-black m-2 mx-4 cursor-pointer">Team 44</p>
              <p className="text-black m-2 mx-4 cursor-pointer">Help Center</p>
            </div>
            <p
              onClick={() => handleNavigate("/builder")}
              className="m-2 p-2 px-4 flex bg-zinc-800 hover:bg-zinc-600 text-white cursor-pointer rounded-md text-[15px]"
            >
              <img className="w-5 h-5" src={custom} alt="" /> Custom Builder
            </p>
          </div>

          <div className="flex">
            <div className="relative right-0">
              <IoCart
                onClick={() => handleNavigate("/cart")}
                style={{
                  fontSize: "32px",
                  margin: "8px",
                  marginRight: "12px",
                  color: "#333333",
                }}
              />
              <p className="bg-blue-500 rounded-full text-white text-center absolute left-7 text-sm px-2  py-0.5 top-0">
                {cartCount}
              </p>
            </div>
            <p className="text-black text-[18px] m-2 cursor-pointer xl:block hidden">
              Login/Register
            </p>

            <div className=" xl:hidden">
              <IconButton
                color="black"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                {mobileOpen ? (
                  <CloseIcon style={{ fontSize: "32px" }} />
                ) : (
                  <MenuIcon style={{ fontSize: "32px" }} />
                )}
              </IconButton>
            </div>
          </div>
        </div>
        {mobileOpen && (
          <div className="w-full xl:hidden text-[15px] flex-col">
            <div className="flex ml-5 flex-col mt-2">
              <p
                onClick={toggleCustomCrafted}
                className="text-black m-2 cursor-pointer flex hover:opacity-80"
              >
                Custom Crafted{" "}
                {showCustomCrafted ? (
                  <IoIosArrowDown
                    style={{ marginTop: "3px", marginLeft: "3px" }}
                  />
                ) : (
                  <IoIosArrowForward
                    style={{ marginTop: "3px", marginLeft: "3px" }}
                  />
                )}
              </p>
              {showCustomCrafted && (
                <ul className="ml-8 list-disc cursor-pointer">
                  <li
                    className="hover:opacity-80"
                    onClick={() => handleNavigate("/builder/custom-gloves")}
                  >
                    Custom Gloves
                  </li>
                  <li className="hover:opacity-80">Custom Bats</li>
                  <li className="hover:opacity-80">Custom Batting Gloves</li>
                  <li className="hover:opacity-80">Custom Guards</li>
                </ul>
              )}
              <p className="text-black m-2 cursor-pointer hover:opacity-80">
                Stock Products
              </p>
              <p className="text-black m-2 cursor-pointer hover:opacity-80">
                Trending Designs
              </p>
              <p className="text-black m-2 cursor-pointer hover:opacity-80">
                Team 44
              </p>
              <p className="text-black m-2 cursor-pointer hover:opacity-80">
                Help Center
              </p>
            </div>
            <p
              onClick={() => handleNavigate("/builder")}
              className="m-2 p-2 w-[150px] ml-5 px-4 mb-5 bg-zinc-800 hover:bg-zinc-600 flex text-nowrap text-white cursor-pointer rounded-md text-[15px]"
            >
              <img className="w-5 h-5 mr-1" src={custom} alt="" /> Custom
              Builder
            </p>
            <Divider />
            <p className="text-black m-2 ml-5 pb-5 pt-2 cursor-pointer hover:opacity-80">
              Login/Register
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
