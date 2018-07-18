import { ActionTypes } from "./actions";
import { ReducerType } from "app/shared/store";
import { Permissions } from "domain/types";

export const permissions: ReducerType<Permissions> = (state = Permissions.NONE, action) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      return action.permissions;
    case ActionTypes.LOGGED_OUT:
      return Permissions.NONE;
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

export const email: ReducerType<string | null> = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      return action.email;
    case ActionTypes.LOGGED_OUT:
      return null;
    default:
      return state;
  }
}
