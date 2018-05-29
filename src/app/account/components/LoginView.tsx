import * as React from 'react';
import { Callback, onChangeInput } from 'app/shared/modules/helpers';
import { Credentials } from '../types';
import './LoginView.css';

interface Props {
  credentials: Credentials;
  onChange: Callback<Credentials>;
  onSubmit: Callback<React.FormEvent<HTMLFormElement>>
}

const LoginView: React.SFC<Props> = (props) => {
  return (
    <div className="LoginView">
      <h2>Log in</h2>
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

export default LoginView
