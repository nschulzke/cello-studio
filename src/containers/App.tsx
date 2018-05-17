import * as React from 'react';
import { RouteComponentProps, StaticContext, Switch, Route } from 'react-router';
import './App.css';
import Admin from './App/Admin';
import Student from './App/Student';
import Static from './App/Static';

class App extends React.Component<RouteComponentProps<any, StaticContext>> {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/student" component={Student} />
          <Route component={Static} />
        </Switch>
      </div>
    );
  }
}

export default App;
