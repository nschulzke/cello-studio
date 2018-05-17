import * as React from 'react';
import { RouteComponent } from 'modules/routing';

class StaticHome extends RouteComponent {
  public render() {
    return (
      <div className="StaticHome">
        <h2>Static Home</h2>
      </div>
    );
  }
}

export default StaticHome;
