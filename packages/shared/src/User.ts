enum ContactType {
  NONE = 0,
  CALL = 1,
  EMAIL = 2,
  TEXT = 4,
  GROUP_TEXT = 8,
}

interface Credentials {
  email: string;
  password: string;
}

interface User {
  email: string;
  password: string;
  studentName: string;
  parentName: string;
  contactEmail: string;
  contactPhone: string;
  contactType: ContactType;
  permissions: Permissions;
}

enum Permissions {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  NONE = 'NONE',
}

export { User, Permissions, ContactType, Credentials };
