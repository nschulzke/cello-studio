import * as bcrypt from 'bcrypt';
import { ValueClass } from "app/shared/domain/Value";
import { Credentials, CredentialsRaw, CredentialsHashed } from './types';

function isRaw(credentials: Credentials): credentials is CredentialsRaw {
  return typeof (credentials as any).password === 'string';
}

function isHashed(credentials: Credentials): credentials is CredentialsHashed {
  return typeof (credentials as any).hash === 'string';
}

class CredentialsClass extends ValueClass implements CredentialsHashed {
  static create(email: string, password: string): CredentialsClass {
    return new CredentialsClass(email, bcrypt.hashSync(password, 10));
  }

  static hash(credentials: CredentialsRaw): CredentialsClass {
    return this.create(credentials.email, credentials.password);
  }

  constructor(
    public email: string,
    public hash: string,
  ) { super() };

  compare(test: Credentials) {
    if (test.email !== this.email) {
      return false;
    } else if (isRaw(test)) {
      return bcrypt.compareSync(test.password, this.hash);
    } else if (isHashed(test)) {
      return test.hash === this.hash;
    } else {
      return false;
    }
  }
}

export { Credentials, CredentialsRaw, CredentialsHashed, CredentialsClass };
