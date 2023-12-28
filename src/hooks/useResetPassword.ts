import { useMutation } from '@tanstack/react-query';
import { resetPassword as resetPasswordApi } from '../services/authService';
import { ResetPasswordDto } from '../services/types';
import { useToast } from '../context/ToastContext';

export function useResetPassword() {
  const { showToast } = useToast();

  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: ({ email, captchaToken }: ResetPasswordDto) =>
      resetPasswordApi({ email, captchaToken }),
    onSuccess() {
      showToast(
        'An email has been sent to the provided email with steps detailing how to reset the password.',
        'success',
      );
    },
    onError(error) {
      console.log(error);
      showToast('Something went wrong!', 'error');
    },
  });

  return { resetPassword, isLoading: isPending };
}
