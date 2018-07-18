import { profiles } from '../index';

describe('profiles', () => {
  let student = { email: 'test@test.com', hash: 'fdjsklg', name: 'Test Me', parentName: 'Help Me' };
  let filled = { [student.email]: student }

  describe('get', () => {
    it('gets a student profile from the index', () => {
      let got = profiles.get(filled, student.email);
      expect((got as any).hash).toEqual(undefined);
      expect(got.name).toEqual('Test Me');
      expect(got.parentName).toEqual('Help Me');
      expect(got.contactEmail).toEqual('');
    });
  });

  describe('update', () => {
    it('updates a student profile', () => {
      let newContactEmail = 'test@example.com';
      let updated = profiles.update(filled, student.email, { contactEmail: newContactEmail });
      expect(updated[student.email].contactEmail).toEqual(newContactEmail);
    });

    it('leaves the original intact', () => {
      let newContactEmail = 'test@example.com';
      profiles.update(filled, student.email, { contactEmail: newContactEmail });
      expect((filled[student.email] as any).contactEmail).toEqual(undefined);
    });
  });

  describe('getAll', () => {
    it('returns an array', () => {
      let got = profiles.getAll(filled);
      expect(Array.isArray(got)).toBe(true);
    });

    it('contains the values', () => {
      let got = profiles.getAll(filled);
      expect((got[0] as any).hash).toEqual(undefined);
      expect(got[0].name).toEqual('Test Me');
      expect(got[0].parentName).toEqual('Help Me');
      expect(got[0].contactEmail).toEqual('');
    });
  });
});
