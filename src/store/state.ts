export interface LoggedOut {
  loggedIn: false;
}

export interface LoggedIn {
  loggedIn: true;
  permissions: Permissions
}

export type Session = LoggedIn | LoggedOut

export enum Permissions {
  ADMIN,
  STUDENT
}
