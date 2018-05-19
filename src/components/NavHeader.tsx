import * as React from 'react';
import { Link } from 'react-router-dom';

export interface LinkMap {
  path: string;
  title: string;
}

export interface Props {
  root: string;
  links: LinkMap[]
  children?: React.ReactNode;
}

const Header: React.SFC<Props> = (props: Props) => {
  return (
    <header className="AdminHeader">
      {props.links.map((link) => (
        <Link to={`${props.root}${link.path}`}>{link.title}</Link>
      ))}
    </header>
  );
}

export default Header;
