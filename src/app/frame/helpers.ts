import { SwitchLink } from "../shared/types";

export const isActive = (link: SwitchLink, activePath: string): boolean =>
  activePath.replace(/^(\/.*)\/$/, "$1").indexOf(link.path) === 0;
