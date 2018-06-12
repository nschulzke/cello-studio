import { connect } from "react-redux";
import { DispatchType } from "app/shared/store";
import { CredentialsRaw } from '../domain/types';
import { registerRequest } from "../store/actions";
import { UsersState } from "../store/state";
import RegisterContainer from "./RegisterContainer";

const mapStateToProps = (state: UsersState) => ({})

const mapDispatchToProps = (dispatch: DispatchType) => ({
  onSubmit: (credentials: CredentialsRaw) => {
    dispatch(registerRequest(credentials));
  }
})

const Register = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterContainer);

export default Register;
