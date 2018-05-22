import { ActionType, AllActions } from "store/actions";
import { Reducer } from "redux";
import { User } from 'studio-shared';

export const loggedIn: Reducer<boolean, AllActions> = (state = false, action) => {
  switch (action.type) {
    case ActionType.LOGGED_IN:
      return true;
    case ActionType.LOGGED_OUT:
      return false;
    default:
      return state;
  }
}

export const token: Reducer<string | null, AllActions> = (state = null, action) => {
  switch (action.type) {
    case ActionType.LOGGED_IN:
      return action.token;
    case ActionType.LOGGED_OUT:
      return null;
    default:
      return state;
  }
}

export const user: Reducer<User | null, AllActions> = (state = null, action) => {
  switch (action.type) {
    case ActionType.LOGGED_IN:
      return action.user;
    case ActionType.LOGGED_OUT:
      return null;
    case ActionType.UPDATE_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
}
