import supabase from './supabase';
import { CreateUserDto } from './types';

export async function signUp({ displayName, email, password }: CreateUserDto) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { displayName, avatar: '' } },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
