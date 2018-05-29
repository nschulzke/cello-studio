import { AccountState } from 'app/account/store/state';

export interface GlobalState {
}

export type StoreState =
  & GlobalState
  & AccountState;
