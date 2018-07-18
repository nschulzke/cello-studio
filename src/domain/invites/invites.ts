import { makeId } from 'domain/helpers/makeId'
import * as moment from 'moment';

export const invites = {
  create: () => ({
    id: makeId(),
    expiresOn: moment().add(2, 'weeks').toDate(),
  }),

  validate: (invite) => invite.expiresOn > moment().toDate(),
}
