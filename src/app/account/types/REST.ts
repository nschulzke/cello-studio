import { Invite, User, Credentials } from '.';

type LoginRequest = Credentials;

function isLoginRequest(body: any): body is LoginRequest {
  return typeof body.email === 'string'
    && typeof body.password === 'string';
}

type RegisterRequest = Credentials;

function isRegisterRequest(body: any): body is LoginRequest {
  return typeof body.email === 'string'
    && typeof body.password === 'string';
}

type InviteResponse = Invite;

function isInviteResponse(body: any): body is InviteResponse {
  return typeof body.code === 'string'
    && body.expiresOn instanceof Date;
}

type LoginResponse = { token: string, user: User };

const LoginResponse = {
  check: (response: LoginResponse): LoginResponse => (response),
  is: (obj: any): obj is LoginResponse => {
    return typeof obj.token === 'string'
      && User.is(obj.user);
  },
};

export {
  LoginRequest,
  isLoginRequest,
  RegisterRequest,
  isRegisterRequest,
  InviteResponse,
  isInviteResponse,
  LoginResponse,
};
