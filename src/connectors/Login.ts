import { loginRequest } from "store/actions";
import { StoreState } from "store/state";
import { Credentials } from 'types';
import { connect } from "react-redux";
import LoginContainer from "containers/LoginContainer";
import { DispatchType } from "store/store";

const mapStateToProps = (state: StoreState) => ({})

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
