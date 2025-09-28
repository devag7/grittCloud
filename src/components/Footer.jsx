import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-sm font-mono text-black tracking-wider">
        
        <span className="mb-4 md:mb-0">©2025 Gritt.cloud</span>

        <div className="flex flex-wrap justify-center gap-6">
          {["X", "LINKEDIN", "INSTAGRAM", "PRIVACY POLICY", "TERMS & CONDITIONS"].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="flex items-center gap-1 hover:underline"
            >
              {item}
              <img src={assets.arrow} alt="arrow" className="w-3 h-3" />
            </a>
          ))}
        </div>

        <span className="mt-4 md:mt-0">Ethical AI</span>
      </div>
    </footer>
  );
};

export default Footer;
