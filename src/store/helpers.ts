import { ContactType, User } from "./state";

export function newUser(email: string, password: string): User {
  return {
    email,
    password,
    studentName: '',
    parentName: '',
    contactEmail: '',
    contactPhone: '',
    contactType: ContactType.NONE
  }
}

export function contactType(type: ContactType): string {
  const result = [];
  if (type & ContactType.CALL) {
    result.push('Call');
  }
  if (type & ContactType.TEXT) {
    result.push('Text');
  }
  if (type & ContactType.EMAIL) {
    result.push('Email');
  }
  if (type & ContactType.GROUP_TEXT) {
    result.push('Group Text');
  }
  const value = result.join(', ');
  return value.length ? value : 'None';
}
