import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { useTheme } from "./Context/ThemeContext";

const App = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`
    ${isDarkMode ? "bg-primary-dark" : "bg-primary-light"}
    ${isDarkMode ? "text-text-dark" : "text-text-light"}
  `}
    >
      <HomePage />
    </div>
  );
};

export default App;
