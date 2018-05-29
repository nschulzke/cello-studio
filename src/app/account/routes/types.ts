import { Invite, User, CredentialsRaw, isUser } from '../domain/types';
import { TypeChecker } from 'app/shared/types';

type LoginRequest = CredentialsRaw;

const LoginRequest: TypeChecker<LoginRequest> = {
  is: (obj: any): obj is LoginRequest => {
    return typeof obj.email === 'string'
      && typeof obj.password === 'string';
  },
}

type RegisterRequest = CredentialsRaw;

const RegisterRequest: TypeChecker<RegisterRequest> = {
  is: (obj: any): obj is RegisterRequest => {
    return typeof obj.email === 'string'
      && typeof obj.password === 'string';
  },
}

type InviteResponse = Invite;

const InviteResponse: TypeChecker<InviteResponse> = {
  is: (obj: any): obj is InviteResponse => {
    return typeof obj.code === 'string'
      && obj.expiresOn instanceof Date;
  },
}

type LoginResponse = { token: string, user: User };

const LoginResponse: TypeChecker<LoginResponse> = {
  is: (obj: any): obj is LoginResponse => {
    return typeof obj.token === 'string'
      && isUser(obj.user);
  },
};

export {
  LoginRequest,
  RegisterRequest,
  InviteResponse,
  LoginResponse,
};
