//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceMenor(numbers) {
  let menorIndice = 0;
  for(indices in numbers){
    if(numbers[menorIndices] > numbers[indices]) {
      menorIndice = indices;
    }
  }
  return menorIndice;
}
console.log(indiceMenor(2, 5, 6, 7, 9));