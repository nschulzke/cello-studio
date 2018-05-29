import * as React from 'react';
import { CredentialsRaw } from '../domain/types';
import { Callback, onChangeInput } from 'app/shared/modules/helpers';
import './RegisterView.css';

interface Props {
  credentials: CredentialsRaw;
  onChange: Callback<CredentialsRaw>;
  onSubmit: Callback<React.FormEvent<HTMLFormElement>>
}

const RegisterView: React.SFC<Props> = (props) => {
  return (
    <div className="RegisterView">
      <h2>Register</h2>
      <form onSubmit={props.onSubmit}>
        <input type="email" value={props.credentials.email}
          onChange={onChangeInput('email', props.credentials, props.onChange)} />
        <input type="password" value={props.credentials.password}
          onChange={onChangeInput('password', props.credentials, props.onChange)} />
        <button type="submit">Submit</button>
      </form>
    </div >
  )
}

export default RegisterView
