import * as React from 'react';
import { RCP } from "app/shared/modules/routing";
import { Redirect } from 'react-router';
import Login from 'app/account/components/Login';
import Register from 'app/account/components/Register';
import Frame from 'app/frame/components/Frame';

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
