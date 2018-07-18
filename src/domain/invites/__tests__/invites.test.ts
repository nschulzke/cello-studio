import { invites } from '../invites';

describe('invites', () => {
  describe('create', () => {
    it('has a unique id', () => {
      let first = invites.create();
      let second = invites.create();
      expect(typeof first.id).toBe('string');
      expect(typeof second.id).toBe('string');
      expect(first.id === second.id).toBe(false);
    });
  });
});
