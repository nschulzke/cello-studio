import * as React from 'react';
import StudentCalendar from './Student/StudentCalendar';
import StudentFiles from './Student/StudentFiles';
import StudentProfile from './Student/StudentProfile';
import StudentHeader from './Student/StudentHeader';
import StudentHome from './Student/StudentHome';
import { RCP } from 'modules/routing';
import { Route, Switch } from 'react-router';
import NotFound from 'components/NotFound';

class Student extends React.Component {
  public render() {
    const { match } = this.props as RCP;
    return (
      <div className="Student">
        <StudentHeader root={match.url} />
        <Switch>
          <Route exact={true} path={match.url} component={StudentHome} />
          <Route path={`${match.path}/calendar`} component={StudentCalendar} />
          <Route path={`${match.path}/files`} component={StudentFiles} />
          <Route path={`${match.path}/profile`} component={StudentProfile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Student;
