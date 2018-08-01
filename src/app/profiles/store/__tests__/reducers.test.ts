import * as reducers from '../reducers';
import { GlobalActionTypes } from 'app/shared/store/actions';
import { ActionTypes, ProfileUpdatedAction } from '../actions';
import { ContactType } from 'domain/types';

const INITIAL_PROFILE = {
  profile: {
    name: '',
    email: '',
    parentName: '',
    contactEmail: '',
    contactPhone: '',
    contactType: ContactType.NONE,
  }
}

const UPDATE_PROFILE: ProfileUpdatedAction = {
  type: ActionTypes.PROFILE_UPDATED,
  profile: {
    name: 'Test Student',
    email: 'test@test.com',
    parentName: 'Test Parent',
    contactEmail: 'test@test.com',
    contactPhone: '801 555 5555',
    contactType: ContactType.EMAIL,
  }
}

describe('profile', () => {
  it('should have an initial state', () => {
    expect(reducers.profile(undefined, {
      type: GlobalActionTypes.UNKNOWN,
    })).toEqual({
      name: '',
      email: '',
      parentName: '',
      contactEmail: '',
      contactPhone: '',
      contactType: 0,
    });
  })

  it('should update a user', () => {
    expect(reducers.profile(INITIAL_PROFILE.profile, UPDATE_PROFILE)).toEqual(UPDATE_PROFILE.profile);
  })
});
