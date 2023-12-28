import supabase from './supabase';
import { CreateUserDto, ResetPasswordDto, UpdatePasswordDto } from './types';

export async function signUp({
  displayName,
  email,
  password,
  captchaToken,
}: CreateUserDto) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { captchaToken, data: { displayName, avatar: '' } },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function resetPassword({ email, captchaToken }: ResetPasswordDto) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    captchaToken,
    redirectTo: import.meta.env.VITE_RESET_PASSWORD_PAGE,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function updatePassword({ password }: UpdatePasswordDto) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
