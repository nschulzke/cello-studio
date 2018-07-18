import { ContactType, Profile } from "./_types";

export const getProfile: (profile: Partial<Profile>) => Profile = ({
  name = '',
  parentName = '',
  contactEmail = '',
  contactPhone = '',
  contactType = ContactType.NONE,
}) => ({
  name,
  parentName,
  contactEmail,
  contactPhone,
  contactType,
});
