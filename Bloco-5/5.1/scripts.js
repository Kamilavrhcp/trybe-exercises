document.getElementsByTagName('p')[0].innerText = 'Eu desejo ter qualidade de vida e também emprego.';

document.getElementsByClassName('main-content')[0].style.background = 'rgb(76,164,109)';

document.getElementsByClassName('center-content')[0].style.background = 'rgb(255,250,250)';

document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript'

/*let capitalLetters = document.getElementsById('p')[0].innerText.toUpperCase = 'Eu desejo ter qualidade de vida e também emprego.'; */

function upperCaseParagraph() {
  let string = document.getElementsByTagName('p')[0].innerText.toUpperCase();
  document.getElementsByTagName('p')[0].innerText = string;
;}
upperCaseParagraph();

function upperCaseParagraph2() {
  let stringTwo = document.getElementsByTagName('p')[2].innerText.toUpperCase();
  document.getElementsByTagName('p')[2].innerText = stringTwo;
}
upperCaseParagraph2();
/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
            
