import React from "react";
import Footer from "../components/Footer";

const TermsCondition = () => {
  return (
    <div className="w-full pt-24 min-h-screen bg-white text-gray-800">
      {/* Top Banner */}
      <div className="bg-[#E8F3EF] py-12 px-6 md:px-20 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-thin mb-6 sm:mb-8 md:mb-10 tracking-tighter font-ultralight text-center leading-tight">
          Legal Hub
        </h1>
        <p className="mt-3 text-gray-700 text-lg text-center">
          Information related to our terms of service, policies, intellectual
          property, and compliance.
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 md:px-20 py-12 gap-10">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 border-r border-gray-200 pr-6">
          <nav className="space-y-4 text-gray-700 font-medium">
            <a href="#overview" className="block hover:text-[#6556CD] transition">
              Legal Overview
            </a>
            <a href="#user-terms" className="block hover:text-[#6556CD] transition">
              Platform User Terms
            </a>
            <a href="#developer-terms" className="block hover:text-[#6556CD] transition">
              Enterprise & Developer Terms
            </a>
            <a href="#partner-terms" className="block hover:text-[#6556CD] transition">
              Partner & Promotion Terms
            </a>
            <a href="#policies" className="block hover:text-[#6556CD] transition">
              Policies & Guidelines
            </a>
          </nav>
        </aside>

        {/* Content */}
        <main className="w-full md:w-3/4 space-y-10">
          {/* Overview Section */}
          <section id="overview">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Terms of Service
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Last updated: September 30, 2025
            </p>
            <p className="text-gray-700 leading-relaxed">
              Welcome to our Terms of Service ("Terms"). These terms govern your
              access to and use of our website, applications, and services. By
              using our platform, you agree to comply with these Terms and all
              applicable laws. If you do not agree, please discontinue use of
              our services.
            </p>
          </section>

          {/* Example Additional Sections */}
          <section id="user-terms">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Platform User Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Users are expected to follow community guidelines, provide
              accurate information, and refrain from unlawful activities. Misuse
              may result in suspension or termination.
            </p>
          </section>

          <section id="developer-terms">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Enterprise & Developer Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Developers and enterprises integrating with our services must
              adhere to API policies, data usage rules, and security
              requirements.
            </p>
          </section>

          <section id="partner-terms">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Partner & Promotion Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Partnerships and promotions are governed by separate agreements
              that outline permitted branding, usage, and campaign guidelines.
            </p>
          </section>

          <section id="policies">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Policies & Guidelines
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our policies ensure fair use of services, protection of user
              rights, and a safe environment for everyone.
            </p>
          </section>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsCondition;
