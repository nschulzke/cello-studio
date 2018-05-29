import { Result, Index } from 'app/shared/types';
import { CredentialsRaw } from '../domain/types';
import { UserClass } from '../domain/User';
import { CredentialsClass } from '../domain/Credentials';

const users: Index<UserClass> = {};

async function findUser(email: string): Promise<Result<UserClass>> {
  if (users[email]) {
    return Result.success(users[email]);
  } else {
    return Result.failure('No such email address');
  }
}

async function createUser(credentials: CredentialsRaw): Promise<Result<UserClass>> {
  if (users[credentials.email] === undefined) {
    users[credentials.email] = new UserClass(CredentialsClass.hash(credentials));
    return Result.success(users[credentials.email]);
  } else {
    return Result.failure('Email in use');
  }
}

export { findUser, createUser };
