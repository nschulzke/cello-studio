import * as React from 'react';
import ProfileView from './ProfileView';
import { ProfileState } from '../store/state';
import { getProfileRequest, updateProfileOtherRequest } from '../store/actions';
import { connect } from 'react-redux';
import { DispatchType } from '../../shared/store';
import { Profile } from 'domain/types';
import Axios from 'axios';

const mapStateToProps = (state: ProfileState, props: { profile: Profile, email: string }) => ({
  profile: props.profile,
  email: props.email,
})

const mapDispatchToProps = (dispatch: DispatchType) => {
  dispatch(getProfileRequest());

  return {
    onChange: (email: string, profile: Profile) => {
      dispatch(updateProfileOtherRequest(email, profile));
    }
  }
}

const ProfileOtherConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileView);

class ProfileOther extends React.Component<{ match: any }, { profile: Profile }> {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        name: '',
        email: '',
        parentName: '',
        contactEmail: '',
        contactPhone: '',
        contactType: 0,
      }
    };
  }

  public componentWillMount() {
    console.log(this.props.match.params.id);
    Axios.get('/api/users/profile/' + this.props.match.params.id).then(res =>
      this.setState({ profile: res.data })
    );
  }

  public render() {
    return (
      <ProfileOtherConnected
        email={this.props.match.params.id}
        profile={this.state.profile}
      />
    )
  }
}


export default ProfileOther;
