import { ActionType, AllActions } from "store/actions";
import { Reducer } from "redux";
import { Permissions, User } from 'shared';

export const loggedIn: Reducer<boolean, AllActions> = (state = false, action) => {
  switch (action.type) {
    case ActionType.LOG_IN:
      return true;
    case ActionType.LOG_OUT:
      return false;
    default:
      return state;
  }
}

export const permissions: Reducer<Permissions, AllActions> = (state = Permissions.NONE, action) => {
  switch (action.type) {
    case ActionType.LOG_IN:
      return action.permissions;
    case ActionType.LOG_OUT:
      return Permissions.NONE;
    default:
      return state;
  }
}

export const token: Reducer<string | null, AllActions> = (state = null, action) => {
  switch (action.type) {
    case ActionType.LOG_IN:
      return action.token;
    case ActionType.LOG_OUT:
      return null;
    default:
      return state;
  }
}

export const user: Reducer<User | null, AllActions> = (state = null, action) => {
  switch (action.type) {
    case ActionType.LOG_IN:
      return action.user;
    case ActionType.LOG_OUT:
      return null;
    case ActionType.UPDATE_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
}
