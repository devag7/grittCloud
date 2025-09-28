// src/components/SectionThree.jsx
import React from "react";
import { assets } from "../assets/assets";

const SectionThree = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-white">
      {/* Heading - Kept as requested ("The Engine of AI Growth") */}
      <div className="text-center max-w-3xl px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
          <span className="text-3xl font-thin font-FK-Grotesk"> The </span>{" "}<br/>
          <span className="font-bold font-ultralight">Outcome of AI Growth</span>
        </h2>
        <p className="mt-6 text-gray-600 text-lg font-FK-Grotesk">
          The true outcome of AI growth lies in measurable transformation, enterprises move beyond experimentation to achieve tangible business value.
        </p>
      </div>

      {/* Content Boxes - Now with distinct focus areas */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 w-full max-w-6xl px-6">
        
        {/* Left Box - Focus: AI Agents & MLOps Deployment */}
        <div className="bg-[#F6F5EE] rounded-xl  p-6 flex flex-col items-center">
          <img
            src={assets.SS5} // Uses the cloudMLOps.png placeholder
            alt="MLOps Pipeline"
            className="rounded-lg w-full object-cover"
          />
          <p className="mt-6 text-xl font-medium text-gray-900 text-center font-FK-Grotesk">
            Insightful Reporting & Transparency
          </p>
          <p className="mt-3 text-gray-600 text-center text-sm font-FK-Grotesk">
            Our reporting framework transforms complex AI outputs into clear, actionable insights—providing stakeholders with full visibility into performance, progress, and business impact. We share day to day update of the work.
          </p>
        </div>

        {/* Right Box - Focus: Data Engineering & Data Foundation */}
        <div className="bg-[#F6F5EE] rounded-xl  p-6 flex flex-col items-center">
          <img
            src={assets.SS6} // Uses the aiExpertise.png placeholder
            alt="Data Engineering"
            className="rounded-lg w-full object-cover"
          />
          <p className="mt-6 text-xl font-medium text-gray-900 text-center font-FK-Grotesk">
            Continuous Optimization & Scaling
          </p>
          <p className="mt-3 text-gray-600 text-center text-sm font-FK-Grotesk">
            We don't stop at deployment, we refine, retrain, and scale models to ensure sustained accuracy, adaptability, and measurable long-term value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;