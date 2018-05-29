import * as React from 'react';
import { Callback } from 'app/shared/modules/helpers';
import { Credentials } from '../types';
import RegisterView from './RegisterView';

interface State {
  credentials: Credentials;
}

interface Props {
  onSubmit: Callback<Credentials>
}

class RegisterContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { credentials: { email: '', password: '' } };
  }

  public handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSubmit(this.state.credentials);
  }

  public handleChange = (credentials: Credentials) => {
    this.setState({ credentials });
  }

  public render() {
    return (
      <RegisterView credentials={this.state.credentials}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    );
  }
}

export default RegisterContainer;
