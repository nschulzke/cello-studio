import * as React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';
import './App.css';
import Admin from './App/Admin';
import Student from './App/Student';
import Static from './App/Static';
import { getRoute, RouteEntry } from 'modules/routing';

class App extends React.Component<RouteComponentProps<any, StaticContext>> {
  private routes: RouteEntry[] = [
    { component: Admin, path: '/admin' },
    { component: Student, path: '/student' },
    { component: Static, path: '.*' },
  ]

  public render() {
    const { location } = this.props;
    return (
      <div className="App">
        {getRoute(location.pathname, this.routes)}
      </div>
    );
  }
}

export default App;
