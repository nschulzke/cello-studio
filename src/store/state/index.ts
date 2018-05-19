import { Permissions, User } from '.';

export interface Session {
  loggedIn: boolean;
  permissions: Permissions;
  token: string | null;
  user: User | null;
}

export type StoreState = Session;

export * from './session';
export * from './types';
