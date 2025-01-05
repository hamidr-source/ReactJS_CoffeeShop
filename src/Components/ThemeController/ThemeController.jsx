import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";

const ThemeController = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`text-text-${isDarkMode ? "dark" : "light"} font-bold text-3xl`}
      animate={{
        rotate: isDarkMode ? 0 : 360,
      }}
    >
      {isDarkMode ? (
        <i className="fa-regular fa-sun"></i>
      ) : (
        <i className="fa-regular fa-moon"></i>
      )}
    </motion.button>
  );
};

export default ThemeController;
