import assert from 'assert';
import { max } from '../index.js';

describe('max', function() {
  describe('returns a number', function() {
    const result = max('d12+4d6+5');
    const typeofResult = typeof result;
    it('returns result type of number', function() {
      assert.strictEqual(typeofResult, 'number');
    });
  });

  describe('works correctly with positive', function() {
    const result = max('d12+4d6+5');
    it('max d12+4d6+5 = 41', function() {
      assert.strictEqual(result, 41);
    });
  });

  describe('works correctly with negative', function() {
    const result = max('d12-d6');
    it('max d12-d6 = 11', function() {
      assert.strictEqual(result, 11);
    });
  });

  describe('returns detailed results if detailed flag given', function() {
    const isDetailed = function(result) {
      return (
        result.hasOwnProperty('result') &&
        result.hasOwnProperty('rolls') &&
        typeof result.result === 'number' &&
        Array.isArray(result.rolls)
      );
    };
    const result = max('3d10+6d8+12', true);
    it('returns result type of detailed', function() {
      assert.strictEqual(isDetailed(result), true);
    });
  });
});
