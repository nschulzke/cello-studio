import { Action } from "redux";
import axios from "axios";
import { StoreState } from "app/shared/store/state";
import { AsyncAction } from "app/shared/store/async";
import { User, LoginRequest, LoginResponse, RegisterRequest } from '../types';

export enum ActionTypes {
  LOGGED_IN = "LOGGED_IN",
  LOGGED_OUT = "LOGGED_OUT",
  UPDATE_USER = "UPDATE_USER",
}

export interface LogInAction extends Action<ActionTypes.LOGGED_IN> {
  token: string;
  user: User;
}

export interface LogOutAction extends Action<ActionTypes.LOGGED_OUT> { }

export interface UpdateUserAction extends Action<ActionTypes.UPDATE_USER> {
  user: Partial<User>
}

export const loggedIn = (token: string, user: User): LogInAction => {
  return {
    type: ActionTypes.LOGGED_IN,
    token,
    user
  }
};

export const loginRequest = (credentials: LoginRequest): AsyncAction<StoreState, LogInAction> =>
  (dispatch, getState) => {
    axios.post<LoginResponse>('/api/users/login', credentials)
      .then((res) => {
        dispatch(loggedIn(res.data.token, res.data.user));
      }).catch(err => {
        alert(err.response.data);
      })
  }

export const registerRequest = (credentials: RegisterRequest): AsyncAction<StoreState, LogInAction> =>
  (dispatch, getState) => {
    axios.post<LoginResponse>('/api/users/register', credentials)
      .then((res) => {
        dispatch(loggedIn(res.data.token, res.data.user));
      }).catch(err => {
        alert(err.response.data);
      })
  }

export const loggedOut = (): LogOutAction => ({
  type: ActionTypes.LOGGED_OUT
});

export const updateUser = (user: Partial<User>): UpdateUserAction => ({
  type: ActionTypes.UPDATE_USER,
  user
});

export type AccountActions =
  | LogInAction
  | LogOutAction
  | UpdateUserAction
