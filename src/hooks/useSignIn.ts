import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn as signInApi } from '../services/authService';
import { SignInUserDto } from '../services/types';
import { useToast } from '../context/ToastContext';
import { useNavigate } from 'react-router-dom';

export function useSignIn() {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: signIn,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: ({ email, password, captchaToken }: SignInUserDto) =>
      signInApi({ email, password, captchaToken }),
    onSuccess(res) {
      // Using query data for caching the user
      queryClient.setQueryData(['user'], res.user);
      showToast(
        `Welcome back ${res.user.user_metadata.displayName}`,
        'success',
      );
      // Navigating and replacing current entry in history stack
      navigate('/dashboard', { replace: true });
    },
    onError(error) {
      console.log(error);
      showToast('The provided email or password are incorrect!', 'error');
    },
  });

  return { signIn, isLoading: isPending, isSuccess };
}
