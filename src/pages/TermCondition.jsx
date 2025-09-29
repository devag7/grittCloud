import React from "react";
import Footer from "../components/Footer";

const TermCondition = () => {
  return (
    <div className="w-full pt-24 pb-3  min-h-screen bg-white text-gray-800">
      {/* Top Banner */}
      <div className="bg-[#E8F3EF] py-12 px-6 md:px-20 text-center  md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-thin mb-6 sm:mb-8 md:mb-10 tracking-tighter font-ultralight text-center leading-tight">
          Legal Hub
        </h1>
        <p className="mt-3 text-center text-gray-700 text-lg max-w-1xl">
          Information related to our terms of service, policies, intellectual
          property, and compliance.
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 md:px-20 py-12 gap-10">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 border-r border-gray-200 pr-6">
          <nav className="space-y-4 text-gray-700 font-medium">
            <a
              href="#overview"
              className="block hover:text-[#6556CD] transition"
            >
              Legal Overview
            </a>
            <a
              href="#user-terms"
              className="block hover:text-[#6556CD] transition"
            >
              Platform User Terms
            </a>
            <a
              href="#developer-terms"
              className="block hover:text-[#6556CD] transition"
            >
              Enterprise & Developer Terms
            </a>
            <a
              href="#partner-terms"
              className="block hover:text-[#6556CD] transition"
            >
              Partner & Promotion Terms
            </a>
            <a
              href="#policies"
              className="block hover:text-[#6556CD] transition"
            >
              Policies & Guidelines
            </a>
            <a
              href="#privacy"
              className="block hover:text-[#6556CD] transition"
            >
              Privacy & Data Protection
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
              Last updated: September 29, 2025
            </p>
            <p className="text-gray-700 leading-relaxed">
              Welcome to our Terms of Service ("Terms"). These terms govern your
              access to and use of our website, applications, and services. By
              using our platform, you agree to comply with these Terms and all
              applicable laws. If you do not agree, please discontinue use of
              our services.
            </p>
          </section>

          {/* User Terms */}
          <section id="user-terms">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Platform User Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Users are expected to follow community guidelines, provide
              accurate information, and refrain from any unlawful activities on
              the platform. Misuse of services may result in suspension or
              termination of accounts.
            </p>
          </section>

          {/* Developer Terms */}
          <section id="developer-terms">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Enterprise & Developer Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Developers and enterprises integrating with our services must
              adhere to additional API policies, data usage rules, and security
              requirements. Unauthorized use may lead to restricted access.
            </p>
          </section>

          {/* Partner Terms */}
          <section id="partner-terms">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Partner & Promotion Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Partnerships and promotions are subject to specific agreements
              between parties. These agreements outline permitted usage of
              branding, assets, and campaign guidelines.
            </p>
          </section>

          {/* Policies */}
          <section id="policies">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Policies & Guidelines
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our policies ensure fair use of services, protection of user
              rights, and a safe environment. Violations of policies may lead to
              corrective actions including suspension.
            </p>
          </section>

          {/* Privacy */}
          <section id="privacy">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Privacy & Data Protection
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We value your privacy. All personal data is handled in accordance
              with our Privacy Policy. By using our services, you consent to the
              collection and use of your information as outlined.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default TermCondition;
