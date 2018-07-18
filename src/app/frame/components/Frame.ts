import { Dispatch, connect } from 'react-redux';
import { AllActions } from 'app/shared/store/actions';
import { StoreState } from 'app/shared/store/state';
import FrameView from './FrameView';
import { Permissions } from 'domain/types';
import { loggedOut } from 'app/sessions/store/actions';

interface Props {
  activePath: string;
}

const mapStateToProps = (state: StoreState, ownProps: Props) => ({
  email: state.email ? state.email : '',
  admin: state.permissions === Permissions.ADMIN,
  activePath: ownProps.activePath,
});

const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => ({
  logout: () => {
    document.cookie = 'auth=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    dispatch(loggedOut());
  }
});

const Frame = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FrameView);

export default Frame;
