import { makeId } from '../makeId';

describe('makeId', () => {
  it('produces strings', () => {
    let first = makeId();
    expect(typeof first).toBe('string');
  });

  it('creates a unique id', () => {
    let first = makeId();
    let second = makeId();
    expect(first !== second).toBe(true);
  });
});
