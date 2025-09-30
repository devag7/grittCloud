import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const footerLinks = [
    { name: "X", href: "https://x.com/grittai" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/gritt-ai/" },
    { name: "Instagram", href: "https://www.instagram.com/gritt.ai" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="w-full bg-white py-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Layout wrapper */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm font-mono text-black tracking-wider">
          
          {/* Left: Copyright */}
          <span className="text-center md:text-left">
            © 2025 Gritt.cloud
          </span>

          {/* Center: Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-center">
            {footerLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
              >
                {link.name}
                <img
                  src={assets.arrow}
                  alt="arrow"
                  className="w-3 h-3 hidden sm:inline"
                />
              </a>
            ))}
          </div>

          {/* Right: Tagline */}
          <span className="text-center md:text-right">
            Ethical AI
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
