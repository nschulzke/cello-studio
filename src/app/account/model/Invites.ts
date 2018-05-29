import * as crypto from 'crypto';
import * as moment from 'moment';
import { Index } from 'app/shared/types';
import { Invite } from '../types';

const invites: Index<Invite> = {};

async function findInvite(code: string): Promise<Invite | undefined> {
  return invites[code];
}

async function createInvite(): Promise<Invite> {
  const code = crypto.randomBytes(32).toString('hex');
  const expiresOn = moment().add(2, 'weeks').toDate();
  invites[code] = { code, expiresOn };
  return invites[code];
}

export { findInvite, createInvite };
