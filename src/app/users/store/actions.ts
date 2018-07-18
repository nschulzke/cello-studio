import { Action } from "redux";
import axios from "axios";
import { StoreState } from "app/shared/store/state";
import { AsyncAction } from "app/shared/store/async";
import { LoginRequest, LoginResponse, RegisterRequest, UpdateProfileResponse } from 'server/types';
import { Profile } from "domain/types";

export enum ActionTypes {
  LOGGED_IN = "LOGGED_IN",
  LOGGED_OUT = "LOGGED_OUT",
  PROFILE_UPDATED = "PROFILE_UPDATED",
}

export type LoggedInAction = Action<ActionTypes.LOGGED_IN> & LoginResponse;

export type ProfileUpdatedAction = Action<ActionTypes.PROFILE_UPDATED> & UpdateProfileResponse;

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

export const updateProfileRequest = (email: string, profile: Partial<Profile>): AsyncAction<StoreState, ProfileUpdatedAction> =>
  (dispatch, getState) => {
    axios.post<UpdateProfileResponse>('/api/users/update-profile', { email, profile })
      .then((res) => {
        dispatch(profileUpdated({ profile: res.data.profile }))
      }).catch(err => {
        alert(err.response.data);
      });
  }

export const profileUpdated = (response: UpdateProfileResponse): ProfileUpdatedAction => ({
  type: ActionTypes.PROFILE_UPDATED,
  ...response,
});

export type UserActions =
  | LoggedInAction
  | LoggedOutAction
  | ProfileUpdatedAction
