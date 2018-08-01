import { ReducerType } from "app/shared/store";
import { ActionTypes } from "./actions";
import { Profile } from "domain/types";

export const profile: ReducerType<Profile> = (state = {
  name: '',
  email: '',
  parentName: '',
  contactEmail: '',
  contactPhone: '',
  contactType: 0,
}, action) => {
  switch (action.type) {
    case ActionTypes.PROFILE_UPDATED:
      return Object.assign({}, state, action.profile);
    default:
      return state;
  }
}
