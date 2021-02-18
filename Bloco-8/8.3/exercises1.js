
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// Dada uma matriz de matrizes, transforme em uma única matriz.

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

// O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro
assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);