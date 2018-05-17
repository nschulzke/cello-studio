import * as React from 'react';
import StaticHome from './Static/StaticHome';
import StaticHeader from './Static/StaticHeader';
import { RCP } from 'modules/routing';
import { Switch, Route } from 'react-router';
import NotFound from 'components/NotFound';

class Static extends React.Component {
  public render() {
    const { match } = this.props as RCP;

    return (
      <div className="Static">
        <StaticHeader root={match.url} />
        <Switch>
          <Route exact={true} path={match.url} component={StaticHome} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Static;
