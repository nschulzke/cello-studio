import * as reducers from './reducers';
import { GlobalActionTypes } from 'app/shared/store/actions';
import { ActionTypes, LogInAction } from './actions';
import { newUser } from '../helpers';

const LOG_IN: LogInAction = {
  type: ActionTypes.LOGGED_IN,
  token: 'testtoken',
  user: newUser('test@example.com', 'testpass'),
}

const UPDATED_USER = newUser('test@test.com', 'testpass');

describe('loggedIn reducer', () => {
  it('should have an initial state', () => {
    expect(reducers.loggedIn(undefined, {
      type: GlobalActionTypes.UNKNOWN,
    })).toBe(false);
  })
  it('should log in user', () => {
    expect(reducers.loggedIn(false, LOG_IN)).toBe(true);
  });
  it('should log out user', () => {
    expect(reducers.loggedIn(true, {
      type: ActionTypes.LOGGED_OUT,
    })).toBe(false);
  });
});

describe('token reducer', () => {
  it('should have an initial state', () => {
    expect(reducers.token(undefined, {
      type: GlobalActionTypes.UNKNOWN,
    })).toBe(null);
  })
  it('should log in user', () => {
    expect(reducers.token(null, LOG_IN)).toEqual(LOG_IN.token);
  });
  it('should log out user', () => {
    expect(reducers.token(LOG_IN.token, {
      type: ActionTypes.LOGGED_OUT,
    })).toBe(null);
  });
});

describe('user reducer', () => {
  it('should have an initial state', () => {
    expect(reducers.user(undefined, {
      type: GlobalActionTypes.UNKNOWN,
    })).toBe(null);
  })
  it('should log in user', () => {
    expect(reducers.user(null, LOG_IN)).toEqual(LOG_IN.user);
  });
  it('should log out user', () => {
    expect(reducers.user(LOG_IN.user, {
      type: ActionTypes.LOGGED_OUT,
    })).toBe(null);
  });
  it('should update a user', () => {
    expect(reducers.user(LOG_IN.user, {
      type: ActionTypes.UPDATE_USER,
      user: { email: 'test@test.com' },
    })).toEqual(UPDATED_USER)
  })
});
