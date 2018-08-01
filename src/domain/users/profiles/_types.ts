export enum ContactType {
  NONE = 0,
  CALL = 1,
  EMAIL = 2,
  TEXT = 4,
  GROUP_TEXT = 8,
}

export interface Profile {
  name: string;
  email: string;
  parentName: string;
  contactEmail: string;
  contactPhone: string;
  contactType: ContactType;
}
