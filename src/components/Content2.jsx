// src/components/Content2.jsx
import React from "react";
import { assets } from "../assets/assets";
import Button from "./Button";

const Content2 = () => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center gap-6 px-4 sm:px-12 py-20 sm:py-44">
      {/* Text Content - Mobile optimized */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
        <h3 className="text-2xl sm:text-4xl w-full sm:w-[60%] font-FK-Grotesk leading-tight">
          Empowering enterprises across every sector to define their intelligent
          future,
        </h3>
        <p className="text-lg sm:text-2xl text-black font-ultralight mb-2 sm:mb-4 leading-relaxed">
          by turning complexity into scalable, strategic
          <span className="font-ultralight-italic"> A</span>I assets.
        </p>
        <p className="text-base sm:text-lg text-black/70 font-FK-Grotesk w-full sm:w-auto px-2">
          Our portfolio includes successful integrations in FinTech, Education
          Platforms, and E-commerce applications.
        </p>
      </div>

      {/* Image container with inner glow - Mobile optimized */}
      <div className="h-[120vw] sm:h-[90vw] relative mt-12 sm:mt-20 w-full rounded-2xl sm:rounded-[20%] overflow-hidden">
        {/* Inner glow effect */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-[20%] 
                        before:content-[''] before:absolute before:inset-0 
                        before:rounded-2xl sm:before:rounded-[20%] 
                        before:shadow-[inset_0_0_80px_rgba(255,255,255,0.3)] 
                        before:z-10"
        />

        {/* Content - Enhanced mobile responsiveness */}
        <div className="absolute flex flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-8 sm:py-12 items-center justify-between text-white text-center px-4 sm:px-12 z-20 w-full">
          {/* Header - Better mobile sizing */}
          <h4 className="text-lg sm:text-2xl mb-6 sm:mb-12 font-FK-Grotesk max-w-xs sm:max-w-none leading-tight px-2">
            We are a team of AI Architects, Hackers, and Developers who bond
            over football.
          </h4>

          {/* Video - Better mobile proportions */}
          <div className="rounded-2xl sm:rounded-3xl mb-8 sm:mb-12 overflow-hidden shadow-2xl shadow-black/30 w-[90vw] sm:w-[74vw] h-full">
            <video
              src={assets.heroVdo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Button - Better mobile sizing */}
          <a href="#recipe" className="transform transition-transform">
            <Button
              textclass="text-black font-bold text-sm sm:text-base"
              className="px-6 sm:px-9 py-3 sm:py-4 font-FK-Grotesk rounded-full"
              text="How We Can Help You"
              bgcolor="white"
              color="black"
              txtcolor1="white"
            />
          </a>
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