import * as React from 'react';
import './EditLabel.css';

interface Props {
  onClick: () => void;
}

const EditLabel: React.SFC<Props> = (props) => (
  <div className="EditLabel flex">
    <label>{props.children}</label>
    <div className="icon">
      <i className="far fa-edit" onClick={props.onClick} />
    </div>
  </div>
)

export default EditLabel;
