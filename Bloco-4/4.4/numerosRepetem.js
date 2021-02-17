/*Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
 */

  function repeatNumbers(numbers) {
    let arrayNumbers = numbers[0];
      for( index in numbers) {
      if(arrayNumbers.length === numbers[index].length) {
        arrayNumbers = numbers[index];
      }
    }
    return arrayNumbers;
  }
  console.log(repeatNumbers([1, 2, 2, 1, 6, 7, 4, 4, 4]));