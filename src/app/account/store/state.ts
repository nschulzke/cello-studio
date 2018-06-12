import { Permissions, Profile } from '../domain/types';

export interface AccountState {
  token: string | null;
  email: string | null;
  permissions: Permissions;
  profile: Profile | null;
}
