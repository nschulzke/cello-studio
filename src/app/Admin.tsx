import * as React from 'react';
import { Route } from 'react-router';
import AdminHeader from './admin/AdminHeader';
import AdminHome from './admin/AdminHome';
import Emails from './admin/Emails';
import Scheduling from './admin/Scheduling';
import Students from './admin/Students';

class Admin extends React.Component {
  public render() {
    return (
      <div className="Student">
        <AdminHeader />
        <Route exact={true} path="/admin" component={AdminHome} />
        <Route path="/admin/emails" component={Emails} />
        <Route path="/admin/scheduling" component={Scheduling} />
        <Route path="/admin/students" component={Students} />
      </div>
    );
  }
}

export default Admin;
