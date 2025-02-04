import { createContext, useState, useEffect } from 'react';

export const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode || 'light';
  });

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
