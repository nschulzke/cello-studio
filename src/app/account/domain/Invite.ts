import * as moment from 'moment';
import { EntityClass } from 'app/shared/domain/Entity';
import { Invite } from './types';

class InviteClass extends EntityClass implements Invite {
  constructor(
    public expiresOn: Date = moment().add(2, 'weeks').toDate(),
  ) { super() }
}

export { Invite, InviteClass };
