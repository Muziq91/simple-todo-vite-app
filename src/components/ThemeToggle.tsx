import { useDarkMode } from '../context/DarkModeContext';
import MoonIcon from '../icons/MoonIcon';
import SunIcon from '../icons/SunIcon';

function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <SunIcon />
      <MoonIcon />
    </label>
  );
}

export default ThemeToggle;
