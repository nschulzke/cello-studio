import * as React from 'react';
import { RouteComponent, RouteEntry, getRoute } from 'modules/routing';
import StaticHome from './Static/StaticHome';
import StaticHeader from './Static/StaticHeader';

class Static extends RouteComponent {
  private routes: RouteEntry[] = [
    { component: StaticHome, path: '', exact: true },
  ]

  public render() {
    const path = this.props.path ? this.props.path : '';
    return (
      <div className="Static">
        <StaticHeader {...this.props} />
        {getRoute(path, this.routes)}
      </div>
    );
  }
}

export default Static;
