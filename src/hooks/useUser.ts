import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../services/authService';

export function useUSer() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });
  console.log(user);
  return {
    isLoading,
    user,
    isAuthenticated: user?.role === 'authenticated',
  };
}
