interface TypeChecker<T> {
  /**
   * Given an object literal, will guarantee that it matches the specifications
   */
  check(obj: T): T;
  is(obj: T): obj is T;
}

type Maybe<T> = T | null;

type Index<T> = {
  [index: string]: T;
};

export { TypeChecker, Maybe, Index };
