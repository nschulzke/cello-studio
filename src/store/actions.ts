import { Action } from "redux";

export enum ActionType {
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
  UNKNOWN = "__ANY_UNKNOWN_ACTION__"
}

export interface LogInAction extends Action<ActionType.LOG_IN> { }

export interface LogOutAction extends Action<ActionType.LOG_OUT> { }

export const logIn = (): LogInAction => ({
  type: ActionType.LOG_IN
})

export const logOut = (): LogOutAction => ({
  type: ActionType.LOG_OUT
})

export interface UnknownAction { // Enforces handling of default case
  type: ActionType.UNKNOWN
}
