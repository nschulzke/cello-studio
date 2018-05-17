import * as React from 'react';
import AdminHeader from './Admin/AdminHeader';
import AdminHome from './Admin/AdminHome';
import AdminEmails from './Admin/AdminEmails';
import AdminScheduling from './Admin/AdminScheduling';
import AdminStudents from './Admin/AdminStudents';
import { RCP } from 'modules/routing';
import { Route, Switch } from 'react-router';
import NotFound from 'components/NotFound';

class Admin extends React.Component {
  public render() {
    const { match } = this.props as RCP;
    return (
      <div className="Student">
        <AdminHeader root={match.url} />
        <Switch>
          <Route exact={true} path={match.url} component={AdminHome} />
          <Route path={`${match.path}/emails`} component={AdminEmails} />
          <Route path={`${match.path}/scheduling`} component={AdminScheduling} />
          <Route path={`${match.path}/students`} component={AdminStudents} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Admin;
