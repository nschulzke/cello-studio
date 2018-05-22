import * as actions from './actions';
import { Permissions } from 'studio-shared';
import { newUser } from '../helpers';

const user = newUser('test@example.com', 'test');

describe('actions', () => {
  it('should create a login action', () => {
    expect(actions.loggedIn('testtoken', user)).toEqual({
      type: actions.ActionType.LOGGED_IN,
      permissions: Permissions.ADMIN,
      token: 'testtoken',
      user
    });
  });
  it('should create a logout action', () => {
    expect(actions.loggedOut()).toEqual({
      type: actions.ActionType.LOGGED_OUT
    });
  });
  it('should create an update user action', () => {
    expect(actions.updateUser({ parentName: 'test' })).toEqual({
      type: actions.ActionType.UPDATE_USER,
      user: { parentName: 'test' },
    })
  })
});
