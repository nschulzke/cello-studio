import * as reducers from './reducers';
import { GlobalActionTypes } from 'app/shared/store/actions';
import { ActionTypes, LoggedInAction, ProfileUpdatedAction } from './actions';
import { ContactType, Permissions } from 'domain/types';

const LOG_IN: LoggedInAction = {
  type: ActionTypes.LOGGED_IN,
  email: 'test@test.com',
  token: 'test',
  permissions: Permissions.ADMIN,
  profile: {
    studentName: '',
    parentName: '',
    contactEmail: '',
    contactPhone: '',
    contactType: ContactType.NONE,
  }
}

const UPDATE_PROFILE: ProfileUpdatedAction = {
  type: ActionTypes.PROFILE_UPDATED,
  profile: {
    studentName: 'Test Student',
    parentName: 'Test Parent',
    contactEmail: 'test@test.com',
    contactPhone: '801 555 5555',
    contactType: ContactType.EMAIL,
  }
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

describe('profile', () => {
  it('should have an initial state', () => {
    expect(reducers.profile(undefined, {
      type: GlobalActionTypes.UNKNOWN,
    })).toBe(null);
  })
  it('should log in user', () => {
    expect(reducers.profile(null, LOG_IN)).toEqual(LOG_IN.profile);
  });
  it('should log out user', () => {
    expect(reducers.profile(LOG_IN.profile, {
      type: ActionTypes.LOGGED_OUT,
    })).toBe(null);
  });
  it('should update a user', () => {
    expect(reducers.profile(LOG_IN.profile, UPDATE_PROFILE)).toEqual(UPDATE_PROFILE.profile);
  })
});
