import { Permissions } from "domain/types";

export const permissionsCheck = (users) => (level: Permissions) => (req, res, next) => {
  let token = req.cookies.auth ? req.cookies.auth.token : undefined;
  let permissions = users.permissions(token);
  if (
    level === Permissions.ADMIN && permissions !== Permissions.ADMIN
    || level === Permissions.STUDENT && permissions === Permissions.NONE) {
    res.status(400).send('You are not authorized to perform this action.');
  } else {
    next();
  }
}
