import { User, Index, Result, Credentials, ContactType, Permissions } from 'studio-shared';

const users: Index<User> = {};

async function findUser(email: string): Promise<Result<User>> {
  if (users[email]) {
    return Result.success(users[email]);
  } else {
    return Result.failure('No such email address');
  }
}

async function createUser(credentials: Credentials): Promise<Result<User>> {
  if (users[credentials.email] === undefined) {
    users[credentials.email] = {
      email: credentials.email,
      password: credentials.password,
      studentName: '',
      parentName: '',
      contactEmail: credentials.email,
      contactPhone: '',
      contactType: ContactType.NONE,
      permissions: Permissions.STUDENT,
    };
    return Result.success(users[credentials.email]);
  } else {
    return Result.failure('Email in use');
  }
}

export { findUser, createUser };
