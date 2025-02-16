import React, { createContext, useContext, useState, useEffect } from 'react';


const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext)

function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  useEffect(() => {
    const darkmode = JSON.parse(localStorage.getItem("darkmode"));
    if (darkmode) {
      setIsDarkMode(darkmode);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider 