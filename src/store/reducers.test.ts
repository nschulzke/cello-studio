import * as reducers from './reducers';
import { ActionType } from './actions';

describe('reducers', () => {
  it('should have an initial state', () => {
    expect(reducers.loggedIn(undefined, {
      type: ActionType.UNKNOWN,
    })).toEqual(false);
  })
  it('should log in user', () => {
    expect(reducers.loggedIn(false, {
      type: ActionType.LOG_IN,
    })).toEqual(true);
  });
  it('should log out user', () => {
    expect(reducers.loggedIn(true, {
      type: ActionType.LOG_OUT,
    })).toEqual(false);
  });
});
