import React, { createContext, useContext, useState } from 'react';


const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext)

function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, useTheme };