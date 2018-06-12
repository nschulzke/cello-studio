import { InviteClass } from '../Invite';

describe('InviteClass', () => {
  it('generates a new date in the future', () => {
    let invite = new InviteClass();
    console.log(invite.id);
    expect(invite.expiresOn.valueOf()).toBeGreaterThan(new Date().valueOf() + 1000);
  });
});
