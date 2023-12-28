import { useMutation } from '@tanstack/react-query';
import { signUp as signUpApi } from '../services/authService';
import { CreateUserDto } from '../services/types';
import { useToast } from '../context/ToastContext';

export function useSignUp() {
  const { showToast } = useToast();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({ email, password, displayName }: CreateUserDto) =>
      signUpApi({ email, password, displayName }),
    onSuccess() {
      showToast(
        'Sign up was successful, please verify your email and afterwards use the sign in page to access your account',
        'success',
      );
    },
    onError(error) {
      console.log(error);
      showToast('The provided email or password are incorrect!', 'error');
    },
  });

  return { signUp, isLoading: isPending };
}
