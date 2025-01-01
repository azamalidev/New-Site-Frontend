import React, { useState } from "react";

const FAQPage = () => {
  // FAQ data
  const faqs = [
    {
      question: "What is the difference between onsite and online courses?",
      answer:
        "Onsite courses are conducted in physical classrooms, allowing face-to-face interaction with instructors and peers. Online courses, on the other hand, are delivered via the internet, offering flexibility to learn from anywhere.",
    },
    {
      question: "Are the courses self-paced or instructor-led?",
      answer:
        "We offer both options. You can choose self-paced courses for flexible learning or instructor-led courses for real-time guidance and interaction.",
    },
    {
      question: "Are there any certifications provided after course completion?",
      answer:
        "Yes, upon successful completion of a course, you'll receive a certificate that you can share on LinkedIn or add to your resume.",
    },
    {
      question: "Can I switch between onsite and online courses?",
      answer:
        "Yes, you can switch between onsite and online courses based on availability. Please contact our support team for assistance.",
    },
  ];

  // State to track the active question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle accordion
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-gray-800 font-medium text-left focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform ${
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
              {/* Answer */}
              {activeIndex === index && (
                <div className="p-4 text-gray-600 border-t border-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
