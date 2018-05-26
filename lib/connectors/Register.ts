import { registerRequest } from "store/actions";
import { StoreState } from "store/state";
import { Credentials } from 'types';
import { connect } from "react-redux";
import RegisterContainer from "containers/RegisterContainer";
import { DispatchType } from "store/store";

const mapStateToProps = (state: StoreState) => ({})

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
