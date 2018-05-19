import * as React from 'react';
import { Credentials } from 'store/state';
import './LoginPage.css';
import { Callback, onChangeInput } from 'modules/helpers';

interface Props {
  credentials: Credentials;
  onChange: Callback<Credentials>;
  onSubmit: Callback<React.FormEvent<HTMLFormElement>>
}

const LoginPage: React.SFC<Props> = (props) => {
  return (
    <div className="LoginPage">
      <h2>My Profile</h2>
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

export default LoginPage
