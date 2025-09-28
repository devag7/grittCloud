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
            className="w-28 sm:w-12 h-12 md:w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center">
          <Button
            textclass="text-black font-FK-Grotesk"
            txtcolor1="white"
            text="Download"
            color="black"
            bgcolor="[#FBFAF4]"
            className="px-3 py-2"
          />
          <div className="rounded-full px-4 py-3 bg-[#FBFAF4] hover:scale-110 cursor-pointer transition-all duration-300">
            <img
              src="https://avatars.githubusercontent.com/u/166261414?s=200&v=4"
              className="w-6 h-8 object-cover"
              alt="personal logo"
            />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none bg-[#FBFAF4] rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-105"
          >
            {isOpen ? (
              <i className="ri-close-line text-xl"></i>
            ) : (
              <i className="ri-menu-line text-xl"></i>
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 flex flex-col items-center gap-6 py-8 md:hidden animate-in slide-in-from-top duration-300">
          {/* Download Button */}
          <div className="w-full max-w-xs">
            <Button
              textclass="text-black font-FK-Grotesk font-medium"
              txtcolor1="white"
              text="Download"
              color="black"
              bgcolor="#FBFAF4"
              className="px-6 py-3 w-full rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm"
            />
          </div>

          {/* Optional: Add more menu items if needed */}
          {/* <div className="w-full border-t border-gray-100 pt-6 mt-2">
            <a href="#about" className="block text-center text-gray-700 font-FK-Grotesk py-3 hover:text-black transition-colors">
              About
            </a>
            <a href="#contact" className="block text-center text-gray-700 font-FK-Grotesk py-3 hover:text-black transition-colors">
              Contact
            </a>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
