import * as actions from './actions';

describe('actions', () => {
  it('should create a login action', () => {
    expect(actions.logIn()).toEqual({
      type: actions.ActionType.LOG_IN
    });
  });
  it('should create a logout action', () => {
    expect(actions.logOut()).toEqual({
      type: actions.ActionType.LOG_OUT
    });
  })
});
