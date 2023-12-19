import { useDarkMode } from '../context/DarkModeContext';

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <img
      alt="Simple ToDo App Logo"
      className="w-auto h-36"
      src={
        isDarkMode
          ? 'icons/logo-transparent-light.png'
          : 'icons/logo-transparent-dark.png'
      }
    />
  );
}

export default Logo;
