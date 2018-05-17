import * as React from 'react';
import { Route } from 'react-router';
import Calendar from './student/Calendar';
import Files from './student/Files';
import Profile from './student/Profile';
import StudentHeader from './student/StudentHeader';
import StudentHome from './student/StudentHome';

class Student extends React.Component {
  public render() {
    const { match } = (this.props as any);
    return (
      <div className="Student">
        <Route component={StudentHeader} />
        <Route exact={true} path={match.path} component={StudentHome} />
        <Route path={match.path + '/calendar'} component={Calendar} />
        <Route path={match.path + '/files'} component={Files} />
        <Route path={match.path + '/profile'} component={Profile} />
      </div>
    );
  }
}

export default Student;
