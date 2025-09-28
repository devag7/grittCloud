import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How secure and compliant are your AI solutions with industry standards?",
      answer: "Data safety and security is our first priority. Many of our partner companies are ISO, PCI-DSS, SOC2 etc certified. We follow Zero Trust threat model.",
    },
    {
      question: "Do you provide end-to-end support, from strategy to implementation and maintenance?",
      answer: "Yes, we work closely from strategy to implementation to meet outcome. We are a few members and work as your extended team.",
    },
    {
      question: "What industries do you specialize in for AI consulting?",
      answer: "We specialize in industries where AI can create real business impact. We have successfully delivered solutions in FinTech, EdTech, and E-Commerce, helping companies optimize operations, personalize customer experiences, and unlock new revenue streams.",
    },
    {
      question: "What experience do you bring to AI?",
      answer: "Our team combines deep expertise in AI, MLOps, and cloud platforms, holding multiple Machine Learning certifications with hands-on experience delivering real-world solutions. We regularly publishes research papers, talks and contribute in Open Source. We have recently built a AI Trading Bot for a Quant.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center py-16 bg-white">
      <h2 className="text-7xl  font-bold text-gray-800 mb-10 font-ultralight">F<span className="font-ultralight-italic">A</span>Q</h2>

      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg px-6 py-4 cursor-pointer transition"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg text-gray-900 font-FK-Grotesk">{faq.question}</h3>
              <span className="text-2xl font-light text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-sm font-FK-Grotesk">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-black text-white px-8 py-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between w-full max-w-3xl">
        <p className="text-lg mb-4 md:mb-0 font-FK-Grotesk">
          Looking for more helpful tips to get started with AI?
        </p>
        <button className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition font-FK-Grotesk">
          Gritt Resources
        </button>
      </div>
    </div>
  );
};

export default Faq;
