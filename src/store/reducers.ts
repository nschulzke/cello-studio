import { LogInAction, ActionType, LogOutAction } from "./actions";
import { Index } from "modules/helpers";
import { combineReducers, Reducer } from "redux";

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
export const loggedIn = createReducer(false, {
  [ActionType.LOG_IN]: (state, action: LogInAction) => {
    return true;
  },
  [ActionType.LOG_OUT]: (state, action: LogOutAction) => {
    return false;
  }
});

export default combineReducers({ loggedIn });
