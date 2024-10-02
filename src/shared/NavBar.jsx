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
function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="bg-zinc-200 py-3 text-center font-medium text-xl">
        <p>FREE USA SHIPPING EVERYDAY</p>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between my-5">
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
              className="h-12"
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
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </div>
          </div>
        </div>
        {mobileOpen && (
          <div className="w-full xl:hidden text-[15px] flex-col">
            <div className="flex ml-5 flex-col mt-2">
              <p className="text-black m-2 cursor-pointer">Custom Crafted</p>
              <p className="text-black m-2 cursor-pointer">Stock Products</p>
              <p className="text-black m-2 cursor-pointer">Trending Designs</p>
              <p className="text-black m-2 cursor-pointer">Team 44</p>
              <p className="text-black m-2 cursor-pointer">Help Center</p>
            </div>
            <p
              onClick={() => handleNavigate("/builder")}
              className="m-2 p-2 w-[150px] ml-5 px-4 mb-5 bg-zinc-800 hover:bg-zinc-600 text-white cursor-pointer rounded-md text-[15px]"
            >
              Custom Builder
            </p>
            <Divider />
            <p className="text-black m-2 ml-5 pb-5 pt-2 cursor-pointer">
              Login/Register
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
