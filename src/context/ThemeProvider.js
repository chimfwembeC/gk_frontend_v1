import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for managing the theme mode
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // State to manage the theme mode (true for dark mode, false for light mode)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if the theme mode is stored in localStorage
    const storedTheme = localStorage.getItem('theme');
    // If the stored theme is found, parse it to boolean, otherwise, default to false (light mode)
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      // Store the new theme mode in localStorage
      localStorage.setItem('theme', JSON.stringify(newMode));
      return newMode;
    });
  };

  // Effect to listen for changes in the theme mode and update localStorage accordingly
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
