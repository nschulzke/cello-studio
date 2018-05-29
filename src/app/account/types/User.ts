import { TypeChecker } from 'app/shared/types';

interface Credentials {
  email: string;
  password: string;
}

enum ContactType {
  NONE = 0,
  CALL = 1,
  EMAIL = 2,
  TEXT = 4,
  GROUP_TEXT = 8,
}

enum Permissions {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  NONE = 'NONE',
}

interface User extends Credentials {
  studentName: string;
  parentName: string;
  contactEmail: string;
  contactPhone: string;
  contactType: ContactType;
  permissions: Permissions;
}

const User: TypeChecker<User> = {
  check: (user: User) => user,
  is: (obj: any): obj is User => {
    return typeof obj.email === 'string'
      && typeof obj.password === 'string'
      && typeof obj.parentName === 'string'
      && typeof obj.contactEmail === 'string'
      && typeof obj.contactType === 'number'
      && typeof obj.permissions === 'string'
      && ['ADMIN', 'STUDENT', 'NONE'].filter((item) => item === obj.permissions).length === 1;
  },
};

export { User, Credentials, Permissions, ContactType };
