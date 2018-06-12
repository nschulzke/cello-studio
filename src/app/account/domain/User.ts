import { EntityClass } from "app/shared/domain/Entity";
import { ContactType, Permissions, User, CredentialsHashed } from "./types";
import { CredentialsClass } from "./Credentials";

class UserClass extends EntityClass implements User {
  public credentials: CredentialsClass;

  constructor(
    credentials: CredentialsHashed,
    public studentName: string = '',
    public parentName: string = '',
    public contactEmail: string = '',
    public contactPhone: string = '',
    public contactType: ContactType = ContactType.NONE,
    public permissions: Permissions = Permissions.STUDENT,
  ) {
    super();
    this.credentials = new CredentialsClass(credentials.email, credentials.hash);
  };

  static deserialize(user: User) {
    let retUser = new UserClass(
      user.credentials as CredentialsHashed,
      user.studentName,
      user.parentName,
      user.contactEmail,
      user.contactPhone,
      user.contactType,
      user.permissions
    )
    retUser.id = user.id;
    return retUser;
  }
}

export { User, UserClass };