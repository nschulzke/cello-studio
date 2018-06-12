import { Action } from "redux";
import axios from "axios";
import { StoreState } from "app/shared/store/state";
import { AsyncAction } from "app/shared/store/async";
import { User, Profile } from '../domain/types';
import { LoginRequest, LoginResponse, RegisterRequest, UpdateProfileResponse } from '../routes/types';

export enum ActionTypes {
  LOGGED_IN = "LOGGED_IN",
  LOGGED_OUT = "LOGGED_OUT",
  USER_UPDATED = "UPDATE_USER",
}

export interface LogInAction extends Action<ActionTypes.LOGGED_IN> {
  token: string;
  user: User;
}

export interface LogOutAction extends Action<ActionTypes.LOGGED_OUT> { }

export interface UserUpdatedAction extends Action<ActionTypes.USER_UPDATED> {
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

export const updateProfileRequest = (email: string, profile: Partial<Profile>): AsyncAction<StoreState, UserUpdatedAction> =>
  (dispatch, getState) => {
    axios.post<UpdateProfileResponse>('/api/users/update-profile', { email, profile })
      .then((res) => {
        dispatch(userUpdated({ profile: res.data.profile }))
      }).catch(err => {
        alert(err.response.data);
      });
  }

export const userUpdated = (user: Partial<User>): UserUpdatedAction => ({
  type: ActionTypes.USER_UPDATED,
  user
});

export type AccountActions =
  | LogInAction
  | LogOutAction
  | UserUpdatedAction
