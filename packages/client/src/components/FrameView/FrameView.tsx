import * as React from 'react';
import AccountInfo from './AccountInfo/AccountInfo';
import './FrameView.css'
import NavTab from './NavTab/NavTab';
import * as Color from 'color';
import NavSwitch from '../NavSwitch';
import { sidebarLinks, routingLinks } from 'constants/routes';

export interface Props {
  email: string;
  activePath: string;
}

const FrameView: React.SFC<Props> = (props) => {
  const activeLink = sidebarLinks.filter((link) => link.path === props.activePath)[0];
  const frameColor = activeLink ? Color(activeLink.color).mix(Color('white'), 0.66).toString() : 'white';
  return (
    <div className="FrameView">
      <div className="header" style={{ backgroundColor: frameColor }}>
        <a className="logo" href="/">CSCello</a>
        <h1 className="title">{activeLink ? activeLink.label : ''}</h1>
        <AccountInfo studentName={props.email} />
      </div>
      <div className="main">
        <div className="sidebar" style={{ backgroundColor: frameColor }}>
          {sidebarLinks.map((link) => (
            <NavTab to={link.path} icon={link.icon} active={link.path === props.activePath} style={{ backgroundColor: link.color }}>{link.label}</NavTab>
          ))}
        </div>
        <div className="workspace">
          <NavSwitch root="" links={routingLinks} />
        </div>
      </div>
    </div >
  )
}

export default FrameView
