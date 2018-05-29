interface TypeChecker<T> {
  is(obj: T): obj is T;
}

type Maybe<T> = T | null;

type Index<T> = {
  [index: string]: T;
};

export { TypeChecker, Maybe, Index };
