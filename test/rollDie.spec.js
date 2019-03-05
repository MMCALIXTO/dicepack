import assert from 'assert';
import { rollDie } from '../index.js';

describe('rollDie', function() {
  describe('test side = 0', function() {
    const result = rollDie({ count: -1, side: 0 });
    const isArray = Array.isArray(result);
    it('returns result type of array', function() {
      assert.strictEqual(isArray, true);
    });

    const length = result.length;
    it('result array length = 1', function() {
      assert.strictEqual(length, 1);
    });

    const resultValue = result[0];
    it('result = 0', function() {
      assert.strictEqual(resultValue, 0);
    });
  });

  describe('test count = 0', function() {
    const result = rollDie({ count: 0, side: 12 });
    const isArray = Array.isArray(result);
    it('returns result type of array if count = 0', function() {
      assert.strictEqual(isArray, true);
    });

    const length = result.length;
    it('array length = 1', function() {
      assert.strictEqual(length, 1);
    });

    const resultValue = result[0];
    it('result = 0', function() {
      assert.strictEqual(resultValue, 0);
    });
  });

  describe('test if side = 1, count = 6', function() {
    const result = rollDie({ count: 6, side: 1 });
    const isArray = Array.isArray(result);
    it('returns result type of array', function() {
      assert.strictEqual(isArray, true);
    });

    const length = result.length;
    it('array length = 1', function() {
      assert.strictEqual(length, 1);
    });

    const resultValue = result[0];
    it('returns count = 6', function() {
      assert.strictEqual(resultValue, 6);
    });
  });

  describe('test if side = 1 and negative count -2', function() {
    const result = rollDie({ count: -2, side: 1 });
    const isArray = Array.isArray(result);
    it('returns result type of array', function() {
      assert.strictEqual(isArray, true);
    });

    const length = result.length;
    it('array length = 1', function() {
      assert.strictEqual(length, 1);
    });

    const resultValue = result[0];
    it('returns count = -2', function() {
      assert.strictEqual(resultValue, -2);
    });
  });

  describe('test roll positive count 65 and side = 8', function() {
    const result = rollDie({ count: 65, side: 8 });
    const isArray = Array.isArray(result);
    it('returns  result type of array', function() {
      assert.strictEqual(isArray, true);
    });

    const length = result.length;
    it('result array length = count 65', function() {
      assert.strictEqual(length, 65);
    });

    it('positive count causes every result is between 1 and 8', function() {
      const resultsInRange = result.every(result => 1 <= result && result <= 8);
      assert.strictEqual(resultsInRange, true);
    });
  });

  describe('test roll negative count -100 and side = 6', function() {
    const result = rollDie({ count: -100, side: 6 });
    const isArray = Array.isArray(result);
    it('returns result type of array', function() {
      assert.strictEqual(isArray, true);
    });
    
    const length = result.length;
    it('result array length = count modulo 100', function() {
      assert.strictEqual(length, 100);
    });

    it('negative count causes every result is between -6 and -1', function() {
      const resultsInRange = result.every(result => -6 <= result && result <= -1);
      assert.strictEqual(resultsInRange, true);
    });
  });
});
