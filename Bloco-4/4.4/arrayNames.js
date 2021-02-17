/* Crie uma função que receba um array de nomes e retorne o nome com maior quantidade de
caracteres */

function arrayNames(names) {
  let arrayNames = names[0];
  for(let index in names) {
    if(arrayNames.length < names[index].length) {
      arrayNames = names[index];
    }
  }
  return arrayNames;
}
console.log(arrayNames(['Matteo', 'Haia', 'Iara', 'Vitor', 'Rafael', 'Érico', 'Arietha']));