import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { useTheme } from "./Context/ThemeContext";

const App = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`bg-primary-${isDarkMode ? "dark" : "light"} text-text-${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <HomePage />
    </div>
  );
};

export default App;
