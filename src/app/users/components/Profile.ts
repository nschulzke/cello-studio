import ProfileView from './ProfileView';
import { UsersState } from '../store/state';
import { updateProfileRequest } from '../store/actions';
import { connect } from 'react-redux';
import { DispatchType } from '../../shared/store';
import { Profile as ProfileType } from 'domain/types';

const mapStateToProps = (state: UsersState) => ({
  profile: state.profile,
  email: state.email,
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
  onChange: (email: string, profile: ProfileType) => {
    dispatch(updateProfileRequest(email, profile));
  }
})

const Profile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileView);

export default Profile;
