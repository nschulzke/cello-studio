import { Permissions } from "domain/types";

export interface SessionState {
  token: string | null;
  email: string | null;
  permissions: Permissions;
}
