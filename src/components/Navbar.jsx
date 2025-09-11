import React from "react";
import { assets } from "../assets/assets";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-full fixed z-10 top-0 left-0 bg-transparent  flex items-center px-12 py-4 ">
      <div className="flex w-full justify-between items-center">
        <div>
          <img src={assets.logo} alt="logo" />
        </div>
        <div className="flex gap-12">
          <Button textclass="text-black" txtcolor1="white" text="Download" color="black" bgcolor="[#FBFAF4]"  className="px-3 py-2" />
          <div className="rounded-full px-5 py-3 bg-[#FBFAF4] hover:scale-110 cursor-pointer trastion-all duration-300">
            <img src={assets.perLogo} alt="personal logo" />
          </div>  
        </div>
      </div>
    </div>
  );
};  

export default Navbar;
