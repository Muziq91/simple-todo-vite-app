import { createContext, useContext, useEffect, useState } from 'react';
import Toast from '../components/Toast';

type Props = {
  showToast: (
    text: string,
    as: 'info' | 'success' | 'warning' | 'error',
  ) => void;
};

const ToastContext = createContext<Props>({
  showToast: () => {},
});

function ToastProvider(props: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [toastText, setToastText] = useState('');
  const [toastAs, setToastAs] = useState<
    'info' | 'success' | 'warning' | 'error'
  >('info');

  useEffect(() => {
    setIsOpen(() => !!toastText);

    const interval = setInterval(() => {
      setIsOpen(() => false);
      setToastText('');
    }, 3000);

    return () => clearInterval(interval);
  }, [toastText]);

  function showToast(
    text: string,
    as: 'info' | 'success' | 'warning' | 'error',
  ) {
    setToastText(() => text);
    setToastAs(() => as);
  }

  return (
    <ToastContext.Provider
      value={{
        showToast,
      }}
    >
      <Toast text={toastText} as={toastAs} isOpen={isOpen} />
      {props.children}
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('ToastContext was used outside DarkModeProvider');
  }

  return context;
}

export { ToastProvider, useToast };
