import { User } from '@supabase/supabase-js';
import { UserDto } from '../services/types';

export function mapAuthenticatedUserToDto(user: User): UserDto | null {
  if (!user) {
    return null;
  }

  return {
    id: user?.id,
    email: user?.email,
    role: user?.role,
    displayName: user?.user_metadata.displayName,
    avatar: user?.user_metadata.avatar,
  };
}
