import React, { useState } from "react";

const Dropdown = ({ grindOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevIndex) => !prevIndex);
  };
  console.log(grindOption);
  return (
    <div className="w-full h-fit max-w-[400px]">
      <button
        onClick={toggleAccordion}
        className="w-2/4 p-4 flex justify-between items-center"
      >
        Grind Option {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
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
      {isOpen && (
        <div className="w-64 border rounded shadow-md">
          {grindOption.map((options, index) => (
            <p className="p-4 bg-gray-100" key={index}>
              {options}
            </p>
          ))}
          <p className="p-4 bg-gray-100">None</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
