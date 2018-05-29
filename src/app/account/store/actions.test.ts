import * as actions from './actions';
import { newUser } from '../helpers';

const user = newUser('test@example.com', 'test');

describe('actions', () => {
  it('should create a login action', () => {
    expect(actions.loggedIn('testtoken', user)).toEqual({
      type: actions.ActionTypes.LOGGED_IN,
      token: 'testtoken',
      user
    });
  });
  it('should create a logout action', () => {
    expect(actions.loggedOut()).toEqual({
      type: actions.ActionTypes.LOGGED_OUT
    });
  });
  it('should create an update user action', () => {
    expect(actions.updateUser({ parentName: 'test' })).toEqual({
      type: actions.ActionTypes.UPDATE_USER,
      user: { parentName: 'test' },
    })
  })
});
