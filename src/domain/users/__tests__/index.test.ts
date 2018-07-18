import { hydrateUsers } from '../index';
import { prepareTokens } from '../sessions/tokens';
import { credentials } from '../sessions/credentials';
import { EventStream } from 'domain/helpers/EventStream';
import { Result } from 'domain/helpers/Result';
import { Permissions } from 'domain/types';

describe('index', () => {
  const secret = 'testpass';
  let newUser = { email: 'test@example.com', password: 'mynewpass' };
  let userModel = {};
  let fullUserModel = { [newUser.email]: { ...credentials.hash(newUser), name: 'Test', parentName: 'Test2', permissions: Permissions.STUDENT } };
  let stream = EventStream();

  describe('register', () => {
    it('registers a new user successfully', () => {
      let users = hydrateUsers(stream, userModel, secret);
      let result = users.register(newUser);
      expect(result.success).toBe(true);
      let token = result.data;
      expect(typeof token).toBe('string');
    });

    it('sends events to the stream', async () => {
      function checkStream(): Promise<Result<any>> {
        return new Promise((resolve) => {
          let unsub = stream.subscribe((event) => {
            resolve(event);
          });
          let users = hydrateUsers(stream, userModel, secret);
          users.register(newUser);
          unsub();
        });
      }

      let result = await checkStream();
      expect(result[newUser.email]).toBeTruthy();
    });

    it('rejects if the user is already registered', () => {
      let users = hydrateUsers(stream, fullUserModel, secret);
      let failure = users.register(newUser);
      expect(failure.success).toBe(false);
      expect(failure.data).toMatchSnapshot();
    });

    it('rejects an invalid email address', () => {
      let users = hydrateUsers(stream, fullUserModel, secret);
      let failure = users.register({ email: 'email', password: 'testing' });
      expect(failure.success).toBe(false);
      expect(failure.data).toMatchSnapshot();
    });
  });

  describe('login', () => {
    it('accepts correct login information', () => {
      let users = hydrateUsers(stream, fullUserModel, secret);
      let result = users.login(newUser)
      expect(result.success).toBe(true);
      expect(typeof result.data).toBe('object');
      expect(typeof result.data.token).toBe('string');
      expect(result.data.email).toEqual(newUser.email);
      expect(result.data.permissions).toEqual(Permissions.STUDENT);
    });

    it('rejects a bad email address', () => {
      let users = hydrateUsers(stream, fullUserModel, secret);
      let failure = users.login({ ...newUser, email: 'hi!' });
      expect(failure.success).toBe(false);
      expect(failure.data).toMatchSnapshot();
    });

    it('rejects a bad email password', () => {
      let users = hydrateUsers(stream, fullUserModel, secret);
      let failure = users.login({ ...newUser, password: 'hi!' });
      expect(failure.success).toBe(false);
      expect(failure.data).toMatchSnapshot();
    });
  });

  describe('verify', () => {
    let tokens = prepareTokens({ secret, duration: '1h' });
    let users = hydrateUsers(stream, fullUserModel, secret);
    let token = tokens.encode(newUser.email);

    it('returns the user object', () => {
      expect(users.fetchUser(token).data).toEqual(fullUserModel[newUser.email]);
    });

    it('rejects invalid tokens', () => {
      let failure = users.fetchUser('badtoken');
      expect(failure.success).toBe(false);
      expect(failure.data).toMatchSnapshot();
    });
  });

  describe('profiles', () => {
    describe('get', () => {
      it('gets a student profile from the index', () => {
        let users = hydrateUsers(stream, fullUserModel, secret);
        let got = users.getProfile(newUser.email);
        expect((got as any).hash).toEqual(undefined);
        expect(got.success).toBe(true);
        expect(got.data.name).toEqual('Test');
        expect(got.data.parentName).toEqual('Test2');
        expect(got.data.contactEmail).toEqual('');
      });

      it('returns a failure if the email is bad', () => {
        let users = hydrateUsers(stream, fullUserModel, secret);
        let got = users.getProfile('bademail');
        expect(got.success).toBe(false);
      });
    });

    describe('update', () => {
      it('updates a student profile', () => {
        let users = hydrateUsers(stream, fullUserModel, secret);
        let newContactEmail = 'test@example.com';
        let result = users.updateProfile(newUser.email, { contactEmail: newContactEmail });
        expect(result.success).toBe(true);
        expect(result.data.contactEmail).toEqual(newContactEmail);
        expect(users.getProfile(newUser.email).data.contactEmail).toEqual(newContactEmail);
      });

      it('returns a failure if the email is bad', () => {
        let users = hydrateUsers(stream, fullUserModel, secret);
        let got = users.updateProfile('bademail', {});
        expect(got.success).toBe(false);
      });
    });
  });
});
