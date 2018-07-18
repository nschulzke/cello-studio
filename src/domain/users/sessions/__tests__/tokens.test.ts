import { prepareTokens } from '../tokens';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('tokens', () => {
  let tokens = prepareTokens({ secret: 'mysecret', duration: '1s' });
  let payload = 'test@example.com';

  describe('encode', () => {
    it('allows creation of json web tokens', () => {
      let token = tokens.encode(payload);
      expect(token).toBeTruthy();
    });
  });

  describe('decode', () => {
    it('returns the correct decoded message', () => {
      let token = tokens.encode(payload);
      expect(tokens.decode(token)).toEqual(payload);
    });

    it('returns null if the item is expired', async () => {
      let token = tokens.encode(payload);
      await timeout(1000);
      expect(tokens.decode(token)).toBe(false);
    });
  })
});
