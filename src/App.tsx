import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkModeProvider } from './context/DarkModeContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import PageNotFoundPage from './pages/PageNotFoundPage';
import DashboardPage from './pages/DashboardPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import PolicyPage from './pages/PolicyPage';

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
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Routes>
              <Route>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<DashboardPage />} />
              </Route>
              <Route path="sign-in" element={<SignInPage />} />
              <Route path="sign-up" element={<SignUpPage />} />
              <Route
                path="terms-of-service"
                element={<PolicyPage as="TermsOfService" />}
              />
              <Route
                path="privacy-policy"
                element={<PolicyPage as="PrivacyPolicy" />}
              />
              <Route
                path="code-of-conduct"
                element={<PolicyPage as="CodeOfConduct" />}
              />

              <Route path="forgot-password" element={<ForgotPasswordPage />} />
              <Route path="change-password" element={<ChangePasswordPage />} />

              <Route path="*" element={<PageNotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
