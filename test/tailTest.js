const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('returns ["Eat, "Food", "Now"] for ["Hi", "Eat", "Food", "Now"]', () => {
    assert.deepEqual(tail(["Hi", "Eat", "Food", "Now"]), ["Eat", "Food", "Now"]);
  });
});