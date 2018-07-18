import { getProfile } from '../getProfile';

describe('getProfile', () => {
  it('fills in default values', () => {
    let result = getProfile({});

    expect(result.name).toEqual('');
    expect(result.parentName).toEqual('');
  });

  it('returns the right values otherwise', () => {
    let result = getProfile({
      name: 'Test Me',
      parentName: 'Help Me'
    });

    expect(result.name).toEqual('Test Me');
    expect(result.parentName).toEqual('Help Me');
  });
});
