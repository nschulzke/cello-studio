import { prepareUsers } from '../index';
import { prepareTokens } from '../tokens';
import { credentials } from '../credentials';
import { Permissions } from '../_types';

describe('users', () => {
  let newUser = { email: 'test@example.com', password: 'mynewpass' };
  let userModel = { [newUser.email]: { name: 'Test' } };
  let fullUserModel = { [newUser.email]: { ...credentials.hash(newUser), name: 'Test', permissions: Permissions.STUDENT } };
  let tokens = prepareTokens({ secret: 'mysecret', duration: '1h' });
  let users = prepareUsers({ credentials, tokens });

  describe('register', () => {
    it('registers a new user successfully', () => {
      let result = users.register(userModel, newUser);
      expect(result.success).toBe(true);
      let newUserModel = result.data;
      expect(newUserModel[newUser.email].email).toEqual(newUser.email);
      expect(newUserModel[newUser.email].permissions).toEqual(Permissions.STUDENT);
    });

    it('does not modify any existing properties', () => {
      let result = users.register(userModel, newUser);
      expect(result.success).toBe(true);
      let newUserModel = result.data;
      expect(newUserModel[newUser.email].name).toEqual(userModel[newUser.email].name);
    })

    it('rejects if the user is already registered', () => {
      let failure = users.register(fullUserModel, newUser);
      expect(failure.success).toBe(false);
      expect(failure.data).toMatchSnapshot();
    });

    it('rejects an invalid email address', () => {
      let failure = users.register(fullUserModel, { email: 'email', password: 'testing' });
      expect(failure.success).toBe(false);
      expect(failure.data).toMatchSnapshot();
    });
  });

  describe('login', () => {
    it('accepts correct login information', () => {
      let result = users.login(fullUserModel, newUser)
      expect(result.success).toBe(true);
      expect(typeof result.data).toBe('object');
      expect(typeof result.data.token).toBe('string');
      expect(result.data.email).toEqual(newUser.email);
      expect(result.data.permissions).toEqual(Permissions.STUDENT);
    });

    it('rejects a bad email address', () => {
      let failure = users.login(fullUserModel, { ...newUser, email: 'hi!' });
      expect(failure.success).toBe(false);
      expect(failure.data).toMatchSnapshot();
    });

    it('rejects a bad email password', () => {
      let failure = users.login(fullUserModel, { ...newUser, password: 'hi!' });
      expect(failure.success).toBe(false);
      expect(failure.data).toMatchSnapshot();
    });
  });

  describe('fetchUser', () => {
    let token = tokens.encode(newUser.email);

    it('returns the user object', () => {
      expect(users.fetchUser(fullUserModel, token).data).toEqual(fullUserModel[newUser.email]);
    });

    it('rejects invalid tokens', () => {
      let failure = users.fetchUser(fullUserModel, 'badtoken');
      expect(failure.success).toBe(false);
      expect(failure.data).toMatchSnapshot();
    });
  });

  describe('permissions', () => {
    it('returns the permissions for a user', () => {
      let token = tokens.encode(newUser.email);
      expect(users.permissions(fullUserModel, token)).toEqual(Permissions.STUDENT);
    });

    it('returns none for an invalid user', () => {
      let token = tokens.encode('garbage');
      expect(users.permissions(fullUserModel, token)).toEqual(Permissions.NONE);
    });

    it('returns none for an invalid token', () => {
      let token = 'garbage';
      expect(users.permissions(fullUserModel, token)).toEqual(Permissions.NONE);
    });
  });
});
