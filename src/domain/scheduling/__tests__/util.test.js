import { pipe, conditional } from '../util';

describe('function pipe', () => {
  it('pipes correctly', () => {
    const concat = toAdd => string => {
      return string + toAdd;
    }
    expect(pipe(
      concat('e'),
      concat('l'),
      concat('l'),
      concat('o'),
    )('H')).toEqual('Hello');
  });
});

describe('function cond', () => {
  const toUpper = string => string.toUpperCase();
  const toLower = string => string.toLowerCase();
  const concat = toAdd => string => string + toAdd;

  it('maps if correctly', () => {
    expect(conditional(
      toUpper
    )(true)('hello')).toEqual('HELLO');

    expect(conditional(
      toUpper
    )(false)('hello')).toEqual('hello');
  });

  it('has an else block', () => {
    expect(conditional(
      toUpper,
      toLower
    )(true)('Hello')).toEqual('HELLO');

    expect(conditional(
      toUpper,
      toLower
    )(false)('Hello')).toEqual('hello');
  });

  it('can be piped', () => {
    expect(pipe(
      concat('e'),
      concat('l'),
      concat('l'),
      concat('o'),
      conditional(
        toUpper,
        toLower
      )(false)
    )('H')).toEqual('hello');
  });

  it('can accept a pipe', () => {
    expect(conditional(
      pipe(
        concat('e'),
        concat('l'),
        concat('l'),
        concat('o'),
        conditional(
          toUpper,
          toLower
        )(false)
      )
    )(true)('H')).toEqual('hello');
  })
})
