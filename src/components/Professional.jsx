import React from "react";
import { assets } from "../assets/assets";

const Professional = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
          <span className="text-3xl font-thin font-FK-Grotesk"> Comet is</span>{" "}<br/>
          <span className="font-bold font-ultralight">professional</span>
        </h2>
        <p className="mt-6 text-gray-600 text-lg font-FK-Grotesk">
          Stay in the flow. Comet can book meetings, follow up on emails,
          browse other pages on your behalf, research, shop, summarize,
          and more.
        </p>
      </div>

      {/* Content Boxes */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 w-full max-w-6xl px-6">
        {/* Left Box */}
        <div className="bg-[#F6F5EE] rounded-xl  p-6 flex flex-col items-center">
          <img
            src={assets.SS1}
            alt="Preview 1"
            className="rounded-lg w-full object-cover"
          />
          <p className="mt-6 text-xl font-medium text-gray-900 text-center font-FK-Grotesk">
            Make decisions faster, get up to speed fast
          </p>
          <p className="mt-3 text-gray-600 text-center text-sm font-FK-Grotesk">
            Ask Comet to navigate unfamiliar software, get quick answers,
            research, summarize, translate, and more.
          </p>
        </div>

        {/* Right Box */}
        <div className="bg-[#F6F5EE] rounded-xl  p-6 flex flex-col items-center">
          <img
            src={assets.SS3}
            alt="Preview 2"
            className="rounded-lg w-full object-cover"
          />
          <p className="mt-6 text-xl font-medium text-gray-900 text-center font-FK-Grotesk">
            Ask Comet to manage your email & calendar
          </p>
          <p className="mt-3 text-gray-600 text-center text-sm font-FK-Grotesk">
            Comet can answer questions about your inbox, schedule meetings,
            brief you for the day, make sense of Slack, social media, and
            anything on the web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Professional;
