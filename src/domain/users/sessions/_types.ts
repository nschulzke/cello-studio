export enum Permissions {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  NONE = 'NONE',
}

export interface CredentialsRaw {
  email: string;
  password: string;
}

export interface CredentialsHashed {
  email: string;
  hash: string;
}
