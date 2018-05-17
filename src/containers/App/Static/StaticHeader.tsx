import * as React from 'react';
import {Link} from 'react-router-dom';

class StaticHeader extends React.Component {
  public render() {
    return (
      <header className="StaticHeader">
        <Link to="/">Home</Link>
      </header>
    );
  }
}

export default StaticHeader;
