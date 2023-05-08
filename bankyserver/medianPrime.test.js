const { medianPrime } = require('../../bankyserver/medianPrime').default;

describe('medianPrime', () => {
 
  test('returns the median prime number less than 10', () => {
    const result = medianPrime(10);
    expect(result).toBe(5);
  });
});
