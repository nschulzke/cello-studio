import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponent } from 'modules/routing';

class StudentHeader extends RouteComponent {
  public render() {
    const { root } = this.props;
    return (
      <header className="AdminHeader">
        <Link to={`${root}`}>Home</Link>
        <Link to={`${root}/calendar`}>Calendar</Link>
        <Link to={`${root}/files`}>Files</Link>
        <Link to={`${root}/profile`}>Profile</Link>
      </header>
    );
  }
}

export default StudentHeader;
