import { Permissions } from 'domain/users/sessions/_types';
import { Profile } from 'domain/types';
import { TypeChecker } from 'server/helpers/types';

type LoginRequest = {
  email: string;
  password: string;
};

const LoginRequest: TypeChecker<LoginRequest> = {
  is: (obj: any): obj is LoginRequest => {
    return typeof obj.email === 'string'
      && typeof obj.password === 'string';
  },
}

type RegisterRequest = {
  email: string;
  password: string;
};

const RegisterRequest: TypeChecker<RegisterRequest> = {
  is: (obj: any): obj is RegisterRequest => {
    return typeof obj.email === 'string'
      && typeof obj.password === 'string';
  },
}

type UpdateProfileRequest = { email: string, profile: object };
const UpdateProfileRequest: TypeChecker<UpdateProfileRequest> = {
  is: (obj: any): obj is UpdateProfileRequest => {
    return typeof obj.email === 'string'
      && typeof obj.profile === 'object';
  }
}

type LoginResponse = {
  email: string,
  token: string,
  permissions: Permissions,
  profile: Profile,
};

type UpdateProfileResponse = {
  profile: Profile
};

export {
  LoginRequest,
  RegisterRequest,
  UpdateProfileRequest,
  LoginResponse,
  UpdateProfileResponse
};
