import { Action } from "redux";
import axios from "axios";
import { StoreState } from "app/shared/store/state";
import { AsyncAction } from "app/shared/store/async";
import { UpdateProfileResponse } from 'server/types';
import { Profile } from "domain/types";

export enum ActionTypes {
  PROFILE_UPDATED = "PROFILE_UPDATED",
}

export type ProfileUpdatedAction = Action<ActionTypes.PROFILE_UPDATED> & UpdateProfileResponse;


export const getProfileRequest = (): AsyncAction<StoreState, ProfileUpdatedAction> =>
  (dispatch, getState) => {
    axios.get('/api/users/profile')
      .then(res => {
        dispatch(profileUpdated({ profile: res.data }));
      }).catch(err => {
        alert(err.response.data);
      });
  }

export const updateProfileRequest = (email: string, profile: Partial<Profile>): AsyncAction<StoreState, ProfileUpdatedAction> =>
  (dispatch, getState) => {
    axios.post<UpdateProfileResponse>('/api/users/profile', { email, profile })
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
  | ProfileUpdatedAction
