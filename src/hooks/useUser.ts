import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../services/authService';

export function useUSer() {
  const { isLoading, data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user: userData,
    isAuthenticated: userData?.role === 'authenticated',
  };
}
