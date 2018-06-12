import ProfileView from './ProfileView';
import { AccountState } from '../store/state';
import { updateProfileRequest } from '../store/actions';
import { Profile as ProfileType } from '../domain/types';
import { connect } from 'react-redux';
import { DispatchType } from '../../shared/store';

const mapStateToProps = (state: AccountState) => ({
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
