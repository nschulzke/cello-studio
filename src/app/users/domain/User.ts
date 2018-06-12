import { EntityClass } from "app/shared/domain/Entity";
import { ContactType, Permissions, User, CredentialsHashed, Profile } from "./types";
import { CredentialsClass } from "./Credentials";

class UserClass extends EntityClass implements User {
  public credentials: CredentialsClass;

  constructor(
    credentials: CredentialsHashed,
    public profile: Profile = {
      studentName: '',
      parentName: '',
      contactEmail: '',
      contactPhone: '',
      contactType: ContactType.NONE,
    },
    public permissions: Permissions = Permissions.STUDENT,
  ) {
    super();
    this.credentials = new CredentialsClass(credentials.email, credentials.hash);
  };

  static deserialize(user: User) {
    let retUser = new UserClass(
      user.credentials as CredentialsHashed,
      user.profile,
      user.permissions
    )
    retUser.id = user.id;
    return retUser;
  }
}

export { User, UserClass };
