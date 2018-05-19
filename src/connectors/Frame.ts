import { Dispatch, connect } from 'react-redux';
import { AllActions } from 'store/actions';
import { StoreState } from 'store/state';
import FrameView from 'components/FrameView/FrameView';

interface Props {
  activePath: string;
}

const mapStateToProps = (state: StoreState, ownProps: Props) => ({
  studentName: state.user ? state.user.studentName : '',
  activePath: ownProps.activePath,
})

const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => ({})

const Frame = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FrameView);

export default Frame;
