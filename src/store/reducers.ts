import { ActionType, AllActions } from "./actions";
import { combineReducers, Reducer } from "redux";
import { Session } from "./state";

export const session: Reducer<Session, AllActions> = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case ActionType.LOG_IN:
      return { loggedIn: true, permissions: action.permissions };
    case ActionType.LOG_OUT:
      return { loggedIn: false };
    default:
      return state;
  }
}

export default combineReducers({ session });
