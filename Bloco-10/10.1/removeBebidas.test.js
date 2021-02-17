const { it, expect } = require('@jest/globals');
const removeBebidas = require('./removeBebidas');
const removeBebida = require('./removeBebidas');

describe('Remove sabor de bebida', () =>{
  it('Remove agua', () => {
    const bebidas = ['coca-cola', 'sukita', 'agua', 'garapa' ,'suco de laranja', 'groselha'];
    expect(['coca-cola', 'sukita', 'garapa','suco de laranja', 'groselha']).toEqual(removeBebidas(bebidas, 'agua'));
  });
  it('Remover garapa', () => {
    const bebidas = ['coca-cola', 'sukita', 'agua', 'garapa', 'suco de laranja', 'groselha'];
    expect(['coca-cola', 'sukita', 'agua', 'suco de laranja', 'groselha']).toEqual(removeBebidas(bebidas, 'garapa'));
  });
  it('Remover groselha caso exista', () =>{
    const bebidas = ['coca-cola', 'sukita', 'agua', 'garapa', 'suco de laranja', 'groselha'];
    expect(removeBebidas(bebidas, 'groselha')).not.toContain('groselha');
  });
});
// not.toContain = não contém certos elementos
// toContain = contem certos elementos