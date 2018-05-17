import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
  root: string;
  children?: React.ReactNode;
}

const StudentHeader: React.SFC<Props> = (props: Props) => {
  return (
    <header className="StudentHeader">
      <Link to={props.root}>Home</Link>
      <Link to={`${props.root}/calendar`}>Calendar</Link>
      <Link to={`${props.root}/files`}>Files</Link>
      <Link to={`${props.root}/profile`}>Profile</Link>
    </header>
  );
}

export default StudentHeader;
