import * as reducers from './reducers';
import { ActionType } from './actions';
import { Permissions } from './state';

describe('reducers', () => {
  it('should have an initial state', () => {
    expect(reducers.session(undefined, {
      type: ActionType.UNKNOWN,
    })).toEqual({ loggedIn: false });
  })
  it('should log in user', () => {
    expect(reducers.session({ loggedIn: false }, {
      type: ActionType.LOG_IN,
      permissions: Permissions.ADMIN
    })).toEqual({
      loggedIn: true,
      permissions: Permissions.ADMIN
    });
  });
  it('should log out user', () => {
    expect(reducers.session({ loggedIn: true, permissions: Permissions.ADMIN }, {
      type: ActionType.LOG_OUT,
    })).toEqual({ loggedIn: false });
  });
});
