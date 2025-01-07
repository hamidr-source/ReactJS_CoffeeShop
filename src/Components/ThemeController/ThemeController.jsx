import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";

const ThemeController = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="font-bold text-2xl"
      animate={{
        rotate: isDarkMode ? 0 : 360,
      }}
    >
      {isDarkMode ? (
        <i className="text-text-dark fa-regular fa-sun"></i>
      ) : (
        <i className="text-text-light fa-regular fa-moon"></i>
      )}
    </motion.button>
  );
};

export default ThemeController;
