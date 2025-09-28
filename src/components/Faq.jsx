import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // optional icon set

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How secure and compliant are your AI solutions with industry standards?",
      answer:
        "Data safety and security is our first priority. Many of our partner companies are ISO, PCI-DSS, SOC2 etc certified. We follow Zero Trust threat model.",
    },
    {
      question: "Do you provide end-to-end support, from strategy to implementation and maintenance?",
      answer:
        "Yes, we work closely from strategy to implementation to meet outcome. We are a few members and work as your extended team.",
    },
    {
      question: "What industries do you specialize in for AI consulting?",
      answer:
        "We specialize in industries where AI can create real business impact. We have successfully delivered solutions in FinTech, EdTech, and E-Commerce, helping companies optimize operations, personalize customer experiences, and unlock new revenue streams.",
    },
    {
      question: "What experience do you bring to AI?",
      answer:
        "Our team combines deep expertise in AI, MLOps, and cloud platforms, holding multiple Machine Learning certifications with hands-on experience delivering real-world solutions. We regularly publish research papers, talks and contribute in Open Source. We have recently built an AI Trading Bot for a Quant.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 sm:mb-10 font-ultralight">
        F<span className="italic">A</span>Q
      </h2>

      {/* FAQ Items */}
      <div className="w-full max-w-2xl space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-sm sm:shadow-md rounded-lg px-4 sm:px-6 py-3 sm:py-4 transition-all border border-gray-100 sm:border-none"
          >
            <button
              className="flex justify-between items-start sm:items-center w-full text-left gap-2 sm:gap-0"
              onClick={() => toggleFaq(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-base sm:text-lg text-gray-900 font-FK-Grotesk leading-relaxed sm:leading-normal">
                {faq.question}
              </h3>
              <span className="text-gray-500 flex-shrink-0 mt-1 sm:mt-0">
                {openIndex === index ? <Minus size={18} className="sm:w-5" /> : <Plus size={18} className="sm:w-5" />}
              </span>
            </button>

            <div
              id={`faq-answer-${index}`}
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[500px] opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-600 font-FK-Grotesk leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="mt-8 sm:mt-12 bg-black text-white px-6 sm:px-8 py-5 sm:py-6 rounded-lg sm:rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl gap-4 sm:gap-0">
        <p className="text-base sm:text-lg font-FK-Grotesk text-center sm:text-left">
          Looking for more helpful tips to get started with AI?
        </p>
        <button className="bg-white text-black font-medium px-5 sm:px-6 py-2 sm:py-2 rounded-full hover:bg-gray-200 transition font-FK-Grotesk text-sm sm:text-base w-full sm:w-auto">
          Gritt Resources
        </button>
      </div>
    </div>
  );
};

export default Faq;