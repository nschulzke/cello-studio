import * as React from 'react';
import './InlineEdit.css';
import EditLabel from './EditLabel';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

interface State {
  editing: boolean;
  value: string;
}

class InlineEdit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { editing: false, value: this.props.value };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getValueText = this.getValueText.bind(this);
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
    this.setState({ value: event.currentTarget.value });
  }

  public getValueText() {
    if (this.state.editing) {
      return this.state.value;
    } else if (this.props.value.length) {
      return this.props.value;
    } else {
      return 'None'
    }
  }

  public render() {
    return (
      <div className="InlineEdit">
        <EditLabel onClick={this.toggleEdit} onCancel={this.cancel} editing={this.state.editing}>{this.props.children}</EditLabel>
        <input value={this.getValueText()} disabled={!this.state.editing} onChange={this.handleChange} />
      </div>
    );
  }
}

export default InlineEdit