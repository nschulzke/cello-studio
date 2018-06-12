import * as actions from './actions';
import { Permissions, ContactType } from '../domain/types';
import { LoginResponse } from '../routes/types';

const RESPONSE: LoginResponse = {
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
  it('should create an update user action', () => {
    expect(actions.profileUpdated(RESPONSE)).toEqual({
      type: actions.ActionTypes.PROFILE_UPDATED,
      ...RESPONSE
    })
  })
});
