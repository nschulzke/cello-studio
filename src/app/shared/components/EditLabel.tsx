import * as React from 'react';
import './EditLabel.css';

interface Props {
  onClick: () => void;
  editing: boolean;
}

const EditLabel: React.SFC<Props> = (props) => (
  <div className="EditLabel flex">
    <label>{props.children}</label>
    <div className="icon">
      {!props.editing && <i className="far fa-edit" onClick={props.onClick} />}
      {props.editing && <i className="far fa-save" onClick={props.onClick} />}
    </div>
  </div>
)

export default EditLabel;
