import { Dispatch, connect } from 'react-redux';
import { AllActions } from 'app/shared/store/actions';
import { StoreState } from 'app/shared/store/state';
import FrameView from './FrameView';
import { Permissions } from 'domain/types';

interface Props {
  activePath: string;
}

const mapStateToProps = (state: StoreState, ownProps: Props) => ({
  email: state.email ? state.email : '',
  admin: state.permissions === Permissions.ADMIN,
  activePath: ownProps.activePath,
});

const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => ({});

const Frame = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FrameView);

export default Frame;
