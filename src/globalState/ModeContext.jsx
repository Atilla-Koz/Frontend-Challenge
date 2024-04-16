import { createContext, useState } from 'react';

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Uygulama ilk yüklendiğinde dark mode durumunu local storage'dan al
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
};
