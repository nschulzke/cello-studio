import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import { SwitchLink } from 'app/shared/types';

export interface Props {
  root: string;
  links: SwitchLink[]
  children?: React.ReactNode;
}

const NavSwitch: React.SFC<Props> = (props: Props) => {
  return (
    <Switch>
      {props.links.map((link) => (
        <Route exact={link.exact} path={`${props.root}${link.path}`} component={link.component} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

export default NavSwitch;
