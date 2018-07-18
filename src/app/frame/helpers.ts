import { SwitchLink } from "../shared/types";

export const isActive = (link: SwitchLink, activePath: string): boolean =>
  link.path === activePath.replace(/(\/.*)\//, "$1");
