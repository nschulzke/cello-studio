import { ActionTypes, LogInAction, LogOutAction, UpdateUserAction } from 'app/account/store/actions';

export enum GlobalActionTypes {
  UNKNOWN = "__ANY_UNKNOWN_ACTION__"
}

export interface UnknownAction { // Enforces handling of default case
  type: GlobalActionTypes.UNKNOWN
}

export type ActionType = ActionTypes | ActionTypes;

export type AllActions =
  | UnknownAction
  | LogInAction
  | LogOutAction
  | UpdateUserAction
