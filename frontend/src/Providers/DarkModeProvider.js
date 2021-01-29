import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('dark');

export const useTheme = () => useContext(ThemeContext);

const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default DarkModeProvider;
