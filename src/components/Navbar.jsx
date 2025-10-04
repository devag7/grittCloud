import React, { useState } from "react";
import { assets } from "../assets/assets";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed z-50 top-0 left-0 bg-transparent flex items-center px-4 md:px-12 py-4">
      <div className="flex w-full justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src={assets.grittLogo}
            alt="logo"
            className="w-28 sm:w-12 h-12 md:w-auto "
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center">
          <a target="_blank" href="https://github.com/grittcloud">
            <button className="flex gap-4 px-3 py-2 justify-between hover:scale-105 bg-[#F6F5EE] rounded-full transition-all duration-300 items-center cursor-pointer">
              <div className="bg-white rounded-full text-white size-10 flex justify-center items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
              </div>
              <span className="">GitHub</span>
            </button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {/* <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none bg-[#FBFAF4] rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-105"
          >
            {isOpen ? (
              <i className="ri-close-line text-xl"></i>
            ) : (
              <i className="ri-menu-line text-xl"></i>
            )}
          </button> */}
           <a target="_blank" href="https://github.com/grittcloud">
          <button className="flex gap-2 px-2 py-1 justify-between hover:scale-105 bg-[#F6F5EE] rounded-full transition-all duration-300 items-center cursor-pointer">
            <div className="bg-white rounded-full text-white size-10 flex justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="size-6"
                alt=""
              />
            </div>
            <span className="">GitHub</span>
          </button>
          </a>
        </div>
      </div>

      {/* Enhanced Mobile Dropdown */}
      {/* {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 flex flex-col items-center gap-6 py-8 md:hidden animate-in slide-in-from-top duration-300">
         
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
