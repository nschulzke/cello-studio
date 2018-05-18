import * as actions from './actions';
import { Permissions } from 'store/state';
import { newUser } from '../helpers';

const user = newUser('test@example.com', 'test');

describe('actions', () => {
  it('should create a login action', () => {
    expect(actions.logIn(Permissions.ADMIN, 'testtoken', user)).toEqual({
      type: actions.ActionType.LOG_IN,
      permissions: Permissions.ADMIN,
      token: 'testtoken',
      user
    });
  });
  it('should create a logout action', () => {
    expect(actions.logOut()).toEqual({
      type: actions.ActionType.LOG_OUT
    });
  })
});
