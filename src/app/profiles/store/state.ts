import { Profile } from 'domain/types';

export interface ProfileState {
  profile: Profile | null;
  email: string;
}
