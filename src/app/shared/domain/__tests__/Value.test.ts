import { Value, ValueClass } from '../Value';

class TestClass extends ValueClass {
  constructor(
    public field1: string,
    public field2: number,
    public field3: boolean,
    public field4: Value,
  ) { super() };
}

class Child extends ValueClass {
  constructor(
    public name: string,
  ) { super() };
}

describe('ValueClass', () => {
  it('is equal to an identical class instance', () => {
    let creds1 = new TestClass('test@test.com', 30, true, new Child('harry'));
    let creds2 = new TestClass('test@test.com', 30, true, new Child('harry'));
    expect(creds1.equals(creds2)).toBe(true);
    expect(creds2.equals(creds1)).toBe(true);
  });

  it('is equal to an identical object literal', () => {
    let creds1 = new TestClass('test@test.com', 30, true, new Child('harry'));
    let creds2 = { ...creds1 };
    expect(creds1.equals(creds2)).toBe(true);
  });

  it('is not equal if strings are different', () => {
    let creds1 = new TestClass('test@test.com', 30, true, new Child('harry'));
    let creds2 = new TestClass('test@test2.com', 30, true, new Child('harry'));
    expect(creds1.equals(creds2)).toBe(false);
    expect(creds2.equals(creds1)).toBe(false);
  });

  it('is not equal if numbers are different', () => {
    let creds1 = new TestClass('test@test.com', 30, true, new Child('harry'));
    let creds2 = new TestClass('test@test.com', 31, true, new Child('harry'));
    expect(creds1.equals(creds2)).toBe(false);
    expect(creds2.equals(creds1)).toBe(false);
  });

  it('is not equal if booleans are different', () => {
    let creds1 = new TestClass('test@test.com', 30, true, new Child('harry'));
    let creds2 = new TestClass('test@test.com', 30, false, new Child('harry'));
    expect(creds1.equals(creds2)).toBe(false);
    expect(creds2.equals(creds1)).toBe(false);
  });

  it('is not equal if child values are different', () => {
    let creds1 = new TestClass('test@test.com', 30, true, new Child('harry'));
    let creds2 = new TestClass('test@test.com', 30, true, new Child('harry2'));
    expect(creds1.equals(creds2)).toBe(false);
    expect(creds2.equals(creds1)).toBe(false);
  });
})
