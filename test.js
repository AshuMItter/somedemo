const { add } = require('./index.js');
const assert = require('assert');

assert.strictEqual(add(2, 3), 5, 'add(2,3) should equal 5');
assert.strictEqual(add(-1, 1), 0, 'add(-1,1) should equal 0');
console.log('All tests passed!');