/* crie uma função que receba um array de inteiros e retorne o índice do maior valor */

function maiorIndice(numbers) {
  let indicesMaior = 0;
  for(indices in numbers) {
    if(numbers[indicesMaior] < numbers[indices]) {
      indicesMaior = indices;
    } 
  }
  return indicesMaior;
}
console.log(maiorIndice([2, 3, 6, 7, 0, 1]));
