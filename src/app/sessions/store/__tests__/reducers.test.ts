import { Permissions } from "domain/types";
import { GlobalActionTypes } from "app/shared/store/actions";
import { ActionTypes, LoggedInAction } from "../actions";
import * as reducers from '../reducers';

const LOG_IN: LoggedInAction = {
  type: ActionTypes.LOGGED_IN,
  email: 'test@test.com',
  token: 'test',
  permissions: Permissions.ADMIN,
}


describe('email reducer', () => {
  it('should have an initial state', () => {
    expect(reducers.email(undefined, {
      type: GlobalActionTypes.UNKNOWN,
    })).toBe(null);
  })
  it('should log in user', () => {
    expect(reducers.email(null, LOG_IN)).toEqual(LOG_IN.email);
  });
  it('should log out user', () => {
    expect(reducers.email(LOG_IN.token, {
      type: ActionTypes.LOGGED_OUT,
    })).toBe(null);
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

describe('permissions reducer', () => {
  it('should have an initial state', () => {
    expect(reducers.permissions(undefined, {
      type: GlobalActionTypes.UNKNOWN,
    })).toBe('NONE');
  })
  it('should log in user', () => {
    expect(reducers.permissions(Permissions.NONE, LOG_IN)).toEqual(LOG_IN.permissions);
  });
  it('should log out user', () => {
    expect(reducers.permissions(LOG_IN.permissions, {
      type: ActionTypes.LOGGED_OUT,
    })).toBe(Permissions.NONE);
  });
});
