const {
  calculateBMIByPlayer,
  calculateHeightMedian
} = require('./stats-helpers');

describe("Median calculator", () => {

  test('Provide a null value', () => {
    try {
      expect(calculateBMIByPlayer(null)).toThrow(Error);
    } catch (e) {
      expect(e.message).toBe("please provide all required values.");
    }
  });

  test('Provide an empty array', () => {
    expect(calculateHeightMedian([])).toBe(null);
  });

  test('Provide a single value', () => {
    expect(calculateHeightMedian(10)).toBe(10);
  });

  test('Provide a list of values with an odd count', () => {
    expect(calculateHeightMedian([1, 2, 3, 4, 5])).toBe(3);
  });

  test('Provide a list of values with an even count', () => {
    expect(calculateHeightMedian([25, 10, 24, 12, 13, 13, 13, 15, 15, 16, 16, 18, 22, 9, 23, 24])).toBe(15.5);
  });
})

describe("BMI calculator", () => {
  test('Provide height and weight', () => {
    expect(calculateBMIByPlayer(170, 70)).toBe(24.2);
  });

  test('Not providing all values', () => {
    try {
      expect(calculateBMIByPlayer(null, 70)).toThrow(Error);
    } catch (e) {
      expect(e.message).toBe("please provide all required values.");
    }
  });
})