import * as uuid from 'uuid/v1';

interface Entity {
  id: string;
  is(obj: Entity): boolean;
}

class EntityClass implements Entity {
  id: string = uuid();

  is(obj: Entity) {
    return obj.id === this.id;
  }
}

export { Entity, EntityClass };
