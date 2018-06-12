import { Index } from 'app/shared/types';
import { InviteClass, Invite } from '../domain/Invite';
import JSONDB from 'app/shared/persistence/JSONDB';

const invites: Index<Invite> = {};

const database = new JSONDB<Index<Invite>>('invites.json');
const inviteObjects: Index<Invite> = database.read();
Object.keys(inviteObjects).forEach(id => {
  invites[id] = InviteClass.deserialize(inviteObjects[id]);
});

async function findInvite(id: string): Promise<Invite | undefined> {
  return invites[id];
}

async function createInvite(): Promise<Invite> {
  let invite = new InviteClass();
  invites[invite.id] = invite;
  database.write(invites);
  return invite;
}

export { findInvite, createInvite };
