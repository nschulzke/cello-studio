import * as validation from '../validation';

describe('validation', () => {
  describe('emailIsValid', () => {
    it('accepts a valid email address', () => {
      expect(validation.emailIsValid({ email: 'test@test.com' }).success).toBe(true);
    });

    it('rejects an invalid email address', () => {
      let failure = validation.emailIsValid({ email: 'testtest.com' });
      expect(failure.success).toBe(false);
      expect(failure.data).toMatchSnapshot();
    });
  });
});
