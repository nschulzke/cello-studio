import * as React from 'react';
import { RouteComponent } from 'modules/routing';

class AdminStudents extends RouteComponent {
  public render() {
    return (
      <div className="Students">
        <h2>Students Home</h2>
      </div>
    );
  }
}

export default AdminStudents;
