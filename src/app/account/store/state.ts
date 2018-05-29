import { User } from '../domain/types';

export interface AccountState {
  loggedIn: boolean;
  token: string | null;
  user: User | null;
}
