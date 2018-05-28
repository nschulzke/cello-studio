export interface SwitchLink {
  path: string;
  exact?: boolean;
  component: React.SFC | React.ComponentClass
}

export interface SidebarLink {
  path: string;
  label: string;
  icon: string;
  color: string;
}
