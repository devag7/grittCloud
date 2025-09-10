import React from "react";
import { assets } from "../assets/assets";

const Farmer = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen ">
      {/* Wrapper */}
      <div className="flex gap-4 w-full max-w-7xl px-4">
        
        {/* Left Image */}
        <div className="flex-1 overflow-hidden rounded-[3rem]">
          <img
            src={assets.farmer}
            alt="Farmer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Section */}
        <div className="flex-1 overflow-hidden rounded-[3rem] relative flex flex-col justify-center items-center text-white">
          {/* Background Image */}
          <img
            src={assets.farmer}
            alt="Farmer"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl md:text-7xl font-serif mb-10">
              <span className="italic">Comet</span> is here
            </h1>
            <button className="flex items-center gap-3 bg-white text-black font-medium px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition shadow-lg mx-auto">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                ⬇
              </span>
              Get Comet
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 overflow-hidden rounded-[3rem]">
          <img
            src={assets.farmer}
            alt="Farmer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Farmer;
