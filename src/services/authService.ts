import supabase from './supabase';
import { CreateUserDto, UserEmailDto } from './types';

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

export async function resetPassword({ email }: UserEmailDto) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: import.meta.env.VITE_RESET_PASSWORD_PAGE,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
