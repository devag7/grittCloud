import React from "react";
import { assets } from "../assets/assets";
import Button from "./Button";

const Farmer = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-white">
      {/* Wrapper */}
      <div className="flex w-full max-w-[1600px] px-6 gap-6">
        
        {/* Left Image */}
        <div className="flex-[0.8] relative overflow-hidden rounded-[4rem]">
          <img
            src={assets.farmer}
            alt="Farmer"
            className="w-full h-full object-cover"
          />
          {/* Glow overlay on the inside edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>

        {/* Middle Big Image */}
        <div className="flex-[1.5] relative overflow-hidden rounded-[4rem] flex flex-col justify-center items-center text-white">
          {/* Background Image */}
          <img
            src={assets.farmer}
            alt="Farmer"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl md:text-7xl mb-10 font-ultralight">
              C<span className="font-ultralight-italic">o</span>met is here
            </h1>
            <Button
              textclass="text-black font-bold"
              className="px-8 py-4 rounded-full shadow-lg font-FK-Grotesk"
              text="Get Comet"
              bgcolor="white"
              color="black"
              txtcolor1="white"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-[0.8] relative overflow-hidden rounded-[4rem]">
          <img
            src={assets.farmer}
            alt="Farmer"
            className="w-full h-full object-cover"
          />
          {/* Glow overlay on the inside edge */}
          <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Farmer;
