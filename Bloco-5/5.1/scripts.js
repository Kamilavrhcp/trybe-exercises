//1-Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.

  function changeText() {
    let tagP = document.getElementsByTagName("p")[0];
    tagP.innerText = "Eu desejo ter qualidade de vida e também emprego.";
  }
  changeText();

//2-Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

  function mainContentBackground() {
    let greenBackground = document.getElementsByClassName("main-content")[0];
    greenBackground.style.background = "rgb(76,164,109)";
  }
  mainContentBackground();

  //3-Crie uma função que mude a cor do quadrado vermelho para branco.

  function centerContentBackground() {
    let whiteBackground = document.getElementsByClassName("center-content")[0];
    whiteBackground.style.background = "rgb(255,250,250)";
  }
  centerContentBackground();

  //4- Crie uma função que corrija o texto da tag <h1>.
  function correctTittle() {
    let tittleCorrect = document.getElementsByClassName("title")[0];
    tittleCorrect.innerText = "Exercício 5.1 - JavaScript";
  }
  correctTittle();

  //5 -Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function upperCaseParagraph() {
  let string = document.getElementsByTagName("p")[0].innerText.toUpperCase();
  document.getElementsByTagName("p")[0].innerText = string;
}
upperCaseParagraph();

function upperCaseParagraph2() {
  let stringTwo = document.getElementsByTagName("p")[2].innerText.toUpperCase();
  document.getElementsByTagName("p")[2].innerText = stringTwo;
}
upperCaseParagraph2();

//6 Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function showAllsTags() {
  let allsShow = document.getElementsByTagName('p');
  for(let i = 0; i < allsShow.length; i += 1) {
    console.log(allsShow[i].innerHTML);
  }
}
showAllsTags();