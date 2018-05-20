import ProfilePage from 'components/ProfilePage/ProfilePage';
import { User, StoreState } from 'store/state';
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
