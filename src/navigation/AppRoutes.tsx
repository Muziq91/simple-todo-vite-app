import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PolicyPage from '../pages/PolicyPage';
import DashboardPage from '../pages/DashboardPage';
import SignInPage from '../pages/SignInPage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import PageNotFoundPage from '../pages/PageNotFoundPage';
import SignUpPage from '../pages/SignUpPage';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
}

export default AppRoutes;
