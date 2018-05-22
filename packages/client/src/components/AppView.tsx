import * as React from 'react';
import { RCP } from "modules/routing";
import Login from 'connectors/Login';
import Frame from 'connectors/Frame';
import { Redirect } from 'react-router';
import Register from 'connectors/Register';

interface Props extends RCP {
  loggedIn: boolean;
  activePath: string;
}

const AppView: React.SFC<Props> = (props) => {
  if (props.activePath === '/login' || props.activePath === '/register') {
    if (props.loggedIn) {
      return (
        <Redirect to={{
          pathname: "/",
          state: { from: props.location }
        }} />
      )
    } else if (props.activePath === '/login') {
      return <Login />
    } else {
      return <Register />
    }
  } else if (props.loggedIn) {
    return <Frame activePath={props.activePath} />
  } else {
    return (
      <Redirect to={{
        pathname: "/login",
        state: { from: props.location }
      }} />
    )
  }
}

export default AppView;
