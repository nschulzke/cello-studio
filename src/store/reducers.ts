import { LogInAction, ActionType, LogOutAction, AllActions } from "./actions";
import { Index } from "modules/helpers";
import { combineReducers, Reducer } from "redux";
import { Session } from "./state";

export function createReducer<T>(initialState: T, handlers: Index<Reducer<T>>): Reducer<T> {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

// ********
// Reducers
// ********
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
