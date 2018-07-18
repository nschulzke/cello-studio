import { getProfile } from '../getProfile';

describe('getProfile', () => {
  it('fills in default values', () => {
    let result = getProfile({});

    expect(result.studentName).toEqual('');
    expect(result.parentName).toEqual('');
  });

  it('returns the right values otherwise', () => {
    let result = getProfile({
      studentName: 'Test Me',
      parentName: 'Help Me'
    });

    expect(result.studentName).toEqual('Test Me');
    expect(result.parentName).toEqual('Help Me');
  });
});
