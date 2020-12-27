import React, { useState, createContext } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [enableDarkMode, setEnableDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setEnableDarkMode(!enableDarkMode);
  };

  return (
    <DarkModeContext.Provider
      value={{
        enableDarkMode,
        setEnableDarkMode: toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
