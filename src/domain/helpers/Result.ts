interface Success<T> {
  success: true;
  data: T;
}

interface Failure {
  success: false;
  data: string;
}

export type Result<T> = Success<T> | Failure;

export const Success = <T>(data: T): Result<T> => ({
  success: true,
  data,
});

export const Failure = (message: string): Result<any> => ({
  success: false,
  data: message,
});

export const fromBool = (bool: boolean, failureMessage: string): Result<boolean> => (
  bool ? { success: true, data: true } : { success: false, data: failureMessage }
)

export const pipe = (...tests: Array<(value: any) => Result<any>>): Result<any> => (
  tests.reduce((previous, next) => {
    if (previous.success) {
      return next(previous.data);
    } else {
      return previous;
    }
  }, Success(true))
);

export const all = <T>(argument: T, ...tests: Array<(value: Partial<T>) => Result<any>>) => {
  let result = Success(true);
  for (let test of tests) {
    result = test(argument);
    if (!result.success) {
      return result;
    }
  }
  return result;
}

export const lift = <T>(func: (arg: T) => boolean, failureMessage: string) => (arg: T) => (
  fromBool(func(arg), failureMessage)
);
