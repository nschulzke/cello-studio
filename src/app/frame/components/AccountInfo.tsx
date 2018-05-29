import * as React from 'react';
import './AccountInfo.css';
import { Link } from 'react-router-dom';

interface Props {
  studentName: string;
}

const AccountInfo: React.SFC<Props> = (props) => (
  <div className="AccountInfo">
    <div className="name">
      {props.studentName}
    </div>
    <Link to="/profile">
      <i className="icon fa fa-cog" />
    </Link>
  </div >
)

export default AccountInfo
