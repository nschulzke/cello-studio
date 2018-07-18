import * as React from 'react';
import * as Color from 'color';
import NavSwitch from 'app/shared/components/NavSwitch';
import { sidebarLinks, routingLinks } from 'app/frame/routes';
import AccountInfo from './AccountInfo';
import NavTab from './NavTab';
import './FrameView.css'
import { isActive } from '../helpers';
import { Redirect } from 'react-router';

export interface Props {
  email: string;
  admin: boolean;
  activePath: string;
  logout: () => {};
}

const FrameView: React.SFC<Props> = (props) => {
  const activeLink = sidebarLinks.filter((link) => isActive(link, props.activePath))[0];
  const frameColor = activeLink ? Color(activeLink.color).mix(Color('white'), 0.66).toString() : 'white';
  if (activeLink && activeLink.admin && props.admin !== true) {
    return (
      <Redirect to={{
        pathname: "/",
      }} />
    )
  }
  return (
    <div className="FrameView">
      <div className="header" style={{ backgroundColor: frameColor }}>
        <a className="logo" href="/">CSCello</a>
        <h1 className="title">{activeLink ? activeLink.label : ''}</h1>
        <AccountInfo logout={props.logout} name={props.email} />
      </div>
      <div className="main">
        <div className="sidebar" style={{ backgroundColor: frameColor }}>
          {sidebarLinks.filter(link => props.admin || link.admin !== true).map((link) => (
            <NavTab to={link.path} icon={link.icon} active={link === activeLink} style={{ backgroundColor: link.color }} key={link.path}>{link.label}</NavTab>
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
