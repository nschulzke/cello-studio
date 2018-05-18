import * as reducers from './session';
import { ActionType, LogInAction } from 'store/actions';
import { Permissions } from 'store/state';
import { newUser } from '../helpers';

const LOG_IN: LogInAction = {
  type: ActionType.LOG_IN,
  permissions: Permissions.ADMIN,
  token: 'testtoken',
  user: newUser('test@example.com', 'testpass'),
}

describe('loggedIn reducer', () => {
  it('should have an initial state', () => {
    expect(reducers.loggedIn(undefined, {
      type: ActionType.UNKNOWN,
    })).toBe(false);
  })
  it('should log in user', () => {
    expect(reducers.loggedIn(false, LOG_IN)).toBe(true);
  });
  it('should log out user', () => {
    expect(reducers.loggedIn(true, {
      type: ActionType.LOG_OUT,
    })).toBe(false);
  });
});

describe('permissions reducer', () => {
  it('should have an initial state', () => {
    expect(reducers.permissions(undefined, {
      type: ActionType.UNKNOWN,
    })).toBe(Permissions.NONE);
  })
  it('should log in user', () => {
    expect(reducers.permissions(Permissions.NONE, LOG_IN)).toEqual(LOG_IN.permissions);
  });
  it('should log out user', () => {
    expect(reducers.permissions(LOG_IN.permissions, {
      type: ActionType.LOG_OUT,
    })).toBe(Permissions.NONE);
  });
});

describe('token reducer', () => {
  it('should have an initial state', () => {
    expect(reducers.token(undefined, {
      type: ActionType.UNKNOWN,
    })).toBe(null);
  })
  it('should log in user', () => {
    expect(reducers.token(null, LOG_IN)).toEqual(LOG_IN.token);
  });
  it('should log out user', () => {
    expect(reducers.token(LOG_IN.token, {
      type: ActionType.LOG_OUT,
    })).toBe(null);
  });
});

describe('user reducer', () => {
  it('should have an initial state', () => {
    expect(reducers.user(undefined, {
      type: ActionType.UNKNOWN,
    })).toBe(null);
  })
  it('should log in user', () => {
    expect(reducers.user(null, LOG_IN)).toEqual(LOG_IN.user);
  });
  it('should log out user', () => {
    expect(reducers.user(LOG_IN.user, {
      type: ActionType.LOG_OUT,
    })).toBe(null);
  });
});
