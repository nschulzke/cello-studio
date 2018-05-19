import { Dispatch, connect } from 'react-redux';
import { AllActions } from 'store/actions';
import { StoreState } from 'store/state';
import AppView from 'components/AppView';
import { RCP } from 'modules/routing';

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
