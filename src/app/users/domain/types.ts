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

interface Profile {
  studentName: string;
  parentName: string;
  contactEmail: string;
  contactPhone: string;
  contactType: ContactType;
}

interface User extends Entity {
  credentials: CredentialsHashed;
  profile: Profile;
  permissions: Permissions;
}

const typeIs = {
  User(obj: any): obj is User {
    return typeIs.CredentialsHashed(obj.credentials)
      && typeIs.Profile(obj.profile)
      && obj.permissions in Permissions
  },
  Profile(obj: any): obj is Profile {
    return typeof obj.studentName === 'string'
      && typeof obj.parentName === 'string'
      && typeof obj.contactEmail === 'string'
      && typeof obj.contactPhone === 'string'
      && obj.contactType in ContactType;
  },
  CredentialsHashed(obj: any): obj is CredentialsHashed {
    return typeof obj.email === 'string'
      && typeof obj.hash === 'string';
  }
}

export { typeIs, ContactType, Permissions, CredentialsRaw, CredentialsHashed, Credentials, Invite, User, Profile }
