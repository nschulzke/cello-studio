import ProfileView from './ProfileView';
import { AccountState } from '../store/state';
import { updateUser } from '../store/actions';
import { User } from '../types';
import { connect } from 'react-redux';
import { DispatchType } from '../../shared/store';

const mapStateToProps = (state: AccountState) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
  onChange: (user: User) => {
    dispatch(updateUser(user));
  }
})

const Profile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileView);

export default Profile;
