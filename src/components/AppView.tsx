import * as React from 'react';
import { RCP } from "modules/routing";
import Login from 'connectors/Login';
import Frame from 'connectors/Frame';

interface Props extends RCP {
  loggedIn: boolean;
  activePath: string;
}

const AppView: React.SFC<Props> = (props) => {
  return (
    (props.loggedIn) ? (
      <Frame activePath={props.activePath} />
    ) : (
        <Login />
      )
  );
}

export default AppView;
