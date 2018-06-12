import { UsersState } from 'app/users/store/state';

export interface GlobalState {
}

export type StoreState =
  & GlobalState
  & UsersState;
