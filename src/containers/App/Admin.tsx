import * as React from 'react';
import AdminHeader from './Admin/AdminHeader';
import AdminHome from './Admin/AdminHome';
import AdminEmails from './Admin/AdminEmails';
import AdminScheduling from './Admin/AdminScheduling';
import AdminStudents from './Admin/AdminStudents';
import { getRoute, RouteEntry, RouteComponent } from 'modules/routing';

class Admin extends RouteComponent {
  private routes: RouteEntry[] = [
    { component: AdminHome, path: '', exact: true },
    { component: AdminEmails, path: '/emails' },
    { component: AdminScheduling, path: '/scheduling' },
    { component: AdminStudents, path: '/students' },
  ]

  public render() {
    const path = this.props.path ? this.props.path : '';
    return (
      <div className="Student">
        <AdminHeader {...this.props} />
        {getRoute(path, this.routes)}
      </div>
    );
  }
}

export default Admin;
