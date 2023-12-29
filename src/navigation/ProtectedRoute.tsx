import { ReactNode, useEffect } from 'react';
import MotionMain from '../components/MotionMain';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { useUSer } from '../hooks/useUser';

type ProtectedRouteProsp = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProsp) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUSer();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/sign-in');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <MotionMain>
        <Spinner />
      </MotionMain>
    );
  }

  return isAuthenticated && !isLoading ? children : null;
}

export default ProtectedRoute;
