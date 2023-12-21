import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkModeProvider } from './context/DarkModeContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './navigation/AppRoutes';
import { ToastProvider } from './context/ToastContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <DarkModeProvider>
        <ToastProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </QueryClientProvider>
        </ToastProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
