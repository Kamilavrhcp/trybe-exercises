/* Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .*/

  function comparacaoStrings(words, ending) {
    let oneString = words.split('').reverse().join('');
    let twoString = ending.split('').reverse().join('');
      for (let index = 0; index < twoString.length; index += 1) {
      if (oneString[index] != twoString[index]) {
        return false;
      } else {
        return true;
      }
    }
  }
  console.log(comparacaoStrings('arroz', 'feijão'));
  console.log(comparacaoStrings('trybe', 'be'));