import * as actions from './actions';
import { Permissions } from './state';

describe('actions', () => {
  it('should create a login action', () => {
    expect(actions.logIn(Permissions.ADMIN)).toEqual({
      type: actions.ActionType.LOG_IN,
      permissions: Permissions.ADMIN
    });
  });
  it('should create a logout action', () => {
    expect(actions.logOut()).toEqual({
      type: actions.ActionType.LOG_OUT
    });
  })
});
