import supabase from './supabase';
import {
  CreateUserDto,
  ResetPasswordDto,
  SignInUserDto,
  UpdatePasswordDto,
} from './types';

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

export async function signIn({ email, password, captchaToken }: SignInUserDto) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
    options: { captchaToken },
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

export async function getCurrentUser() {
  const { data: sessionData } = await supabase.auth.getSession();

  if (!sessionData.session) {
    return {};
  }

  const { data: userData, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return userData?.user;
}
