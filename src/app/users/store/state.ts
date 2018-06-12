import { Permissions, Profile } from '../domain/types';

export interface UsersState {
  token: string | null;
  email: string | null;
  permissions: Permissions;
  profile: Profile | null;
}
