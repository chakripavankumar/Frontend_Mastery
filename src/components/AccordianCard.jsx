import { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript.",
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React.",
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js.",
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js.",
  },
];

function Accordion() {
  // Track the active (open) index
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle logic: collapse if already open, else open the clicked one
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Handle empty list edge case
  if (!items || items.length === 0) {
    return (
      <p className="text-gray-500 text-center text-lg">No items available.</p>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-16 p-8 rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">FAQ Accordion</h2>

      {items.map((item, index) => (
        <div
          key={index}
          className="mb-3 border border-gray-700 rounded-md bg-blue-50 overflow-hidden"
        >
          {/* Accordion header */}
          <button
            className={`w-full px-4 py-3 text-left flex justify-between items-center
              transition-colors duration-300 font-medium text-base
              ${
                activeIndex === index
                  ? "bg-blue-500 text-white"
                  : "bg-blue-100 hover:bg-blue-200"
              }`}
            onClick={() => handleToggle(index)}
            aria-expanded={activeIndex === index}
          >
            <span>{item.title}</span>
            {activeIndex === index ? (
              <ArrowUp className="w-5 h-5" />
            ) : (
              <ArrowDown className="w-5 h-5" />
            )}
          </button>

          {/* Accordion body */}
          {activeIndex === index && (
            <div className="p-4 text-sm bg-white border-t border-gray-200">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
