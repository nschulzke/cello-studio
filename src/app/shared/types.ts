export interface SwitchLink {
  path: string;
  exact?: boolean;
  component: React.SFC | React.ComponentClass
  admin?: boolean;
}
