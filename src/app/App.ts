import { Dispatch, connect } from 'react-redux';
import { AllActions } from 'app/shared/store/actions';
import { StoreState } from 'app/shared/store/state';
import { RCP } from 'app/shared/modules/routing';
import AppView from './AppView';

const mapStateToProps = (state: StoreState, ownProps: RCP) => ({
  loggedIn: state.loggedIn,
  activePath: ownProps.location.pathname,
})

const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => ({})

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppView);

export default App;
