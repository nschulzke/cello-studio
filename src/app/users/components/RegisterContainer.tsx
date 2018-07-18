import * as React from 'react';
import { Callback } from 'app/shared/modules/helpers';
import { CredentialsRaw } from 'domain/types';
import RegisterView from './RegisterView';

interface State {
  credentials: CredentialsRaw;
}

interface Props {
  onSubmit: Callback<CredentialsRaw>
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

  public handleChange = (credentials: CredentialsRaw) => {
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
