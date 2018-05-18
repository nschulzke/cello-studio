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
