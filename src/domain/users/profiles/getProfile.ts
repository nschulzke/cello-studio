import { ContactType, Profile } from "./_types";

export const getProfile: (profile: Partial<Profile>) => Profile = ({
  studentName = '',
  parentName = '',
  contactEmail = '',
  contactPhone = '',
  contactType = ContactType.NONE,
}) => ({
  studentName,
  parentName,
  contactEmail,
  contactPhone,
  contactType,
});
