import React, { useState, useEffect } from "react";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load user preference on initial render
  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Update the class on the root element to toggle dark mode globally
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <button
      className={`p-2 rounded-full shadow-md ${
        isDarkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 17l4 4 4-4m-4-5v9"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-gray-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19a7 7 0 01-7-7V4a7 7 0 0114 0v8a7 7 0 01-7 7z"
          />
        </svg>
      )}
    </button>
  );
};

export default DarkModeSwitch;
