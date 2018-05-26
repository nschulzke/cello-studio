import { Action } from "redux";
import { User, REST } from 'types';
import { StoreState } from "../state";
import axios from "axios";
import { AsyncAction } from "../async";

export enum ActionType {
  LOGGED_IN = "LOGGED_IN",
  LOGGED_OUT = "LOGGED_OUT",
  UPDATE_USER = "UPDATE_USER",
  UNKNOWN = "__ANY_UNKNOWN_ACTION__"
}

export interface LogInAction extends Action<ActionType.LOGGED_IN> {
  token: string;
  user: User;
}

export interface LogOutAction extends Action<ActionType.LOGGED_OUT> { }

export interface UpdateUserAction extends Action<ActionType.UPDATE_USER> {
  user: Partial<User>
}

export const loggedIn = (token: string, user: User): LogInAction => {
  return {
    type: ActionType.LOGGED_IN,
    token,
    user
  }
};

export const loginRequest = (credentials: REST.LoginRequest): AsyncAction<StoreState, LogInAction> =>
  (dispatch, getState) => {
    axios.post<REST.LoginResponse>('/api/users/login', credentials)
      .then((res) => {
        dispatch(loggedIn(res.data.token, res.data.user));
      }).catch(err => {
        alert(err.response.data);
      })
  }

export const registerRequest = (credentials: REST.RegisterRequest): AsyncAction<StoreState, LogInAction> =>
  (dispatch, getState) => {
    axios.post<REST.LoginResponse>('/api/users/register', credentials)
      .then((res) => {
        dispatch(loggedIn(res.data.token, res.data.user));
      }).catch(err => {
        alert(err.response.data);
      })
  }

export const loggedOut = (): LogOutAction => ({
  type: ActionType.LOGGED_OUT
});

export const updateUser = (user: Partial<User>): UpdateUserAction => ({
  type: ActionType.UPDATE_USER,
  user
});

export interface UnknownAction { // Enforces handling of default case
  type: ActionType.UNKNOWN
}

export type AllActions =
  | UnknownAction
  | LogInAction
  | LogOutAction
  | UpdateUserAction
