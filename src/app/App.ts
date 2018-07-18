import { Dispatch, connect } from 'react-redux';
import { AllActions } from 'app/shared/store/actions';
import { StoreState } from 'app/shared/store/state';
import { RCP } from 'app/shared/modules/routing';
import AppView from './AppView';
import { Permissions } from 'domain/types';

const mapStateToProps = (state: StoreState, ownProps: RCP) => ({
  loggedIn: state.permissions !== Permissions.NONE,
  activePath: ownProps.location.pathname,
})

const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => ({})

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppView);

export default App;
