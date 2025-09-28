import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex items-center justify-center pt-32 sm:pt-36 md:pt-44 px-4">
      <div className="flex flex-col items-center w-full">
        {/* TOP TIER: Pre-Heading */}
        <p className="text-black/70 text-sm sm:text-base md:text-lg font-FK-Grotesk text-center">
          Leverage the Power of the Cloud
        </p>

        {/* MAIN HEADLINE */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-thin mb-6 sm:mb-8 md:mb-10 tracking-tighter font-ultralight text-center leading-tight">
          Build your next AI{" "}
          <span className="italic font-ultralight">Agent</span>
        </h1>

        {/* BUTTON */}
        <a href="#calEmbed">
          <Button
            textclass="text-white font-bold font-FK-Grotesk"
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
            text="Book Free Consultation"
            bgcolor="black"
            color="white"
            txtcolor1="black"
          />
        </a>

        {/* TIER 2: End-to-End Solutions */}
        <div className="mt-6 sm:mt-8 text-black/70 text-base sm:text-lg md:text-xl font-FK-Grotesk text-center px-2">
          <p>
            End-to-End Solutions: Machine Learning, MLOps, Data Engineering
          </p>
        </div>

        {/* TIER 3: Specialization */}
        <div className="mt-3 sm:mt-4 text-black/70 text-sm sm:text-base md:text-xl font-ultralight text-center px-2">
          <p>
            Specializing in GCP (Vertex AI), AWS (SageMaker), and Azure (Machine
            Learning)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
