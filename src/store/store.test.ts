import { logIn, logOut } from "./actions";
import store from "./store";

describe('store', () => {
  it('should start out logged out', () => {
    expect(store.getState().loggedIn).toBe(false);
  });

  it('should log in successfully', () => {
    store.dispatch(logIn());
    expect(store.getState().loggedIn).toBe(true);
  });

  it('should log out successfully', () => {
    store.dispatch(logOut());
    expect(store.getState().loggedIn).toBe(false);
  });
})
