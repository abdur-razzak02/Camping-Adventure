import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What are the essentials for a camping adventure?",
      answer:
        "Essentials include a tent, sleeping bag, flashlight, first-aid kit, food, water, and proper clothing.",
    },
    {
      question: "How do I choose the right campsite?",
      answer:
        "Look for flat ground, proximity to water, and avoid areas prone to wildlife disturbances or strong winds.",
    },
    {
      question: "What are some safety tips for camping?",
      answer:
        "Keep food stored securely, stay aware of weather changes, and always inform someone of your plans.",
    },
    {
      question: "What’s the best way to start a campfire?",
      answer:
        "Gather dry tinder, kindling, and firewood. Start with tinder and kindling, then gradually add larger wood.",
    },
    {
      question: "How do I leave no trace while camping?",
      answer:
        "Pack out all trash, avoid disturbing wildlife, and follow principles like burying human waste properly.",
      },
      {
        question: "What should I do if I encounter wildlife?",
        answer: "Stay calm, do not approach or feed the animal, and back away slowly. Make noise to avoid surprising wildlife.",
      },
  ];

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-5 text-center font-play">
        Camping Adventure FAQs
      </h1>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-200 text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
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
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
