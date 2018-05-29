export * from './helpers';

export enum ResultStatus {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export type ResultSuccess<T = undefined> = {
  status: ResultStatus.SUCCESS,
  data: T,
};

export type ResultFailure = {
  status: ResultStatus.FAILURE,
  message: string,
};

export type Result<T> = ResultSuccess<T> | ResultFailure;

function success<T>(data: T): Result<T> {
  return { status: ResultStatus.SUCCESS, data };
}

function failure(message: string): Result<any> {
  return { status: ResultStatus.FAILURE, message };
}

export const Result = {
  failure,
  success,
  isFailure: (result: Result<any>): result is ResultFailure => result.status === ResultStatus.FAILURE,
  isSuccess: <T>(result: Result<T>): result is ResultSuccess<T> => result.status === ResultStatus.SUCCESS,
};

export interface SwitchLink {
  path: string;
  exact?: boolean;
  component: React.SFC | React.ComponentClass
}

export interface SidebarLink {
  path: string;
  label: string;
  icon: string;
  color: string;
}
