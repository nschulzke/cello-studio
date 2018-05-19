import * as React from 'react';
import AccountInfo from './AccountInfo/AccountInfo';
import './Frame.css'
import NavTab from './NavTab/NavTab';
import * as Color from 'color';
import NavSwitch from '../NavSwitch';
import { SidebarLink, SwitchLink } from 'store/state';

export interface Props {
  pageTitle: string;
  studentName: string;
  sidebarLinks: SidebarLink[];
  routingLinks: SwitchLink[];
  activePath: string;
}

const Frame: React.SFC<Props> = (props) => {
  const activeLink = props.sidebarLinks.filter((link) => link.path === props.activePath)[0];
  const frameColor = activeLink ? Color(activeLink.color).mix(Color('white'), 0.66).toString() : 'white';
  return (
    <div className="Frame">
      <div className="header" style={{ backgroundColor: frameColor }}>
        <a className="logo" href="/">CSCello</a>
        <h1 className="title">{activeLink ? activeLink.label : ''}</h1>
        <AccountInfo studentName={props.studentName} />
      </div>
      <div className="main">
        <div className="sidebar" style={{ backgroundColor: frameColor }}>
          {props.sidebarLinks.map((link) => (
            <NavTab to={link.path} icon={link.icon} active={link.path === props.activePath} style={{ backgroundColor: link.color }}>{link.label}</NavTab>
          ))}
        </div>
        <div className="workspace">
          <NavSwitch root="" links={props.routingLinks} />
        </div>
      </div>
    </div >
  )
}

export default Frame
