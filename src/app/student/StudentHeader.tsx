import * as React from 'react';
import { Link } from 'react-router-dom';

class StudentHeader extends React.Component {
  public render() {
    const { match } = (this.props as any);

    return (
      <header className="AdminHeader">
        <Link to={`${match.path}/calendar`}>Calendar</Link>
        <Link to={`${match.path}/files`}>Files</Link>
        <Link to={`${match.path}/profile`}>Profile</Link>
      </header>
    );
  }
}

export default StudentHeader;
