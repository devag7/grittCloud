// src/components/Content2.jsx
import React from "react";
import { assets } from "../assets/assets";
import Button from "./Button";

const Content2 = () => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center gap-6 px-12 py-44">
      <div className="flex flex-col items-center gap-6 text-center">
        <h3 className="text-4xl w-[60%] font-FK-Grotesk">
          Empowering enterprises across every sector to define their intelligent future,
        </h3>
        <p className="text-2xl text-black font-ultralight mb-4">
          by turning complexity into scalable, strategic 
          <span className="font-ultralight-italic"> A</span>
          I assets.
        </p>
        
        <p className="text-lg text-black/70 font-FK-Grotesk">
          Our portfolio includes successful integrations in FinTech, Education Platforms, and E-commerce applications.
        </p>
        
      </div>

      {/* Image container with inner glow */}
      <div className="h-[90vw] relative mt-20 w-full rounded-[20%] overflow-hidden">
        {/* Inner glow effect */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[20%] 
                        before:content-[''] before:absolute before:inset-0 
                        before:rounded-[20%] 
                        before:shadow-[inset_0_0_80px_rgba(255,255,255,0.3)] 
                        before:z-10"
        />

        {/* Content - MOBILE RESPONSIVENESS FIXES APPLIED HERE */}
        <div className="absolute flex flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-12 items-center justify-between text-white text-center px-4 sm:px-12 z-20">
          
          {/* HEADER FIX: Reduced size and constrained max-width on mobile */}
          <h4 className="text-xl sm:text-2xl mb-6 sm:mb-12 font-FK-Grotesk max-w-xs sm:max-w-none">
            We are a team of AI Architects, Hackers, and Developers who bond over football.
          </h4>
          
          {/* VIDEO FIX: Reduced video width on mobile (w-[85vw] for small screens) */}
          <div className="rounded-3xl mb-12 overflow-hidden shadow-2xl shadow-black/30 w-[85vw] sm:w-[74vw] h-full">
            <video
              src={assets.heroVdo}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
          
          <Button
            textclass="text-black font-bold"
            className="px-9 py-4 font-FK-Grotesk"
            text="How We Can Help You"
            bgcolor="white"
            color="black"
            txtcolor1="white"
          />
        </div>

        {/* Background image */}
        <img
          src={assets.spaceImg}
          className="w-full h-full object-cover"
          alt="AI Consulting Background"
        />
      </div>
    </div>
  );
};

export default Content2;