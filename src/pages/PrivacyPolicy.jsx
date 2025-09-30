import React from "react";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="w-full pb-4 pt-24 min-h-screen bg-white text-gray-800">
      {/* Top Banner */}
      <div className="bg-[#E8F3EF] py-12 px-6 md:px-20 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-thin mb-6 sm:mb-8 md:mb-10 tracking-tighter font-ultralight text-center leading-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-gray-700 text-center text-lg ">
          Learn how we collect, use, and protect your personal data while using
          our platform.
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 md:px-20 py-12 gap-10">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 border-r border-gray-200 pr-6">
          <nav className="space-y-4 text-gray-700 font-medium">
            <a href="#intro" className="block hover:text-[#6556CD] transition">
              Introduction
            </a>
            <a href="#data" className="block hover:text-[#6556CD] transition">
              Data We Collect
            </a>
            <a href="#usage" className="block hover:text-[#6556CD] transition">
              How We Use Data
            </a>
            <a href="#security" className="block hover:text-[#6556CD] transition">
              Data Security
            </a>
            <a href="#rights" className="block hover:text-[#6556CD] transition">
              Your Rights
            </a>
          </nav>
        </aside>

        {/* Content */}
        <main className="w-full md:w-3/4 space-y-10">
          <section id="intro">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Introduction
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Last updated: September 30, 2025
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our website or services.
            </p>
          </section>

          <section id="data">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Data We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect personal data such as name, email, and account
              details, as well as non-personal data like browser type and usage
              statistics.
            </p>
          </section>

          <section id="usage">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How We Use Data
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your data is used to improve services, provide support, send
              updates, and ensure platform security.
            </p>
          </section>

          <section id="security">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement strict security measures to protect your information
              from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section id="rights">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, update, or delete your personal
              information. For requests, please contact us at
              support@example.com.
            </p>
          </section>
        </main>
      </div>
           <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
