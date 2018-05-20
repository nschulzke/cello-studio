import * as React from 'react';
import LoginPage from 'components/LoginPage/LoginPage';
import { Callback } from 'modules/helpers';
import axios from 'axios';
import { User, Credentials } from 'shared';

interface State {
  credentials: Credentials;
}

interface Props {
  onLoggedIn: Callback<{ token: string, user: User }>
}

class LoginContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { credentials: { email: '', password: '' } };
  }

  public handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await axios.get('/api/login');
    console.log(result);
    this.props.onLoggedIn(result.data);
  }

  public handleChange = (credentials: Credentials) => {
    this.setState({ credentials });
  }

  public render() {
    return (
      <LoginPage credentials={this.state.credentials}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    );
  }
}

export default LoginContainer;
