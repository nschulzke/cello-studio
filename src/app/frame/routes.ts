import Home from "app/frame/components/Home";
import NotFound from "app/shared/components/NotFound";
import Profile from "app/profiles/components/Profile";
import Schedule from "app/scheduling/Schedule";
import Calendar from "app/scheduling/Calendar";
import Files from "app/files/Files";
import { SwitchLink } from "app/shared/types";
import { SidebarLink } from "./types";

const home: SwitchLink = { path: '/', exact: true, component: Home }
const sidebarLinks: Array<SidebarLink & SwitchLink> = [
  { path: '/calendar', icon: 'far fa-calendar-alt', label: 'Calendar', color: '#fea3aa', component: Calendar },
  { path: '/schedule', icon: 'far fa-clock', label: 'Schedule', color: '#f8b88b', component: Schedule },
  { path: '/profile', icon: 'far fa-user-circle', label: 'Profile', color: '#faf884', component: Profile },
  { path: '/directory', icon: 'far fa-address-book', label: 'Directory', color: '#baed91', component: NotFound },
  { path: '/files', icon: 'far fa-folder-open', label: 'Files', color: '#b2cefe', component: Files },
  { path: '/emails', icon: 'far fa-envelope', label: 'Emails', color: '#f2a2e8', component: NotFound, admin: true },
]
const routingLinks: SwitchLink[] = (sidebarLinks as SwitchLink[]).concat(home);

export { sidebarLinks, routingLinks };
