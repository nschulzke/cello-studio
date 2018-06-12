import { Result, Index } from 'app/shared/types';
import { CredentialsRaw, User } from '../domain/types';
import { UserClass } from '../domain/User';
import { CredentialsClass } from '../domain/Credentials';
import JSONDB from 'app/shared/persistence/JSONDB';

const users: Index<UserClass> = {};

const database = new JSONDB<Index<User>>('users.json');
const userObjects: Index<User> = database.read();
Object.keys(userObjects).forEach(email => {
  users[email] = UserClass.deserialize(userObjects[email]);
})

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
    database.write(users);
    return Result.success(users[credentials.email]);
  } else {
    return Result.failure('Email in use');
  }
}

export { findUser, createUser };
