import * as React from 'react';
import { Route } from 'react-router';
import './App.css';
import Admin from './app/Admin';
import Student from './app/Student';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Route path="/admin" component={Admin} />
        <Route path="/student" component={Student} />
      </div>
    );
  }
}

export default App;
