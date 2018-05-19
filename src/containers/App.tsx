import * as React from 'react';
import Frame from 'components/Frame/Frame';
import { RCP } from 'modules/routing';
import { SidebarLink, SwitchLink } from 'store/state';
import NotFound from 'components/NotFound';
import Home from './Home';
import Profile from './Profile';

class App extends React.Component {
  private links: Array<SidebarLink & SwitchLink> = [
    { path: '/calendar', icon: 'far fa-calendar-alt', label: 'Calendar', color: '#fea3aa', component: NotFound },
    { path: '/schedule', icon: 'far fa-clock', label: 'Schedule', color: '#f8b88b', component: NotFound },
    { path: '/profile', icon: 'far fa-user-circle', label: 'Profile', color: '#faf884', component: Profile },
    { path: '/directory', icon: 'far fa-address-book', label: 'Directory', color: '#baed91', component: NotFound },
    { path: '/files', icon: 'far fa-folder-open', label: 'Files', color: '#b2cefe', component: NotFound },
    { path: '/emails', icon: 'far fa-envelope', label: 'Emails', color: '#f2a2e8', component: NotFound },
  ]
  private home: SwitchLink = { path: '/', exact: true, component: Home }

  public render() {
    const { location } = this.props as RCP;

    return (
      <Frame pageTitle="HomePage"
        studentName="Test Student"
        sidebarLinks={this.links}
        routingLinks={(this.links as SwitchLink[]).concat(this.home)}
        activePath={location.pathname} />
    );
  }
}

export default App;
