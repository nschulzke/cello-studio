import * as React from 'react';
import './AccountInfo.css';

interface Props {
  name: string;
  logout: () => {};
}

const AccountInfo: React.SFC<Props> = (props) => (
  <div className="AccountInfo">
    <div className="name">
      {props.name}
    </div>
    <a onClick={props.logout}>
      <i className="icon fa fa-cog" />
    </a>
  </div >
)

export default AccountInfo
