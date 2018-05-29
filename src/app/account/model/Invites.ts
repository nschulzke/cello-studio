import { Index } from 'app/shared/types';
import { InviteClass, Invite } from '../domain/Invite';

const invites: Index<Invite> = {};

async function findInvite(id: string): Promise<Invite | undefined> {
  return invites[id];
}

async function createInvite(): Promise<Invite> {
  let invite = new InviteClass();
  invites[invite.id] = invite;
  return invite;
}

export { findInvite, createInvite };
