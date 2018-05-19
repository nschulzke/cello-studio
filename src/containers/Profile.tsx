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
    this.setState({ user: newUser('email@example.com', 'testpass') });
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(user: User) {
    this.setState({ user });
  }

  public render() {
    return (
      <ProfilePage user={newUser('email@example.com', 'testpass')} onChange={this.handleChange} />
    );
  }
}

export default Profile;
