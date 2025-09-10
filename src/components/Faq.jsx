import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What platforms is Comet available on?",
      answer: "Comet is available on Windows, macOS, Linux, and mobile platforms.",
    },
    {
      question: "How do I install Comet?",
      answer: "You can install Comet by downloading it from our website or your device’s app store.",
    },
    {
      question: "What search engine does Comet use?",
      answer: "Comet uses its own privacy-focused search engine.",
    },
    {
      question: "Is Comet free?",
      answer: "Yes! Comet is completely free to use.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center py-16 bg-white">
      <h2 className="text-7xl  font-serif text-gray-800 mb-10">FAQ</h2>

      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg px-6 py-4 cursor-pointer transition"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg text-gray-900">{faq.question}</h3>
              <span className="text-2xl font-light text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-black text-white px-8 py-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between w-full max-w-3xl">
        <p className="text-lg mb-4 md:mb-0">
          Looking for more helpful tips to get started with Comet?
        </p>
        <button className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition">
          Comet Resources
        </button>
      </div>
    </div>
  );
};

export default Faq;
