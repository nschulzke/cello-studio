import ProfileView from './ProfileView';
import { ProfileState } from '../store/state';
import { updateProfileRequest, getProfileRequest } from '../store/actions';
import { connect } from 'react-redux';
import { DispatchType } from '../../shared/store';
import { Profile as ProfileType } from 'domain/types';

const mapStateToProps = (state: ProfileState) => ({
  profile: state.profile,
  email: state.email,
})

const mapDispatchToProps = (dispatch: DispatchType) => {
  dispatch(getProfileRequest());

  return {
    onChange: (email: string, profile: ProfileType) => {
      dispatch(updateProfileRequest(email, profile));
    }
  }
}

const Profile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileView);

export default Profile;
