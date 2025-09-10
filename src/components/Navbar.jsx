import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 bg-transparent  flex items-center px-12 py-4 ">
      <div className="flex w-full justify-between items-center">
        <div>
          <img src={assets.logo} alt="logo" />
        </div>
        <div className="flex gap-12">
          <div className="flex gap-2  hover:scale-110 bg-[#FBFAF4]  rounded-full px-5 py-3 trastion-all duration-300 items-center cursor-pointer">
            <img className="size-3" src={assets.arrow} alt="arrow" />
            <p>Download</p>
          </div>
          <div className="rounded-full px-5 py-3 bg-[#FBFAF4] hover:scale-110 cursor-pointer trastion-all duration-300">
            <img src={assets.perLogo} alt="personal logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
