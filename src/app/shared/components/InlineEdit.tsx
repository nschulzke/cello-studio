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
  }

  public toggleEdit = () => {
    if (this.state.editing) {
      this.props.onChange(this.state.value);
    }
    this.setState({ editing: !this.state.editing });
  }

  public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  }

  public componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  public handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.toggleEdit();
    }
  }

  public getValueText = () => {
    if (this.state.editing) {
      return this.state.value;
    } else if (this.props.value.length) {
      return this.state.value;
    } else {
      return 'None'
    }
  }

  public render() {
    return (
      <div className="InlineEdit">
        <EditLabel onClick={this.toggleEdit} editing={this.state.editing}>{this.props.children}</EditLabel>
        <input value={this.getValueText()} disabled={!this.state.editing} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default InlineEdit
