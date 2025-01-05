import React from "react";
import { useTheme } from "../../Context/ThemeContext";


const ThemeController = () => {
  const {isDarkMode, toggleTheme } = useTheme()
  console.log(isDarkMode)
  return (
    <button onClick={toggleTheme} className={`text-text-${isDarkMode ? "dark" : "light"}`}>Dark</button>
  )
};

export default ThemeController;
