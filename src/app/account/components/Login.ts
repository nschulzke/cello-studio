import { connect } from "react-redux";
import { DispatchType } from "app/shared/store";
import { Credentials } from '../types';
import { AccountState } from "../store/state";
import { loginRequest } from "../store/actions";
import LoginContainer from "./LoginContainer";

const mapStateToProps = (state: AccountState) => ({})

const mapDispatchToProps = (dispatch: DispatchType) => ({
  onSubmit: (credentials: Credentials) => {
    dispatch(loginRequest(credentials));
  }
})

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);

export default Login;
