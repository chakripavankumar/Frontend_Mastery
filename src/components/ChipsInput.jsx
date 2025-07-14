import React, { useState } from "react";

const ChipsInput = () => {
  // State to store all chips (array of objects with id and label)
  const [chips, setChips] = useState([]);

  // State to manage current input value
  const [inputValue, setInputValue] = useState("");

  // Counter for generating unique IDs for each chip
  const [idCounter, setIdCounter] = useState(0);

  // Handle input change event
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  // Handle key press events (specifically Enter key)
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const newChip = {
        id: idCounter,
        label: inputValue.trim(),
      };
      setChips([...chips, newChip]); // Add new chip to array
      setIdCounter(idCounter + 1); // Increment ID counter
      setInputValue(""); // Clear input field
    }
  };

  // Handle chip deletion
  const handleDeleteChip = (idToDelete) => {
    setChips(chips.filter((chip) => chip.id !== idToDelete));
  };

  return (
    <div className="flex flex-col items-center my-10">
      <h2 className="text-xl font-semibold mb-4">Chips Input</h2>

      {/* Input field for adding new chips */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        onKeyDown={handleKeyPress}
        placeholder="Type a chip and press Enter"
        className="px-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Container for displaying chips */}
      <div className="flex flex-wrap gap-2 mt-4">
        {chips.map((chip) => (
          <div
            key={chip.id}
            className="flex items-center bg-gray-200 px-3 py-1 rounded-full"
          >
            <span className="mr-2">{chip.label}</span>
            <button
              onClick={() => handleDeleteChip(chip.id)}
              className="text-gray-500 hover:text-red-500 focus:outline-none"
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
