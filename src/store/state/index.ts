import { User } from 'types';

export interface Session {
  loggedIn: boolean;
  token: string | null;
  user: User | null;
}

export type StoreState = Session;

export * from './session';
export * from './types';
