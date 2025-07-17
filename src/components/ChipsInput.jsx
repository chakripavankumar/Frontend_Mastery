import React, { useState } from "react";

const ChipsInput = () => {
  // Store list of chips
  const [chips, setChips] = useState([]);

  // Current input field value
  const [inputValue, setInputValue] = useState("");

  // Auto-incrementing ID for each chip
  const [idCounter, setIdCounter] = useState(0);

  // Update inputValue as user types
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  // Handle Enter key to add chip
  const handleKeyPress = (e) => {
    const trimmed = inputValue.trim();

    if (e.key === "Enter" && trimmed !== "") {
      const newChip = {
        id: idCounter,
        label: trimmed,
      };

      setChips((prev) => [...prev, newChip]);
      setIdCounter((prev) => prev + 1);
      setInputValue("");
    }
  };

  // Remove a chip by ID
  const handleDeleteChip = (idToRemove) => {
    setChips((prev) => prev.filter((chip) => chip.id !== idToRemove));
  };

  return (
    <div className="flex flex-col items-center my-12">
      <h2 className="text-2xl font-bold mb-4">Chips Input</h2>

      {/* Input box */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        onKeyDown={handleKeyPress}
        placeholder="Type and press Enter"
        className="w-72 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Chips container */}
      <div className="flex flex-wrap gap-2 mt-4 max-w-[300px]">
        {chips.map((chip) => (
          <div
            key={chip.id}
            className="flex items-center bg-gray-200 px-3 py-1 rounded-full shadow-sm  hover:text-red-500"
          >
            <span className="text-sm mr-2">{chip.label}</span>
            <button
              onClick={() => handleDeleteChip(chip.id)}
              className="text-gray-500 transition-colors focus:outline-none"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsInput;
