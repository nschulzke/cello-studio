import { ProfileState } from 'app/profiles/store/state';
import { SessionState } from 'app/sessions/store/state';

export interface GlobalState {
}

export type StoreState =
  & GlobalState
  & ProfileState
  & SessionState;
