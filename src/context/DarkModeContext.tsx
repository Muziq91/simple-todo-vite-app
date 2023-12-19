import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

type Props = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<Props>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

function DarkModeProvider(props: { children: React.ReactNode }) {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    prefersDarkMode,
    'isDarkMode',
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'customDark');
    } else {
      document.documentElement.setAttribute('data-theme', 'customLight');
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((darkMode: boolean) => !darkMode);
  }

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {props.children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('DarkModeContext was used outside DarkModeProvider');
  }

  return context;
}

export { DarkModeProvider, useDarkMode };
