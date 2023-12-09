import { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();

// Provide Context (OR) Context Provider
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Method to dispatch action to toggle the theme
  const toggleTheme = () =>
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context)
    console.log('useThemeContext must be used within ThemeContextProvider');

  return context;
};
