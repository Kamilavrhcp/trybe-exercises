
const assert = require('assert');
const { constants } = require('buffer');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];


// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA() {
  return names.reduce((acc, curr) =>
    acc + curr.split('').reduce((acumullator, current) => {
      if ((current === 'A') || (current  === 'a'))

      return acumullator +1;
      return acumullator;
  }, 0), 0);
}
//console.log(containsA())

assert.deepStrictEqual(containsA(), 20);