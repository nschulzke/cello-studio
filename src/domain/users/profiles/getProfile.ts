import { ContactType, Profile } from "./_types";

export const getProfile: (profile: Partial<Profile>) => Profile = ({
  name = '',
  email = '',
  parentName = '',
  contactEmail = '',
  contactPhone = '',
  contactType = ContactType.NONE,
}) => ({
  name,
  email,
  parentName,
  contactEmail,
  contactPhone,
  contactType,
});
