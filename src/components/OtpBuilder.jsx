import { useState, useRef, useEffect } from "react";

const OTPInput = ({ onChangeOTP }) => {
  const length = 6;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  // Focus on first input on mount
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  // Move cursor to a specific input box
  const focusInput = (index) => {
    if (inputsRef.current[index]) {
      inputsRef.current[index].focus();
    }
  };

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Only allow digits (no letters/symbols)
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if current is filled
    if (value && index < length - 1) {
      focusInput(index + 1);
    }

    const joinedOTP = newOtp.join("");
    if (joinedOTP.length === length && !newOtp.includes("")) {
      onChangeOTP(joinedOTP);
    }
  };

  // Handle backspace key
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      focusInput(index - 1);
    }
  };

  // Handle paste event (bulk input)
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);

    if (!pasted) return;

    const newOtp = [...otp];
    for (let i = 0; i < pasted.length; i++) {
      newOtp[i] = pasted[i];
      if (inputsRef.current[i]) {
        inputsRef.current[i].value = pasted[i];
      }
    }

    setOtp(newOtp);

    const joinedOTP = newOtp.join("");
    if (joinedOTP.length === length && !newOtp.includes("")) {
      onChangeOTP(joinedOTP);
    }

    focusInput(Math.min(pasted.length, length - 1));
  };

  return (
    <div className="flex justify-center space-x-3">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      ))}
    </div>
  );
};

export default OTPInput;