// src/components/Professional.jsx
import React from "react";
import { assets } from "../assets/assets";

const Professional = () => {
  return (
    <section id="recipe" className="w-full flex flex-col items-center py-20 bg-white">
      {/* Heading - Kept as requested ("The Engine of AI Growth") */}
      <div className="text-center max-w-3xl px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
          <span className="text-3xl font-thin font-FK-Grotesk"> The </span>{" "}<br/>
          <span className="font-bold font-ultralight">Recipe of AI Growth</span>
        </h2>
        <p className="mt-6 text-gray-600 text-lg font-FK-Grotesk">
          Success in artificial intelligence is a method oriented. We blend strategic clarity, cutting-edge technology, and collaborative execution to guarantee transformative results.
        </p>
      </div>

      {/* Content Boxes - Now with distinct focus areas */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 w-full max-w-6xl px-6">
        
        {/* Left Box - Focus: AI Agents & MLOps Deployment */}
        <div className="bg-[#F6F5EE] rounded-xl  p-6 flex flex-col items-center">
          <img
            src={assets.SS1} // Uses the cloudMLOps.png placeholder
            alt="MLOps Pipeline"
            className="rounded-lg w-full object-cover"
          />
          <p className="mt-6 text-xl font-medium text-gray-900 text-center font-FK-Grotesk">
            From Vision to Roadmap
          </p>
          <p className="mt-3 text-gray-600 text-center text-sm font-FK-Grotesk">
            We begin by deeply understanding your requirements and translating them into a clear, actionable roadmap. Our approach ensures optimized execution with a focus on measurable outcomes and continuous improvement.
          </p>
        </div>

        {/* Right Box - Focus: Data Engineering & Data Foundation */}
        <div className="bg-[#F6F5EE] rounded-xl  p-6 flex flex-col items-center">
          <img
            src={assets.SS2} // Uses the aiExpertise.png placeholder
            alt="Data Engineering"
            className="rounded-lg w-full object-cover"
          />
          <p className="mt-6 text-xl font-medium text-gray-900 text-center font-FK-Grotesk">
            360° Tracking
          </p>
          <p className="mt-3 text-gray-600 text-center text-sm font-FK-Grotesk">
            AI-driven 360° tracking delivers end-to-end observability and explainability across workflows, enabling enterprises to detect anomalies in real time, minimize risks, and accelerate business growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Professional;