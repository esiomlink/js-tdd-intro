const assert =  require('assert');

//!  Egalité + Egalité & Type
//? assert.equal(Math.max(1,2,3,4,9),9)
//? assert.strictEqual(Math.max(1, 2, 3, 4, 9), '9')

//!  Non Egal + Non Egale & Type
//? assert.notEqual(Math.max(1, 2, 3, 4, 8), 9);
//? assert.notStrictEqual(Math.max(1, 2, 3, 4, 8), '9');

//!  Egalité des tableau et objets & leurs types
//? assert.deepEqual(Math.max([1, 2]), [1,2]);
//? assert.deepStrictEqual(Math.max([1, 2]), ['1','2']);

//! Booléen verif si true
//? assert.ok((1), true)




function capitalizeFirstLetters(input) {
  return input.length > 0 ? input[0].toUpperCase() + input.slice(1) : '';
}

assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(
  capitalizeFirstLetters('i am learning TDD'),
  'I am learning TDD'
);
assert.strictEqual(capitalizeFirstLetters('learning'), 'Learning');
assert.strictEqual(capitalizeFirstLetters(''), '');