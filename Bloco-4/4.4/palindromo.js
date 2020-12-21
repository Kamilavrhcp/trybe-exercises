function palindromo(string) {
let reverse = string.split('').reverse().join('');
  if(reverse === string) {
    return true;
  } else {
  return false;
  }
}
console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));
