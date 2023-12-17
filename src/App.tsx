import ThemeToggle from './components/ThemeToggle';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <>
      <DarkModeProvider>
        <ThemeToggle />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </DarkModeProvider>
    </>
  );
}

export default App;
