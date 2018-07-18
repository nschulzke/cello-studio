import * as React from 'react';
import './AccountInfo.css';

interface Props {
  studentName: string;
  logout: () => {};
}

const AccountInfo: React.SFC<Props> = (props) => (
  <div className="AccountInfo">
    <div className="name">
      {props.studentName}
    </div>
    <a onClick={props.logout}>
      <i className="icon fa fa-cog" />
    </a>
  </div >
)

export default AccountInfo
