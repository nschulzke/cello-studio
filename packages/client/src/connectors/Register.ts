import { registerRequest, AllActions } from "store/actions";
import { StoreState } from "store/state";
import { Credentials } from 'studio-shared';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import RegisterContainer from "containers/RegisterContainer";

const mapStateToProps = (state: StoreState) => ({})

const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => ({
  onSubmit: (credentials: Credentials) => {
    dispatch(registerRequest(credentials));
  }
})

const Register = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterContainer);

export default Register;
