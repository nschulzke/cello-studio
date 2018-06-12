import * as reducers from './reducers';
import { GlobalActionTypes } from 'app/shared/store/actions';
import { ActionTypes, LogInAction } from './actions';
import { UserClass } from '../domain/User';

const INITIAL_USER = new UserClass({ email: 'test@example.com', hash: 'test' });
const UPDATED_USER = new UserClass({ email: 'test@example.com', hash: 'test' });
UPDATED_USER.id = INITIAL_USER.id;
UPDATED_USER.profile.parentName = 'test';

const LOG_IN: LogInAction = {
  type: ActionTypes.LOGGED_IN,
  token: 'testtoken',
  user: INITIAL_USER,
}

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
      type: ActionTypes.USER_UPDATED,
      user: { profile: { ...LOG_IN.user.profile, parentName: 'test' } },
    })).toEqual(UPDATED_USER)
  })
});
