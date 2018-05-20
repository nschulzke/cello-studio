import { SwitchLink, SidebarLink } from "store/state";
import Home from "connectors/Home";
import NotFound from "components/NotFound";
import ProfileContainer from "connectors/Profile";

const home: SwitchLink = { path: '/', exact: true, component: Home }
const sidebarLinks: Array<SidebarLink & SwitchLink> = [
  { path: '/calendar', icon: 'far fa-calendar-alt', label: 'Calendar', color: '#fea3aa', component: NotFound },
  { path: '/schedule', icon: 'far fa-clock', label: 'Schedule', color: '#f8b88b', component: NotFound },
  { path: '/profile', icon: 'far fa-user-circle', label: 'Profile', color: '#faf884', component: ProfileContainer },
  { path: '/directory', icon: 'far fa-address-book', label: 'Directory', color: '#baed91', component: NotFound },
  { path: '/files', icon: 'far fa-folder-open', label: 'Files', color: '#b2cefe', component: NotFound },
  { path: '/emails', icon: 'far fa-envelope', label: 'Emails', color: '#f2a2e8', component: NotFound },
]
const routingLinks: SwitchLink[] = (sidebarLinks as SwitchLink[]).concat(home);

export { sidebarLinks, routingLinks };
