export interface TypeChecker<T> {
  is(obj: T): obj is T;
}

export type Index<T> = {
  [index: string]: T;
};
