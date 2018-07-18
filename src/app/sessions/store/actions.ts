import { Action } from "redux";
import { LoginResponse, LoginRequest, RegisterRequest } from "server/types";
import { AsyncAction } from "app/shared/store/async";
import { StoreState } from "app/shared/store/state";
import axios from "axios";

export enum ActionTypes {
  LOGGED_IN = "LOGGED_IN",
  LOGGED_OUT = "LOGGED_OUT",
}

export type LoggedInAction = Action<ActionTypes.LOGGED_IN> & LoginResponse;

export type LoggedOutAction = Action<ActionTypes.LOGGED_OUT>;

export const loggedIn = (response: LoginResponse): LoggedInAction => {
  return {
    type: ActionTypes.LOGGED_IN,
    ...response,
  }
};

export const loginRequest = (credentials: LoginRequest): AsyncAction<StoreState, LoggedInAction> =>
  (dispatch, getState) => {
    axios.post<LoginResponse>('/api/users/login', credentials)
      .then((res) => {
        dispatch(loggedIn(res.data));
      }).catch(err => {
        alert(err.response.data);
      })
  }

export const registerRequest = (credentials: RegisterRequest): AsyncAction<StoreState, LoggedInAction> =>
  (dispatch, getState) => {
    axios.post<LoginResponse>('/api/users/register', credentials)
      .then((res) => {
        dispatch(loggedIn(res.data));
      }).catch(err => {
        alert(err.response.data);
      })
  }

export const loggedOut = (): LoggedOutAction => ({
  type: ActionTypes.LOGGED_OUT
});
