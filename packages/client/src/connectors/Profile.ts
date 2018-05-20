import ProfilePage from 'components/ProfilePage/ProfilePage';
import { StoreState } from 'store/state';
import { User } from 'studio-shared';
import { Dispatch } from 'redux';
import { AllActions, updateUser } from 'store/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state: StoreState) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => ({
  onChange: (user: User) => {
    dispatch(updateUser(user));
  }
})

const Profile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);

export default Profile;
