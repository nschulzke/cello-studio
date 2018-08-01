import * as Result from 'domain/helpers/Result';
import { emailIsValid } from './validation';
import { Permissions } from './_types';

const emailIsFree = ({ userIndex, email, password }) =>
  userIndex[email] === undefined || userIndex[email].hash === undefined
    ? Result.Success(true)
    : Result.Failure('Email is in use.');

export const prepareUsers = ({ credentials, tokens }) => ({
  register: (userIndex, { email, password }) => (
    Result.all({ userIndex, email, password },
      emailIsFree,
      emailIsValid,
      ({ userIndex, email, password }) => (Result.Success({
        ...userIndex,
        [email]: { ...userIndex[email], ...credentials.hash({ email, password }), permissions: Permissions.STUDENT }
      }))
    )
  ),

  login: (userIndex, { email, password }) => {
    return credentials.compare({ email, password }, userIndex[email])
      ? Result.Success({ email, token: tokens.encode(email), permissions: userIndex[email].permissions })
      : Result.Failure('Invalid email or password.');
  },

  fetchUser: (userIndex, token) => {
    let result = tokens.decode(token);
    if (result === false) {
      return Result.Failure('Your token could not be validated.');
    } else {
      return Result.Success(userIndex[result]);
    }
  },

  permissions: (userIndex, token) => {
    let email = tokens.decode(token);
    if (email && userIndex[email] && userIndex[email].permissions) {
      return userIndex[email].permissions;
    } else {
      return Permissions.NONE;
    }
  }
});

export { prepareTokens } from './tokens';
export { credentials } from './credentials';
