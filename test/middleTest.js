const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArrayEqual = require('../assertArrayEqual');
const assert = require('chai').assert;

describe('#middle', () => {
  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [] for [1]', () => {
    assert.include(middle[1], []);
  });
  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});