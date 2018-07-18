import { credentials } from '../credentials'

describe('credentials', () => {
  let original = { email: 'test@example.com', password: 'mynewpass' }

  describe('hash', () => {
    let result = credentials.hash(original);

    it('leaves the email alone', () => {
      expect(result.email).toEqual(original.email);
    });

    it('hashes the password', () => {
      expect(result.hash).toBeTruthy();
    });
  });

  describe('compare', () => {
    let result = credentials.hash(original);

    it('returns true when given the same login', () => {
      expect(credentials.compare(original, result)).toBe(true);
    });

    it('returns false when given a bad email', () => {
      expect(credentials.compare({ ...original, email: 'hi!' }, result)).toBe(false);
    });

    it('returns false when given a bad password', () => {
      expect(credentials.compare({ ...original, password: 'hi!' }, result)).toBe(false);
    });
  });
});
