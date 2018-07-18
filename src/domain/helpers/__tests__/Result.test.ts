import * as Result from '../Result';

describe('Result', () => {
  describe('pipe', () => {
    it('pipes successes through to each other', () => {
      let result = Result.pipe(
        () => Result.Success('a'),
        (val) => Result.Success(val + 'e'),
        (val) => Result.Success(val + 'i'),
      );
      expect(result.success).toBe(true);
      expect(result.data).toBe('aei');
    });
  });


  describe('all', () => {
    it('returns the last success', () => {
      let result = Result.pipe(
        () => Result.Success('apple'),
        () => Result.Success('orange'),
        () => Result.Success('apricot'),
      );
      expect(result.success).toBe(true);
      expect(result.data).toBe('apricot');
    });

    it('breaks on the first failure', () => {
      let result = Result.pipe(
        () => Result.Success('apple'),
        () => Result.Failure('orange'),
        () => Result.Success('apricot'),
      );
      expect(result.success).toBe(false);
      expect(result.data).toBe('orange');
    });
  });
});
