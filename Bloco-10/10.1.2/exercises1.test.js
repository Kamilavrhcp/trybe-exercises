const { expect } = require('@jest/globals');
const sum = require('./exercises1');

describe('sum', () => {
  test('Soma de 4 e 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Soma de 0 e 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test ('Soma de 4 e "5"', () => {
    expect(sum(4, '5')).toBe(9);
  });
  test('Verifica-se os valores de entrada são números', () => {
    expect(() => {sum(4, '5') })
      .toThrow(/parameters must be numbers/);
  });
});