import { ReducerType } from "app/shared/store";
import { ActionTypes } from "./actions";
import { User } from '../domain/types';

export const loggedIn: ReducerType<boolean> = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      return true;
    case ActionTypes.LOGGED_OUT:
      return false;
    default:
      return state;
  }
}

export const token: ReducerType<string | null> = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      return action.token;
    case ActionTypes.LOGGED_OUT:
      return null;
    default:
      return state;
  }
}

export const user: ReducerType<User | null> = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      return action.user;
    case ActionTypes.LOGGED_OUT:
      return null;
    case ActionTypes.USER_UPDATED:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
}
