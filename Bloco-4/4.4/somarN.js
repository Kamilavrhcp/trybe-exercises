/* Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. */

function somaNumeros(numbers) {
  let total = 0;
  for(let index = 0; index <= numbers.length; index += 1) {
      total = total + index;
  }
  return total;
}
console.log(somaNumeros([1,2,3,4,5]))