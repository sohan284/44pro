import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.svg";
import { Divider } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <div className="container mx-auto">
      {/* <CssBaseline /> */}
      <div style={{ backgroundColor: "white" }}>
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
            <img className="ml-10" src={logo} />
          </Typography>
          <div className="w-full ml-10 hidden lg:flex text-[15px]">
            <div className="flex mt-2">
              <CustomDropdown />
              <p className="text-black m-2 cursor-pointer">Stock Products</p>
              <p className="text-black m-2 cursor-pointer">Trending Designs</p>
              <p className="text-black m-2 cursor-pointer">Team 44</p>
              <p className="text-black m-2 cursor-pointer">Help Center</p>
            </div>
            <p className="m-2 p-2 px-4 bg-zinc-800 hover:bg-zinc-600 text-white cursor-pointer rounded-md text-[15px]">
              Custom Builder
            </p>
          </div>

          <div className="flex">
            <p className="text-black m-2 cursor-pointer">Login/Register</p>

            <IconButton
              color="black"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>
        {mobileOpen && (
          <div className="w-full  lg:hidden text-[15px] flex-col">
            <div className="flex ml-5 flex-col mt-2">
              <p className="text-black m-2 cursor-pointer">Custom Crafted</p>
              <p className="text-black m-2 cursor-pointer">Stock Products</p>
              <p className="text-black m-2 cursor-pointer">Trending Designs</p>
              <p className="text-black m-2 cursor-pointer">Team 44</p>
              <p className="text-black m-2 cursor-pointer">Help Center</p>
            </div>
            <p className="m-2 p-2 w-[150px] ml-5 px-4 mb-5 bg-zinc-800 hover:bg-zinc-600 text-white cursor-pointer rounded-md text-[15px]">
              Custom Builder
            </p>
            <Divider />
            <p className="text-black m-2 ml-5 pb-5 pt-2 cursor-pointer">
              Login/Register
            </p>
          </div>
        )}
      </div>
      <nav></nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </div>
  );
}

export default NavBar;
