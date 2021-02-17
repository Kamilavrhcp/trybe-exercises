//const assert = require('assert');

const drummers = [
  { fullName: 'Matt Cameron', email: 'camarao@drummers.br' },
  { fullName: 'Gavin Harrison', email: 'harrison@drummers.br' },
  { fullName: 'Enrico Matta - Ninja', email: 'ninja@drummers.br'},
  { fullName: 'Chad Smith', email: 'chadao@drummers.br' },
];

const objectDrummers = drummers.reduce((previousValue, currentValue) => {
  previousValue[currentValue.fullName] = currentValue.email;
  return previousValue;
}, { });
console.log(objectDrummers);

// 1 iteracao: previousValue === { }
// currentValue === { fullName: 'Matt Cameron', email: 'camarao@drummers.br' }

// 2 iteracao: previousValue === {
// 'Matt Cameron', email: 'camarao@drummers.br'
// }
// currentValue === { fullName:'Gavin Harrison', email: 'harrison@drummers.br' }

// 3 iteracao
// previousValue === {
//  'Matt Cameron': 'camarao@drummers.br',
//  'Gavin Harrison': 'harrison@drummers.br'
// }
// currentValue === { fullName: 'Ninja', email: 'ninja@drummers.br'}

// 4 iteracao
// previousValue === {
//  'Matt Cameron': 'camarao@drummers.br',
//  'Gavin Harrison': 'harrison@drummers.br',
//  'Ninja', email: 'ninja@drummers.br',
// }
// currentValue === { fullName: 'Chad Smith', email: 'chadao@drummers.br' }

// retorna o acumulador
// {
//   'Matt Cameron': 'camarao@drummers.br',
//   'Gavin Harrison': 'harrison@drummers.br',
//   'Ninja', email: 'ninja@drummers.br',
//   'Chad Smith', email: 'chadao@drummers.br'
// }


const expectedValue = {
  'Matt Cameron': 'camarao@drummers.br',
  'Gavin Harrison': 'harrison@drummers.br',
  'Ninja': 'ninja@drummers.br',
  'Chad Smith': 'chadao@drummers.br'
};

//assert.deepStrictEqual(objectDrummers, expectedValue);