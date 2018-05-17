import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponent } from 'modules/routing';

class AdminHeader extends RouteComponent {
  public render() {
    return (
      <header className="AdminHeader">
        <Link to="/admin/emails">Emails</Link>
        <Link to="/admin/scheduling">Scheduling</Link>
        <Link to="/admin/students">Students</Link>
      </header>
    );
  }
}

export default AdminHeader;
