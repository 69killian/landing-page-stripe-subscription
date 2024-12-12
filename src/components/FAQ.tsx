import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day refund policy for all our products. Please contact support for further details.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach out to our support team via email at support@example.com or call us at +123-456-7890.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Shipping fees and times may vary depending on your location.",
    },
    {
      question: "Can I change my order after placing it?",
      answer:
        "You can modify your order within 24 hours of placing it by contacting our support team.",
    },
  ];

  // Ajout du type explicite pour 'index'
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 mb-[100px]">
      <div className="max-w-4xl mx-auto">
        <section className="text-5xl md:text-6xl font-bold flex text-center justify-center mb-10">
          <h1 className="font-sans relative">
            Got Questions? <br />
            <span className="bg-gradient-to-r from-[#2B65E2] via-[#537DE5] to-[#2B65E280] text-transparent bg-clip-text">
              We&apos;ve Got Answers!
            </span>
          </h1>
        </section>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 rounded-lg shadow-md"
              style={{
                boxShadow: 'inset 0 1px 10px rgba(255, 255, 255, 0.07)',
              }}
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-black dark:text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <motion.div
                  className="px-6 py-4 text-black dark:text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
