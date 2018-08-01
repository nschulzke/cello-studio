import * as React from 'react';
import { DirectoryView } from './DirectoryView';
import { Profile, Permissions } from 'domain/types';
import Axios from 'axios';
import { DispatchType } from 'app/shared/store';
import { SessionState } from 'app/sessions/store/state';
import { connect } from 'react-redux';

interface Props {
  permissions: Permissions;
}

interface State {
  profiles: Profile[];
}

class DirectoryClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { profiles: [] };
  }

  public componentWillMount() {
    Axios.get('/api/users/profiles').then(res =>
      this.setState({ profiles: res.data })
    );
  }

  public render() {
    let profiles = this.state.profiles.sort((a, b) => {
      let aNames = a.name.split(' ').reverse();
      let bNames = b.name.split(' ').reverse();
      for (let i = 0; i < aNames.length; i++) {
        if (aNames[i] > bNames[i]) return 1;
        if (bNames[i] > aNames[i]) return -1;
      }
      return 0;
    });

    return (
      <DirectoryView
        profiles={profiles}
        permissions={this.props.permissions}
      />
    )
  }
}

const mapStateToProps = (state: SessionState) => ({
  permissions: state.permissions,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
});

const Directory = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DirectoryClass);

export { Directory };
