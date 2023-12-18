import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkModeProvider } from './context/DarkModeContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import PageNotFoundPage from './pages/PageNotFoundPage';
import DashboardPage from './pages/DashboardPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  console.log(import.meta.env.VITE_APP_TITLE);
  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Routes>
              <Route>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<DashboardPage />} />
              </Route>
              <Route path="signin" element={<SignInPage />} />
              <Route path="*" element={<PageNotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
