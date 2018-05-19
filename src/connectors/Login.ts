import { logIn, AllActions } from "store/actions";
import { Permissions, StoreState, Credentials } from "store/state";
import { Dispatch } from "redux";
import { newUser } from "store/helpers";
import { connect } from "react-redux";
import LoginContainer from "containers/LoginContainer";

const mapStateToProps = (state: StoreState) => ({})

const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => ({
  onSubmit: (credentials: Credentials) => {
    dispatch(logIn(Permissions.ADMIN, 'mytoken', newUser(credentials.email, credentials.password)));
  }
})

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);

export default Login;
