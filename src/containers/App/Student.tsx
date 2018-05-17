import * as React from 'react';
import { getRoute, RouteEntry, RouteComponent } from 'modules/routing';
import StudentCalendar from './Student/StudentCalendar';
import StudentFiles from './Student/StudentFiles';
import StudentProfile from './Student/StudentProfile';
import StudentHeader from './Student/StudentHeader';
import StudentHome from './Student/StudentHome';


class Student extends RouteComponent {
  private routes: RouteEntry[] = [
    { component: StudentHome, path: '', exact: true },
    { component: StudentCalendar, path: '/calendar' },
    { component: StudentFiles, path: '/files' },
    { component: StudentProfile, path: '/profile' },
  ]

  public render() {
    const path = this.props.path ? this.props.path : '';
    return (
      <div className="Student">
        <StudentHeader {...this.props} />
        {getRoute(path, this.routes)}
      </div>
    );
  }
}

export default Student;
