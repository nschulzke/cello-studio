import * as React from 'react';
import { RCP } from "app/shared/modules/routing";
import Frame from 'app/frame/components/Frame';

interface Props extends RCP {
  loggedIn: boolean;
  activePath: string;
}

const AppView: React.SFC<Props> = (props) => {
  if (props.loggedIn) {
    return <Frame activePath={props.activePath} />
  } else {
    window.location.reload();
  }
}

export default AppView;
