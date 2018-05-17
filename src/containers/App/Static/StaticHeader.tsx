import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
  root: string;
  children?: React.ReactNode;
}

const StaticHeader: React.SFC<Props> = (props: Props) => {
  return (
    <header className="StaticHeader">
      <Link to={props.root}>Home</Link>
    </header>
  );
}

export default StaticHeader;
