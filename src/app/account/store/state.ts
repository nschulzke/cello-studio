import { User } from '../types';

export interface AccountState {
  loggedIn: boolean;
  token: string | null;
  user: User | null;
}
