import { connect } from "react-redux";
import { DispatchType } from "app/shared/store";
import { Credentials } from '../types';
import { registerRequest } from "../store/actions";
import { AccountState } from "../store/state";
import RegisterContainer from "./RegisterContainer";

const mapStateToProps = (state: AccountState) => ({})

const mapDispatchToProps = (dispatch: DispatchType) => ({
  onSubmit: (credentials: Credentials) => {
    dispatch(registerRequest(credentials));
  }
})

const Register = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterContainer);

export default Register;