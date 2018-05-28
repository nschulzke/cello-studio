import { Middleware, Action, AnyAction } from "redux";

export interface AsyncDispatch<S, A extends Action, R = A> {
  <T extends A>(action: T): T
  (asyncAction: AsyncAction<S, A>): void;
}

export type AsyncAction<S, A extends Action> = (
  dispatch: AsyncDispatch<S, A>,
  getState: () => S
) => void;

export type AsyncMiddleware<S = {}, A extends Action = AnyAction> = Middleware<AsyncDispatch<S, A>, S, AsyncDispatch<S, A>>;

function asyncMiddleware<S = {}, A extends Action = AnyAction>(): AsyncMiddleware<S, A> {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };
}

const async = asyncMiddleware();

export default async;
