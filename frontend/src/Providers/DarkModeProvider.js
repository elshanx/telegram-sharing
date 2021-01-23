import React, { createContext, useContext } from 'react';
import useDarkMode from '../Hooks/useDarkMode';

const ThemeContext = createContext('dark');

export const useTheme = () => useContext(ThemeContext);

const DarkModeProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default DarkModeProvider;
