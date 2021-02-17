/*function userInfo() {
  var userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();*/

const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

/*let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition
*/

//Para alterar as propriedades de const:
/*const userInfo = {
  name: "Cláudio",
  id: "5489-2",
  email: "claudio@email.com"
};
userInfo.name = "João"

console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }*/

const technologies = ['Javascript', 'CSS', 'HTML'];
/*technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]*/

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

/*function minhaIdade () {
  for (const idade = 78; idade <=100; idade +=1) {
    //console.log(idade);
  }
  console.log('Fora dor for', idade);
}
minhaIdade () */

if (true) {
  // inicio do escopo do if
  const userAge = "20";
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20