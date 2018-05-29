import { Entity } from "app/shared/domain/Entity";

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

interface CredentialsRaw {
  email: string;
  password: string;
}

interface CredentialsHashed {
  email: string;
  hash: string;
}

type Credentials = CredentialsRaw | CredentialsHashed;

interface Invite extends Entity {
  expiresOn: Date,
};

interface User extends Entity {
  credentials: Credentials;
  studentName: string;
  parentName: string;
  contactEmail: string;
  contactPhone: string;
  contactType: ContactType;
  permissions: Permissions;
}

function isUser(obj: any): obj is User {
  return typeof obj.email === 'string'
    && typeof obj.password === 'string'
    && typeof obj.parentName === 'string'
    && typeof obj.contactEmail === 'string'
    && typeof obj.contactType === 'number'
    && typeof obj.permissions === 'string'
    && ['ADMIN', 'STUDENT', 'NONE'].filter((item) => item === obj.permissions).length === 1;
};

export { ContactType, Permissions, CredentialsRaw, CredentialsHashed, Credentials, Invite, User, isUser }
