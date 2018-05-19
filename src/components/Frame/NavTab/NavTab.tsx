import * as React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css'

interface Props {
  active: boolean;
  icon: string;
  children: React.ReactNode;
  to: string;
  style?: React.CSSProperties;
}

const NavTab: React.SFC<Props> = (props) => (
  <div className={`NavTab ${props.active ? ' active' : ''}`} style={props.style}>
    <Link to={props.to}>
      <i className={`icon ${props.icon}`} />
      <div className="label">
        {props.children}
      </div>
    </Link>
  </div>
)

export default NavTab
