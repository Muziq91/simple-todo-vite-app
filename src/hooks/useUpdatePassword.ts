import { useMutation } from '@tanstack/react-query';
import { updatePassword as updatePasswordApi } from '../services/authService';
import { UpdatePasswordDto } from '../services/types';
import { useToast } from '../context/ToastContext';

export function useUpdatePassword() {
  const { showToast } = useToast();

  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: ({ password, captchaToken }: UpdatePasswordDto) =>
      updatePasswordApi({ password, captchaToken }),
    onSuccess() {
      showToast('The password was successfully reset.', 'success');
    },
    onError(error) {
      console.log(error);
      showToast('Something went wrong!', 'error');
    },
  });

  return { updatePassword, isLoading: isPending };
}
