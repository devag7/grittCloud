// src/components/SectionTwo.jsx
import React from "react";
import { assets } from "../assets/assets";

const SectionTwo = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-white">
      {/* Heading - Kept as requested ("The Engine of AI Growth") */}
      <div className="text-center max-w-3xl px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
          <span className="text-3xl font-thin font-FK-Grotesk"> The </span>{" "}<br/>
          <span className="font-bold font-ultralight">Engine of AI Growth</span>
        </h2>
        <p className="mt-6 text-gray-600 text-lg font-FK-Grotesk">
          We build, deploy, and manage production-grade AI agents and MLOps pipelines 
          on the world's leading cloud platforms, turning data into decisive business action.
        </p>
      </div>

      {/* Content Boxes - Now with distinct focus areas */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 w-full max-w-6xl px-6">
        
        {/* Left Box - Focus: AI Agents & MLOps Deployment */}
        <div className="bg-[#F6F5EE] rounded-xl  p-6 flex flex-col items-center">
          <img
            src={assets.SS3} // Uses the cloudMLOps.png placeholder
            alt="MLOps Pipeline"
            className="rounded-lg w-full object-cover"
          />
          <p className="mt-6 text-xl font-medium text-gray-900 text-center font-FK-Grotesk">
            Build & Deploy Next-Gen AI Agents
          </p>
          <p className="mt-3 text-gray-600 text-center text-sm font-FK-Grotesk">
            Leverage MLOps automation for continuous integration and deployment (CI/CD) of intelligent agents, 
            ensuring rapid, reliable releases and high-availability on any cloud (GCP, AWS, Azure).
          </p>
        </div>

        {/* Right Box - Focus: Data Engineering & Data Foundation */}
        <div className="bg-[#F6F5EE] rounded-xl  p-6 flex flex-col items-center">
          <img
            src={assets.SS4} // Uses the aiExpertise.png placeholder
            alt="Data Engineering"
            className="rounded-lg w-full object-cover"
          />
          <p className="mt-6 text-xl font-medium text-gray-900 text-center font-FK-Grotesk">
            High-Fidelity Data Foundation
          </p>
          <p className="mt-3 text-gray-600 text-center text-sm font-FK-Grotesk">
            Architect end-to-end ETL/ELT data pipelines that guarantee data quality and low-latency feature stores, 
            directly fueling your AI models and agents with accurate, real-time intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;