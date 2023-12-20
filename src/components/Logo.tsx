import { useDarkMode } from '../context/DarkModeContext';

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <img
      alt="Simple ToDo App Logo"
      className="h-36 w-auto"
      src={
        isDarkMode
          ? 'icons/logo-transparent-light.png'
          : 'icons/logo-transparent-dark.png'
      }
    />
  );
}

export default Logo;
