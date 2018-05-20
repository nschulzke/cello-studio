import { logIn, AllActions } from "store/actions";
import { StoreState } from "store/state";
import { Permissions, User } from 'studio-shared';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import LoginContainer from "containers/LoginContainer";

const mapStateToProps = (state: StoreState) => ({})

const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => ({
  onLoggedIn: (result: { token: string, user: User }) => {
    dispatch(logIn(Permissions.ADMIN, result.token, result.user));
  }
})

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);

export default Login;
