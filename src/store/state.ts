export enum Permissions {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT",
  NONE = "NONE",
}

export enum ContactType {
  NONE = 0,
  CALL = 1,
  EMAIL = 2,
  TEXT = 4,
  GROUP_TEXT = 8,
}

export interface User {
  email: string;
  password: string;
  studentName: string;
  parentName: string;
  contactEmail: string;
  contactPhone: string;
  contactType: ContactType;
}

export interface SwitchLink {
  path: string;
  exact?: boolean;
  component: React.SFC | React.ComponentClass
}

export interface SidebarLink {
  path: string;
  label: string;
  icon: string;
  color: string;
}
