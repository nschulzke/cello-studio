import * as React from 'react'
import EditLabel from 'app/shared/components/EditLabel';
import { ContactType } from '../types';
import './InlineEditContactType.css';

interface Props {
  value: ContactType;
  onChange: (value: ContactType) => void;
}

interface State {
  value: ContactType;
  editing: boolean;
}

class InlineEditContactType extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { editing: false, value: this.props.value };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  public cancel() {
    this.setState({ editing: false, value: this.props.value });
  }

  public toggleEdit() {
    if (this.state.editing) {
      this.props.onChange(this.state.value);
    }
    this.setState({ editing: !this.state.editing });
  }

  public handleChange(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget.checked) {
      this.setState({ value: (this.state.value | Number(event.currentTarget.value)) });
    } else {
      this.setState({ value: (this.state.value & ~Number(event.currentTarget.value)) });
    }
  }

  public render() {
    return (
      <div className="InlineEditContactType">
        <EditLabel onClick={this.toggleEdit} onCancel={this.cancel} editing={this.state.editing}>Preferred contact</EditLabel>
        <div className="flex">
          <label>
            <input type="checkbox" disabled={!this.state.editing}
              value={ContactType.CALL} checked={!!(this.state.value & ContactType.CALL)}
              onChange={this.handleChange} />
            Call
        </label>
          <label>
            <input type="checkbox" disabled={!this.state.editing}
              value={ContactType.TEXT} checked={!!(this.state.value & ContactType.TEXT)}
              onChange={this.handleChange} />
            Text
        </label>
          <label>
            <input type="checkbox" disabled={!this.state.editing}
              value={ContactType.EMAIL} checked={!!(this.state.value & ContactType.EMAIL)}
              onChange={this.handleChange} />
            Email
        </label>
          <label>
            <input type="checkbox" disabled={!this.state.editing}
              value={ContactType.GROUP_TEXT} checked={!!(this.state.value & ContactType.GROUP_TEXT)}
              onChange={this.handleChange} />
            Group Text
        </label>
        </div>
      </div>
    );
  }
}

export default InlineEditContactType
