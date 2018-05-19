import * as React from 'react';
import ProfilePage from 'components/ProfilePage/ProfilePage';
import { newUser } from 'store/helpers';
import { User } from 'store/state';

interface State {
  user: User;
}

class Profile extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { user: newUser('email@example.com', 'testpass') };
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(user: User) {
    this.setState({ user });
  }

  public render() {
    return (
      <ProfilePage user={this.state.user} onChange={this.handleChange} />
    );
  }
}

export default Profile;
