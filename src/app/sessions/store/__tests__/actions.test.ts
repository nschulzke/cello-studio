import * as actions from '../actions';
import { LoginResponse } from 'server/types';
import { Permissions } from 'domain/types';

const RESPONSE: LoginResponse = {
  email: 'test@test.com',
  token: 'test',
  permissions: Permissions.ADMIN,
}

describe('actions', () => {
  it('should create a login action', () => {
    expect(actions.loggedIn(RESPONSE)).toEqual({
      type: actions.ActionTypes.LOGGED_IN,
      ...RESPONSE
    });
  });
  it('should create a logout action', () => {
    expect(actions.loggedOut()).toEqual({
      type: actions.ActionTypes.LOGGED_OUT
    });
  });
});
