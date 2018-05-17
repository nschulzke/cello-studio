import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
  root: string;
  children?: React.ReactNode;
}

const AdminHeader: React.SFC<Props> = (props: Props) => {
  return (
    <header className="AdminHeader">
      <Link to={props.root}>Home</Link>
      <Link to={`${props.root}/emails`}>Emails</Link>
      <Link to={`${props.root}/scheduling`}>Scheduling</Link>
      <Link to={`${props.root}/students`}>Students</Link>
    </header>
  );
}

export default AdminHeader;
