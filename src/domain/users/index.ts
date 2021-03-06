import * as Result from 'domain/helpers/Result';
import { profiles } from './profiles';
import { prepareUsers, prepareTokens, credentials } from './sessions';

export const hydrateUsers = (stream, state, secret) => {
  const tokens = prepareTokens({ secret, duration: '40d' });
  const users = prepareUsers({ credentials, tokens });

  return {
    register({ email, password }) {
      let result = users.register(state, { email, password });
      if (result.success) {
        state = result.data;
        stream.publish(state);
        return Result.Success(tokens.encode(email));
      } else {
        return result;
      }
    },

    login({ email, password }) {
      return users.login(state, { email, password })
    },

    fetchUser(token) {
      return users.fetchUser(state, token);
    },

    permissions(token) {
      return users.permissions(state, token);
    },

    getProfile(email) {
      if (typeof state[email] === 'object') {
        return Result.Success(profiles.get(state, email));
      } else {
        return Result.Failure('No such email address.');
      }
    },

    getProfiles() {
      return profiles.getAll(state);
    },

    updateProfile(email, profile) {
      if (typeof state[email] === 'object') {
        state = profiles.update(state, email, profile);
        stream.publish(state);
        return Result.Success(state[email]);
      } else {
        return Result.Failure('No such email address.');
      }
    }
  }
}
