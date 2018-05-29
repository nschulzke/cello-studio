import { EntityClass } from '../Entity';

describe('EntityClass', () => {
  it('generates a unique id', () => {
    let array: string[] = [];
    for (let i = 0; i < 100; i++) {
      array.push((new EntityClass()).id);
    }
    expect((new Set(array)).size).toEqual(array.length);
  });

  it('is itself', () => {
    let entity1 = new EntityClass();
    expect(entity1.is(entity1)).toBe(true);
  });

  it('is not another instance of the class', () => {
    let entity1 = new EntityClass();
    let entity2 = new EntityClass();
    expect(entity1.is(entity2)).toBe(false);
  });

  it('determines identity based on id', () => {
    let entity1 = new EntityClass();
    let entity2 = new EntityClass();
    entity2.id = entity1.id;
    expect(entity1.is(entity2)).toBe(true);
  });
})
