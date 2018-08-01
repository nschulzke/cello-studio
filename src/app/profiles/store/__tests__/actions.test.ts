import * as actions from '../actions';
import { ContactType } from 'domain/types';

const RESPONSE = {
  profile: {
    name: '',
    email: '',
    parentName: '',
    contactEmail: '',
    contactPhone: '',
    contactType: ContactType.NONE,
  }
}

describe('actions', () => {
  it('should create an update user action', () => {
    expect(actions.profileUpdated(RESPONSE)).toEqual({
      type: actions.ActionTypes.PROFILE_UPDATED,
      ...RESPONSE
    })
  })
});
