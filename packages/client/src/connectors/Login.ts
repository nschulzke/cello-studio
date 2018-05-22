import { loginRequest, AllActions } from "store/actions";
import { StoreState } from "store/state";
import { Credentials } from 'studio-shared';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import LoginContainer from "containers/LoginContainer";

const mapStateToProps = (state: StoreState) => ({})

const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => ({
  onSubmit: (credentials: Credentials) => {
    dispatch(loginRequest(credentials));
  }
})

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);

export default Login;
